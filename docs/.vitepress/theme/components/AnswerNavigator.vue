<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

type SearchResult = {
  url: string
  excerpt: string
  meta?: { title?: string }
}

const open = ref(false)
const query = ref('')
const searching = ref(false)
const error = ref('')
const results = ref<SearchResult[]>([])
const searchedQuery = ref('')
const input = ref<HTMLInputElement | null>(null)
let debounceTimer: ReturnType<typeof setTimeout> | undefined
let searchSequence = 0

async function toggle() {
  open.value = !open.value
  if (open.value) {
    await nextTick()
    input.value?.focus()
  }
}

async function search(term = query.value.trim()) {
  if (!term || searching.value) return

  if (debounceTimer) clearTimeout(debounceTimer)
  const sequence = ++searchSequence
  searching.value = true
  searchedQuery.value = term
  error.value = ''
  results.value = []
  try {
    const pagefindUrl = '/pagefind/pagefind.js'
    const pagefind = await import(/* @vite-ignore */ pagefindUrl)
    await pagefind.init()
    const response = await pagefind.search(term)
    const nextResults = await Promise.all(
      response.results.slice(0, 5).map((result: { data: () => Promise<SearchResult> }) => result.data()),
    )
    if (sequence === searchSequence) results.value = nextResults
  } catch {
    if (sequence === searchSequence) {
      error.value = 'The answer index is unavailable in development. Run npm run docs:build and preview the site.'
    }
  } finally {
    if (sequence === searchSequence) searching.value = false
  }
}

watch(query, (value) => {
  if (debounceTimer) clearTimeout(debounceTimer)
  searchSequence += 1
  searching.value = false
  searchedQuery.value = ''
  results.value = []
  error.value = ''

  const term = value.trim()
  if (term.length < 2) return
  debounceTimer = setTimeout(() => search(term), 550)
})

onBeforeUnmount(() => {
  if (debounceTimer) clearTimeout(debounceTimer)
})

function navigate(url: string) {
  window.location.assign(url)
}
</script>

<template>
  <button
    class="ip-answer-launcher"
    type="button"
    :aria-expanded="open"
    aria-controls="ip-answer-navigator"
    @click="toggle"
  >
    <span aria-hidden="true">⌕</span>
    Find an answer
  </button>

  <section
    v-if="open"
    id="ip-answer-navigator"
    class="ip-answer-panel"
    role="dialog"
    aria-modal="false"
    aria-labelledby="ip-answer-title"
  >
    <header>
      <div>
        <strong id="ip-answer-title">Interview answer finder</strong>
        <span>Ask naturally. I’ll take you to the best lesson.</span>
      </div>
      <button type="button" aria-label="Close answer finder" @click="toggle">×</button>
    </header>

    <div class="ip-answer-conversation" aria-live="polite">
      <p class="ip-answer-bot">
        What do you want to learn? Try “React stale closures” or “difference between Subject and BehaviorSubject”.
      </p>

      <p v-if="searchedQuery" class="ip-answer-user">{{ searchedQuery }}</p>
      <p v-if="searching" class="ip-answer-bot">Searching the learning library…</p>
      <p v-else-if="error" class="ip-answer-bot ip-answer-error">{{ error }}</p>
      <p v-else-if="searchedQuery && !results.length" class="ip-answer-bot">
        I couldn’t find a close answer. Try a technology name plus the concept, such as “Angular route guards”.
      </p>

      <div v-if="results.length" class="ip-answer-results">
        <p class="ip-answer-bot">I found these lessons. Choose one to open the full answer:</p>
        <button
          v-for="result in results"
          :key="result.url"
          type="button"
          class="ip-answer-result"
          @click="navigate(result.url)"
        >
          <strong>{{ result.meta?.title ?? 'Interview question' }}</strong>
          <span v-html="result.excerpt" />
          <small>Open answer →</small>
        </button>
      </div>
    </div>

    <form class="ip-answer-form" @submit.prevent="search()">
      <label class="visually-hidden" for="ip-answer-query">Find an interview answer</label>
      <input
        id="ip-answer-query"
        ref="input"
        v-model="query"
        type="search"
        autocomplete="off"
        placeholder="Ask about any interview topic…"
      />
      <button type="submit" :disabled="searching || !query.trim()">Find</button>
    </form>
  </section>
</template>

<style scoped>
.ip-answer-launcher { position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 40; display: flex; align-items: center; gap: .5rem; border: 0; border-radius: 999px; padding: .8rem 1rem; color: white; background: #2563eb; box-shadow: 0 12px 30px rgb(15 23 42 / .22); font-weight: 700; cursor: pointer; }
.ip-answer-launcher span { font-size: 1.25rem; }
.ip-answer-panel { position: fixed; right: 1.25rem; bottom: 5rem; z-index: 41; width: min(26rem, calc(100vw - 2rem)); max-height: min(38rem, calc(100vh - 7rem)); display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--vp-c-divider); border-radius: 1rem; background: var(--vp-c-bg); box-shadow: 0 24px 60px rgb(15 23 42 / .25); }
.ip-answer-panel header { display: flex; justify-content: space-between; gap: 1rem; padding: 1rem; color: white; background: #1d4ed8; }
.ip-answer-panel header div { display: grid; gap: .15rem; }
.ip-answer-panel header span { font-size: .78rem; opacity: .85; }
.ip-answer-panel header button { align-self: flex-start; border: 0; color: white; background: transparent; font-size: 1.5rem; cursor: pointer; }
.ip-answer-conversation { min-height: 15rem; overflow-y: auto; padding: 1rem; }
.ip-answer-bot, .ip-answer-user { width: fit-content; max-width: 88%; margin: 0 0 .75rem; padding: .65rem .8rem; border-radius: .8rem; font-size: .9rem; line-height: 1.45; }
.ip-answer-bot { background: var(--vp-c-bg-soft); }
.ip-answer-user { margin-left: auto; color: white; background: #2563eb; }
.ip-answer-error { color: var(--vp-c-danger-1); }
.ip-answer-results { display: grid; }
.ip-answer-result { display: grid; gap: .3rem; width: 100%; margin-bottom: .6rem; padding: .75rem; text-align: left; border: 1px solid var(--vp-c-divider); border-radius: .75rem; color: var(--vp-c-text-1); background: var(--vp-c-bg); cursor: pointer; }
.ip-answer-result:hover { border-color: #2563eb; background: var(--vp-c-bg-soft); }
.ip-answer-result span { overflow: hidden; color: var(--vp-c-text-2); font-size: .8rem; line-height: 1.35; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
.ip-answer-result small { color: #2563eb; font-weight: 700; }
.ip-answer-form { display: flex; gap: .5rem; padding: .75rem; border-top: 1px solid var(--vp-c-divider); }
.ip-answer-form input { min-width: 0; flex: 1; border: 1px solid var(--vp-c-divider); border-radius: .65rem; padding: .65rem .75rem; color: var(--vp-c-text-1); background: var(--vp-c-bg); }
.ip-answer-form button { border: 0; border-radius: .65rem; padding: .65rem .9rem; color: white; background: #2563eb; font-weight: 700; cursor: pointer; }
.ip-answer-form button:disabled { opacity: .5; cursor: not-allowed; }
.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (max-width: 640px) { .ip-answer-launcher { right: .75rem; bottom: .75rem; } .ip-answer-panel { inset: auto .5rem 4.5rem; width: auto; max-height: calc(100vh - 5.5rem); } }
</style>
