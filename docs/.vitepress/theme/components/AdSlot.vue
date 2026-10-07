<script setup lang="ts">
defineProps<{
  id: string
  provider?: 'adsense' | 'ezoic' | 'affiliate' | 'premium'
}>()
</script>

<template>
  <aside
    class="ip-ad-slot"
    :data-ad-slot="id"
    :data-ad-provider="provider ?? 'adsense'"
    role="complementary"
    :aria-label="`Advertisement placeholder ${id}`"
  >
    <!-- Reserved for Google AdSense, Ezoic, affiliates, or premium packs -->
    Sponsored content slot ({{ provider ?? 'adsense' }})
  </aside>
</template>
