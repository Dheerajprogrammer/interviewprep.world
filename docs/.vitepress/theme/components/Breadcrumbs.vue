<script setup lang="ts">
defineProps<{
  items: Array<{ label: string; link?: string }>
}>()
</script>

<template>
  <nav class="ip-breadcrumbs" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      <a v-if="item.link" :href="item.link">{{ item.label }}</a>
      <span v-else>{{ item.label }}</span>
      <span v-if="index < items.length - 1" aria-hidden="true"> / </span>
    </template>
  </nav>
</template>
