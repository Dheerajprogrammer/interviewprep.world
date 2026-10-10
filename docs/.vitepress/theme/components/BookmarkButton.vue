<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { useBookmarks } from '../bookmarks'

const { frontmatter, page, title } = useData()
const { add, remove, has } = useBookmarks()

const path = computed(() =>
  (`/${page.value.relativePath}`.replace(/index\.md$/, '').replace(/\.md$/, '')).replace(/\/$/, '') || '/',
)
const saved = computed(() => has(path.value))
const questionTitle = computed(
  () => (frontmatter.value.questionTitle as string) ?? title.value,
)
const topic = computed(() => {
  const crumbs = frontmatter.value.breadcrumbs as Array<{ label: string }> | undefined
  return crumbs?.slice(1, -1).map((crumb) => crumb.label).join(' · ')
})

function toggleBookmark() {
  if (saved.value) {
    remove(path.value)
    return
  }

  add({
    path: path.value,
    title: questionTitle.value,
    difficulty: frontmatter.value.difficulty as string | undefined,
    topic: topic.value,
  })
}
</script>

<template>
  <button
    class="ip-bookmark-button"
    :class="{ 'is-saved': saved }"
    type="button"
    :aria-pressed="saved"
    :aria-label="saved ? `Remove ${questionTitle} from bookmarks` : `Save ${questionTitle} to bookmarks`"
    @click="toggleBookmark"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.75L6 21V4.75Z" />
    </svg>
    {{ saved ? 'Saved' : 'Save question' }}
  </button>
</template>
