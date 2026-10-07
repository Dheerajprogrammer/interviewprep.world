<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)

function updateProgress() {
  const doc = document.documentElement
  const scrollTop = window.scrollY
  const height = doc.scrollHeight - doc.clientHeight
  progress.value = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <div class="ip-reading-progress" aria-hidden="true">
    <div class="ip-reading-progress__bar" :style="{ width: `${progress}%` }" />
  </div>
</template>
