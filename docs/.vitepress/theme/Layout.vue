<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'
import { useData } from 'vitepress'
import AdSlot from './components/AdSlot.vue'
import Breadcrumbs from './components/Breadcrumbs.vue'
import PrevNextNav from './components/PrevNextNav.vue'
import QuestionMeta from './components/QuestionMeta.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import { buildCanonical } from '../utils/seo'
import { breadcrumbJsonLd, questionJsonLd } from '../utils/schema'
import { onMounted, watch } from 'vue'

const { frontmatter, page, title } = useData()

const isQuestion = computed(() => frontmatter.value.question === true)

const prev = computed(
  () => frontmatter.value.prev as { text: string; link: string } | undefined,
)
const next = computed(
  () => frontmatter.value.next as { text: string; link: string } | undefined,
)
const breadcrumbs = computed(
  () =>
    (frontmatter.value.breadcrumbs as Array<{ label: string; link?: string }>) ??
    [],
)

function updateSchema() {
  if (!isQuestion.value) return
  document.querySelectorAll('[data-ip-schema]').forEach((el) => el.remove())
  const question = (frontmatter.value.questionTitle as string) ?? title.value
  const answerText = (frontmatter.value.answerExcerpt as string) ?? ''
  const path = page.value.relativePath
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '')
  const url = buildCanonical(path.startsWith('/') ? path : `/${path}`)
  const payloads = [
    questionJsonLd({
      question,
      answerText,
      url,
      dateModified: frontmatter.value.updated as string | undefined,
    }),
  ]
  const crumbs = breadcrumbs.value
    .filter((b) => b.link)
    .map((b) => ({ name: b.label, url: b.link! }))
  if (crumbs.length) payloads.push(breadcrumbJsonLd(crumbs))
  for (const data of payloads) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-ip-schema', 'true')
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }
}

function attachCopyButtons() {
  document.querySelectorAll('div[class*="language-"]').forEach((block) => {
    if (block.closest('.ip-copy-wrap')) return
    const pre = block.querySelector('pre')
    if (!pre) return
    const wrap = document.createElement('div')
    wrap.className = 'ip-copy-wrap'
    block.parentNode?.insertBefore(wrap, block)
    wrap.appendChild(block)
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'ip-copy-btn'
    btn.textContent = 'Copy'
    btn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(pre.textContent ?? '')
      btn.textContent = 'Copied!'
      setTimeout(() => {
        btn.textContent = 'Copy'
      }, 2000)
    })
    wrap.appendChild(btn)
  })
}

onMounted(() => {
  if (isQuestion.value) {
    document.querySelector('.vp-doc')?.setAttribute('data-pagefind-body', '')
  }
  updateSchema()
  attachCopyButtons()
})

watch(
  () => page.value.relativePath,
  () => {
    updateSchema()
    attachCopyButtons()
  },
)
</script>

<template>
  <ReadingProgress />
  <DefaultTheme.Layout>
    <template #nav-bar-content-after>
      <a
        class="ip-header-sponsor"
        href="https://github.com/sponsors/Dheerajprogrammer"
        target="_blank"
        rel="noreferrer"
      >
        <span aria-hidden="true">♥</span> Sponsor
      </a>
    </template>

    <template v-if="isQuestion" #doc-before>
      <Breadcrumbs v-if="breadcrumbs.length" :items="breadcrumbs" />
      <QuestionMeta />
      <AdSlot id="question-top" provider="adsense" />
    </template>

    <template v-if="isQuestion" #doc-after>
      <AdSlot id="question-bottom" provider="affiliate" />
      <PrevNextNav :prev="prev" :next="next" />
    </template>
  </DefaultTheme.Layout>
</template>
