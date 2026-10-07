import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from './constants'

export interface PageSeoInput {
  title: string
  description: string
  path: string
  ogImage?: string
  type?: 'website' | 'article'
  dateModified?: string
}

function normalizePath(path: string): string {
  if (!path.startsWith('/')) return `/${path}`
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path
}

export function pageTitle(questionTitle: string): string {
  return `${questionTitle} Interview Question`
}

export function buildCanonical(path: string): string {
  const normalized = normalizePath(path)
  return `${SITE_URL}${normalized === '/' ? '' : normalized}`
}

export function buildHeadMeta(seo: PageSeoInput): Array<[string, Record<string, string>]> {
  const canonical = buildCanonical(seo.path)
  const ogImage = seo.ogImage?.startsWith('http')
    ? seo.ogImage
    : `${SITE_URL}${seo.ogImage ?? DEFAULT_OG_IMAGE.replace(SITE_URL, '')}`

  const fullTitle =
    seo.title.includes(SITE_NAME) ? seo.title : `${seo.title} | ${SITE_NAME}`

  return [
    ['meta', { name: 'description', content: seo.description }],
    ['link', { rel: 'canonical', href: canonical }],
    ['meta', { property: 'og:type', content: seo.type ?? 'article' }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:title', content: fullTitle }],
    ['meta', { property: 'og:description', content: seo.description }],
    ['meta', { property: 'og:url', content: canonical }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: fullTitle }],
    ['meta', { name: 'twitter:description', content: seo.description }],
    ['meta', { name: 'twitter:image', content: ogImage }],
  ]
}
