<script setup lang="ts">
import { onMounted, ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const ready = ref(false)
const error = ref<string | null>(null)

function loadUiScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(script)
  })
}

onMounted(async () => {
  if (typeof window === 'undefined') return
  try {
    // Pagefind's core bundle uses import.meta and must be loaded as an ES module.
    // Loading it with a plain <script> causes a SyntaxError and breaks hydration.
    const pagefindUrl = '/pagefind/pagefind.js'
    const pagefind = await import(/* @vite-ignore */ pagefindUrl)
    await pagefind.init()
    await loadUiScript('/pagefind/pagefind-ui.js')
    if (containerRef.value && window.PagefindUI) {
      new window.PagefindUI({
        element: containerRef.value,
        showImages: false,
        resetStyles: false,
        highlightParam: 'highlight',
      })
      ready.value = true
    }
  } catch {
    error.value =
      'Search indexes after deploy. Run npm run docs:build and preview to test Pagefind.'
  }
})
</script>

<script lang="ts">
declare global {
  interface Window {
    PagefindUI?: new (options: Record<string, unknown>) => unknown
  }
}
</script>

<template>
  <div class="ip-search-wrap">
    <p v-if="error" class="ip-search-fallback">{{ error }}</p>
    <div
      ref="containerRef"
      class="pagefind-ui"
      role="search"
      aria-label="Search interview questions"
    />
    <p v-if="!ready && !error" class="ip-search-fallback">Loading search…</p>
  </div>
</template>

<style scoped>
.ip-search-fallback {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  text-align: center;
}
</style>
