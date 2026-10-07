<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const difficulty = computed(() => frontmatter.value.difficulty as string | undefined)
const experienceLevel = computed(
  () => frontmatter.value.experienceLevel as string | undefined,
)
const updated = computed(() => frontmatter.value.updated as string | undefined)
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
    <span v-if="updated" class="ip-badge ip-badge--level">
      Updated {{ updated }}
    </span>
    <span v-for="tag in tags" :key="tag" class="ip-badge ip-badge--level">
      #{{ tag }}
    </span>
  </div>
</template>
