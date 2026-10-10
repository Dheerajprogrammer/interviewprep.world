<script setup lang="ts">
import { computed } from 'vue'
import manifest from '../../manifest.json'
import { useStudy } from '../study'

const { completed, recent } = useStudy()

type SidebarItem = { text: string; link: string }
type SidebarGroup = { text: string; items?: SidebarItem[] }

const topicProgress = computed(() => {
  const topics: Array<{ label: string; path: string; complete: number; total: number }> = []
  for (const groups of Object.values(manifest.sidebars) as SidebarGroup[][]) {
    for (const group of groups) {
      const questions = (group.items ?? []).filter((item) => item.link && item.link !== group.items?.[0]?.link)
      if (!questions.length) continue
      const complete = questions.filter((item) => completed.value[item.link.replace(/\/$/, '')]).length
      if (complete) topics.push({
        label: group.text,
        path: questions[0].link.split('/').slice(0, -1).join('/') + '/',
        complete,
        total: questions.length,
      })
    }
  }
  return topics.sort((a, b) => b.complete / b.total - a.complete / a.total).slice(0, 4)
})

const completedCount = computed(() => Object.keys(completed.value).length)
const recentQuestions = computed(() => recent.value.slice(0, 6))
</script>

<template>
  <section v-if="completedCount || recentQuestions.length" class="ip-section ip-study-dashboard" aria-labelledby="study-dashboard-title">
    <div class="ip-section-heading">
      <div>
        <p class="ip-eyebrow">Continue preparing</p>
        <h2 id="study-dashboard-title">Your study progress</h2>
      </div>
      <strong v-if="completedCount" class="ip-completed-total">{{ completedCount }} completed</strong>
    </div>

    <div v-if="topicProgress.length" class="ip-progress-grid">
      <a v-for="item in topicProgress" :key="item.path" :href="item.path" class="ip-progress-card">
        <span><strong>{{ item.label }}</strong><small>{{ item.complete }}/{{ item.total }}</small></span>
        <span class="ip-progress-track"><i :style="{ width: `${Math.round(item.complete / item.total * 100)}%` }" /></span>
      </a>
    </div>

    <div v-if="recentQuestions.length" class="ip-recent-block">
      <div class="ip-subheading">
        <h3>Recently viewed</h3>
        <span>Stored only on this device</span>
      </div>
      <div class="ip-recent-grid">
        <a v-for="item in recentQuestions" :key="item.path" :href="item.path" class="ip-recent-card">
          <span>{{ item.topic || item.track || 'Interview question' }}</span>
          <strong>{{ item.title }}</strong>
          <small>Continue reading <span aria-hidden="true">→</span></small>
        </a>
      </div>
    </div>
  </section>
</template>
