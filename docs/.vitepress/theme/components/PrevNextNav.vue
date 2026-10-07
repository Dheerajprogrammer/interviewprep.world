<script setup lang="ts">
defineProps<{
  prev?: { text: string; link: string }
  next?: { text: string; link: string }
}>()
</script>

<template>
  <nav v-if="prev || next" class="ip-prev-next" aria-label="Question navigation">
    <a v-if="prev" :href="prev.link">
      <span>Previous</span>
      {{ prev.text }}
    </a>
    <div v-else />
    <a v-if="next" :href="next.link" style="text-align: right">
      <span>Next</span>
      {{ next.text }}
    </a>
  </nav>
</template>
