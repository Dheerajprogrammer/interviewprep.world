<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const difficulty = computed(() => frontmatter.value.difficulty as string | undefined)
const experienceLevel = computed(
  () => frontmatter.value.experienceLevel as string | undefined,
)
const updated = computed(() => frontmatter.value.updated as string | Date | undefined)
const updatedDate = computed(() => {
  const value = updated.value
  if (!value) return undefined
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return value.slice(0, 10)
})
const formattedUpdated = computed(() => {
  if (!updatedDate.value) return undefined
  const date = new Date(`${updatedDate.value}T00:00:00Z`)
  if (Number.isNaN(date.getTime())) return updatedDate.value
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
})
const readingMinutes = computed(
  () => frontmatter.value.readingMinutes as number | undefined,
)
const tags = computed(() => (frontmatter.value.tags as string[] | undefined) ?? [])

function badgeClass(level?: string) {
  if (!level) return 'ip-badge'
  return `ip-badge ip-badge--${level}`
}
</script>

<template>
  <div class="ip-question-meta">
    <span
      v-if="difficulty"
      :class="badgeClass(difficulty)"
      :aria-label="`Difficulty: ${difficulty}`"
    >
      {{ difficulty }}
    </span>
    <span
      v-if="experienceLevel"
      class="ip-badge ip-badge--level"
      :aria-label="`Experience level: ${experienceLevel}`"
    >
      {{ experienceLevel }}
    </span>
    <span v-if="readingMinutes" class="ip-badge ip-badge--level">
      {{ readingMinutes }} min read
    </span>
    <span v-if="formattedUpdated" class="ip-badge ip-badge--level">
      <time :datetime="updatedDate">Updated {{ formattedUpdated }}</time>
    </span>
    <span v-for="tag in tags" :key="tag" class="ip-badge ip-badge--level">
      #{{ tag }}
    </span>
  </div>
</template>
