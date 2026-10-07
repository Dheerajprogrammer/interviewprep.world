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
import {
  informationalPageJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from './utils/schema'

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
      {
        text: 'More Topics',
        items: [
          { text: 'Frontend', link: '/frontend-interview-questions/' },
          { text: 'Backend', link: '/backend-interview-questions/' },
          { text: 'Database', link: '/database-interview-questions/' },
          { text: 'DevOps & Cloud', link: '/devops-cloud-interview-questions/' },
          { text: 'Architecture', link: '/architecture-interview-questions/' },
        ],
      },
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
      message:
        'Built for developers preparing for technical interviews. &nbsp;·&nbsp; <a href="/about-us/">About us</a> &nbsp;·&nbsp; <a href="/contact-us/">Contact us</a> &nbsp;·&nbsp; <a href="/privacy-policy/">Privacy policy</a> &nbsp;·&nbsp; <a href="/terms-and-conditions/">Terms &amp; conditions</a>',
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
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(organizationJsonLd()),
      ])
    }

    const staticPages: Record<
      string,
      { type: 'AboutPage' | 'ContactPage' | 'WebPage'; path: string }
    > = {
      'about-us/index.md': { type: 'AboutPage', path: '/about-us' },
      'contact-us/index.md': { type: 'ContactPage', path: '/contact-us' },
      'privacy-policy/index.md': { type: 'WebPage', path: '/privacy-policy' },
      'terms-and-conditions/index.md': {
        type: 'WebPage',
        path: '/terms-and-conditions',
      },
    }
    const staticPage = staticPages[pageData.relativePath]
    if (staticPage) {
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(
          informationalPageJsonLd({
            type: staticPage.type,
            name: pageData.title,
            description:
              (fm.description as string) ?? SITE_DESCRIPTION,
            path: staticPage.path,
          }),
        ),
      ])
      if (staticPage.type === 'ContactPage') {
        head.push([
          'script',
          { type: 'application/ld+json' },
          JSON.stringify(organizationJsonLd()),
        ])
      }
    }
  },

  vite: {
    publicDir: path.join(__dirname, '..', '..', 'public'),
    ssr: {
      noExternal: [],
    },
  },

})
