import { SITE_NAME, SITE_URL } from './constants'

export interface QuestionSchemaInput {
  question: string
  answerText: string
  url: string
  dateModified?: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function questionJsonLd(input: QuestionSchemaInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: input.question,
      text: input.question,
      dateModified: input.dateModified,
      acceptedAnswer: {
        '@type': 'Answer',
        text: input.answerText,
      },
    },
    url: input.url,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}

export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}
