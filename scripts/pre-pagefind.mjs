import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, '..', 'docs', '.vitepress', 'dist')

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'pagefind') continue
      walk(full, files)
    } else if (entry.name.endsWith('.html')) files.push(full)
  }
  return files
}

let updated = 0
for (const file of walk(DIST)) {
  let html = fs.readFileSync(file, 'utf8')
  if (!html.includes('vp-doc')) continue
  const next = html.replace(
    /class="([^"]*\bvp-doc\b[^"]*)"/,
    'class="$1" data-pagefind-body',
  )
  if (next !== html) {
    fs.writeFileSync(file, next)
    updated++
  }
}

console.log(`pre-pagefind: tagged ${updated} HTML files for Pagefind`)
