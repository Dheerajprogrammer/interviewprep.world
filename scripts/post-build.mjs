import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { XMLBuilder } from 'fast-xml-parser'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'docs', '.vitepress', 'dist')
const SITE_URL = 'https://interviewprep.world'

function walkHtml(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walkHtml(full, files)
    else if (entry.name.endsWith('.html')) files.push(full)
  }
  return files
}

function toUrl(filePath) {
  const rel = path.relative(DIST, filePath).replace(/\\/g, '/')
  if (rel === 'index.html') return `${SITE_URL}/`
  if (rel.endsWith('/index.html')) {
    return `${SITE_URL}/${rel.replace(/index\.html$/, '')}`
  }
  return `${SITE_URL}/${rel.replace(/\.html$/, '')}`
}

function writeRobots() {
  const body = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml

# LLMs
# See ${SITE_URL}/llms.txt
`
  fs.writeFileSync(path.join(DIST, 'robots.txt'), body)
}

function writeSitemap() {
  const htmlFiles = walkHtml(DIST).filter((f) => !f.includes('/pagefind/'))
  const urls = [...new Set(htmlFiles.map(toUrl))].sort()
  const builder = new XMLBuilder({ ignoreAttributes: false, format: true })
  const xml = builder.build({
    '?xml': { '@_version': '1.0', '@_encoding': 'UTF-8' },
    urlset: {
      '@_xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      url: urls.map((loc) => ({
        loc,
        changefreq: 'weekly',
        priority: loc === `${SITE_URL}/` ? '1.0' : '0.7',
      })),
    },
  })
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml)
}

function writeLlmsTxt() {
  const body = `# InterviewPrep.World

> ${SITE_URL} — 1000+ technical interview questions for React, Angular, JavaScript, TypeScript, frontend system design, and HR.

## Primary tracks

- ${SITE_URL}/react-interview-questions/
- ${SITE_URL}/angular-interview-questions/
- ${SITE_URL}/javascript-interview-questions/
- ${SITE_URL}/typescript-interview-questions/
- ${SITE_URL}/frontend-system-design/

## Optional

- ${SITE_URL}/search/
- ${SITE_URL}/llms.txt
`
  fs.writeFileSync(path.join(DIST, 'llms.txt'), body)
}

function writeRss() {
  const manifestPath = path.join(ROOT, 'docs', '.vitepress', 'manifest.json')
  let latest = []
  if (fs.existsSync(manifestPath)) {
    latest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')).latest ?? []
  }
  const items = latest
    .map(
      (entry) => `
    <item>
      <title><![CDATA[${entry.title}]]></title>
      <link>${SITE_URL}${entry.link}</link>
      <guid>${SITE_URL}${entry.link}</guid>
      <pubDate>${new Date(entry.updated).toUTCString()}</pubDate>
    </item>`,
    )
    .join('')
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>InterviewPrep.World — Latest Questions</title>
    <link>${SITE_URL}/</link>
    <description>Latest technical interview questions</description>${items}
  </channel>
</rss>`
  fs.writeFileSync(path.join(DIST, 'rss.xml'), rss)
}

function copyPublicHeaders() {
  const headers = path.join(ROOT, 'public', '_headers')
  if (fs.existsSync(headers)) {
    fs.copyFileSync(headers, path.join(DIST, '_headers'))
  }
}

if (!fs.existsSync(DIST)) {
  console.error('Dist folder missing. Run vitepress build first.')
  process.exit(1)
}

writeRobots()
writeSitemap()
writeLlmsTxt()
writeRss()
copyPublicHeaders()
console.log('Post-build: robots.txt, sitemap.xml, llms.txt, rss.xml')
