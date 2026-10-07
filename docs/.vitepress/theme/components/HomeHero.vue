<script setup lang="ts">
import PagefindSearch from './PagefindSearch.vue'
import manifest from '../../manifest.json'
</script>

<template>
  <section class="ip-home-hero">
    <p class="ip-eyebrow">Interview prep for modern engineering teams</p>
    <h1>Turn interview prep into a daily practice.</h1>
    <p>
      {{ manifest.questionCount }} curated questions across frontend, system design,
      and behavioral interviews—with answers and examples.
    </p>
    <div class="ip-home-actions">
      <a class="ip-btn ip-btn--primary" href="/react-interview-questions/">
        Start Learning
      </a>
      <a class="ip-btn ip-btn--secondary" href="/javascript-interview-questions/">
        Explore JavaScript
      </a>
    </div>
    <div class="ip-home-stats" aria-label="Site statistics">
      <span><strong>{{ manifest.questionCount }}</strong> questions</span>
      <span><strong>6</strong> interview tracks</span>
      <span><strong>Examples</strong> on every answer</span>
    </div>
    <div class="ip-sponsor" aria-label="Support InterviewPrep.World">
      <span>Enjoying InterviewPrep.World?</span>
      <iframe
        src="https://github.com/sponsors/Dheerajprogrammer/button"
        title="Sponsor Dheerajprogrammer"
        height="32"
        width="114"
        style="border: 0; border-radius: 6px"
      />
    </div>
    <PagefindSearch />
  </section>
</template>
