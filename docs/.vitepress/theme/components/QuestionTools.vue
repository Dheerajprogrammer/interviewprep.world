<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { useStudy } from '../study'

const { frontmatter, page, title } = useData()
const {
  preferences,
  addBookmark,
  removeBookmark,
  isBookmarked,
  toggleCompleted,
  isCompleted,
  setPreference,
} = useStudy()

const settingsOpen = ref(false)
const shareStatus = ref('')

const path = computed(() =>
  (`/${page.value.relativePath}`.replace(/index\.md$/, '').replace(/\.md$/, '')).replace(/\/$/, '') || '/',
)
const questionTitle = computed(() => (frontmatter.value.questionTitle as string) ?? title.value)
const breadcrumbs = computed(
  () => (frontmatter.value.breadcrumbs as Array<{ label: string }> | undefined) ?? [],
)
const question = computed(() => ({
  path: path.value,
  title: questionTitle.value,
  difficulty: frontmatter.value.difficulty as string | undefined,
  track: breadcrumbs.value[1]?.label,
  topic: breadcrumbs.value.slice(1, -1).map((crumb) => crumb.label).join(' · '),
}))
const saved = computed(() => isBookmarked(path.value))
const done = computed(() => isCompleted(path.value))

function toggleBookmark() {
  if (saved.value) removeBookmark(path.value)
  else addBookmark(question.value)
}

async function shareQuestion() {
  const data = { title: questionTitle.value, text: questionTitle.value, url: window.location.href }
  try {
    if (navigator.share) await navigator.share(data)
    else {
      await navigator.clipboard.writeText(`${questionTitle.value} — ${window.location.href}`)
      shareStatus.value = 'Link copied'
      window.setTimeout(() => (shareStatus.value = ''), 2000)
    }
  } catch (error) {
    if ((error as DOMException).name !== 'AbortError') shareStatus.value = 'Could not share'
  }
}
</script>

<template>
  <div class="ip-question-tools" aria-label="Question tools">
    <button type="button" :class="{ 'is-active': saved }" :aria-pressed="saved" @click="toggleBookmark">
      <span aria-hidden="true">{{ saved ? '★' : '☆' }}</span> {{ saved ? 'Saved' : 'Save' }}
    </button>
    <button type="button" :class="{ 'is-complete': done }" :aria-pressed="done" @click="toggleCompleted(path)">
      <span aria-hidden="true">{{ done ? '✓' : '○' }}</span> {{ done ? 'Completed' : 'Mark complete' }}
    </button>
    <button type="button" @click="shareQuestion"><span aria-hidden="true">↗</span> {{ shareStatus || 'Share' }}</button>
    <div class="ip-reading-settings">
      <button type="button" :aria-expanded="settingsOpen" @click="settingsOpen = !settingsOpen">
        <span aria-hidden="true">Aa</span> Reading
      </button>
      <div v-if="settingsOpen" class="ip-reading-popover">
        <strong>Text size</strong>
        <div class="ip-segmented">
          <button v-for="size in (['small', 'medium', 'large'] as const)" :key="size" type="button" :class="{ 'is-selected': preferences.fontSize === size }" @click="setPreference('fontSize', size)">{{ size }}</button>
        </div>
        <strong>Page width</strong>
        <div class="ip-segmented">
          <button v-for="width in (['narrow', 'comfortable', 'wide'] as const)" :key="width" type="button" :class="{ 'is-selected': preferences.contentWidth === width }" @click="setPreference('contentWidth', width)">{{ width }}</button>
        </div>
      </div>
    </div>
  </div>

</template>
