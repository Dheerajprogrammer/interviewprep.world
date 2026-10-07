import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  TRACKS,
} from './utils/constants'
import { buildHeadMeta, pageTitle } from './utils/seo'
import { websiteJsonLd } from './utils/schema'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const manifestPath = path.join(__dirname, 'manifest.json')

type Manifest = {
  sidebars: Record<
    string,
    Array<{
      text: string
      link?: string
      collapsed?: boolean
      items?: Array<{ text: string; link?: string }>
    }>
  >
}

function loadManifest(): Manifest {
  if (!fs.existsSync(manifestPath)) {
    return { sidebars: {} }
  }
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as Manifest
}

const manifest = loadManifest()

const cloudflareAnalytics = process.env.CF_WEB_ANALYTICS_TOKEN
  ? [
      [
        'script',
        {
          defer: '',
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          'data-cf-beacon': JSON.stringify({ token: process.env.CF_WEB_ANALYTICS_TOKEN }),
        },
      ] as [string, Record<string, string>],
    ]
  : []

export default defineConfig({
  title: SITE_NAME,
  titleTemplate: ':title | InterviewPrep.World',
  description: SITE_DESCRIPTION,
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  srcDir: '.',
  srcExclude: ['README.md'],
  ignoreDeadLinks: true,

  sitemap: {
    hostname: SITE_URL,
  },

  head: [
    ['meta', { name: 'theme-color', content: '#2563EB' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { name: 'twitter:site', content: '@interviewprepworld' }],
    ...cloudflareAnalytics,
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: SITE_NAME,
    outline: { level: [2, 3], label: 'On this page' },

    nav: [
      { text: 'React', link: '/react-interview-questions/' },
      { text: 'Angular', link: '/angular-interview-questions/' },
      { text: 'JavaScript', link: '/javascript-interview-questions/' },
      { text: 'TypeScript', link: '/typescript-interview-questions/' },
      { text: 'System Design', link: '/frontend-system-design/' },
      { text: 'HR', link: '/hr-interview-questions/' },
      { text: 'Search', link: '/search/' },
    ],

    sidebar: {
      ...manifest.sidebars,
      '/resume-preparation/': [{ text: 'Overview', link: '/resume-preparation/' }],
      '/guides/': [{ text: 'Guides', link: '/guides/' }],
      '/blog/': [{ text: 'Blog', link: '/blog/' }],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/Dheerajprogrammer/interviewprep.world' }],

    footer: {
      message: 'Built for developers preparing for technical interviews.',
      copyright: `Copyright © ${new Date().getFullYear()} ${SITE_NAME}`,
    },

    search: false,

    darkModeSwitchLabel: 'Appearance',
  },

  transformPageData(pageData) {
    const fm = pageData.frontmatter as Record<string, unknown>
    const isQuestion = fm.question === true
    const rawTitle = (fm.questionTitle as string) ?? (fm.title as string) ?? pageData.title
    const description =
      (fm.description as string) ??
      `${rawTitle} — interview question with answers and examples on ${SITE_NAME}.`

    const routePath = pageData.relativePath
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')
    const urlPath = routePath ? `/${routePath}` : '/'
    const normalizedPath = urlPath.replace(/\/$/, '') || '/'

    if (isQuestion) {
      pageData.title = pageTitle(rawTitle)
      fm.title = pageData.title
    }

    const ogImage =
      (fm.ogImage as string) ??
      TRACKS.find((t) => normalizedPath.startsWith(t.path.replace(/\/$/, '')))?.ogImage ??
      DEFAULT_OG_IMAGE

    const headEntries = buildHeadMeta({
      title: isQuestion ? pageTitle(rawTitle) : (pageData.title as string),
      description,
      path: normalizedPath,
      ogImage: ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`,
      type: isQuestion ? 'article' : 'website',
      dateModified: fm.updated as string | undefined,
    })

    pageData.frontmatter.head = headEntries
  },

  transformHead({ head, pageData }) {
    const fm = pageData.frontmatter as Record<string, unknown>
    const extra = fm.head as Array<[string, Record<string, string>]> | undefined
    const seen = new Set<string>()
    if (extra?.length) {
      for (const entry of extra) {
        const key = JSON.stringify(entry)
        if (seen.has(key)) continue
        seen.add(key)
        head.push(entry)
      }
    }
    if (pageData.relativePath === 'index.md') {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(websiteJsonLd()),
      ])
    }
  },

  vite: {
    publicDir: path.join(__dirname, '..', '..', 'public'),
    ssr: {
      noExternal: [],
    },
  },

})
