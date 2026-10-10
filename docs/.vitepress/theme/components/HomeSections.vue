<script setup lang="ts">
import manifest from '../../manifest.json'
import { TRACKS } from '../../utils/constants'
import StudyDashboard from './StudyDashboard.vue'

const trackDetails: Record<string, { description: string; icon: string; topics: string[] }> = {
  'generative-ai': { icon: 'AI', description: 'Learn LLM fundamentals, prompting, RAG, agents, safety, and production evaluation.', topics: ['Prompting', 'RAG', 'Agents'] },
  react: { icon: '⚛', description: 'Build confident React answers, from component fundamentals to production architecture.', topics: ['Hooks', 'State', 'Performance'] },
  angular: { icon: '🅰', description: 'Practice modern Angular concepts, RxJS, signals, dependency injection, and routing.', topics: ['Signals', 'RxJS', 'DI'] },
  javascript: { icon: 'JS', description: 'Strengthen the language foundations behind every frontend interview.', topics: ['Async', 'Closures', 'DOM'] },
  typescript: { icon: 'TS', description: 'Master type-safe application patterns, generics, narrowing, and project structure.', topics: ['Generics', 'Types', 'Architecture'] },
  'system-design': { icon: '⌘', description: 'Work through scalable frontend architecture, data, real-time UI, and delivery trade-offs.', topics: ['Caching', 'Performance', 'Real-time'] },
  hr: { icon: '★', description: 'Prepare clear, compelling behavioral answers using the STAR framework.', topics: ['STAR answers', 'Leadership', 'Collaboration'] },
  frontend: { icon: '⌘', description: 'Cover browser fundamentals, Next.js, state, performance, security, and accessibility.', topics: ['HTML & CSS', 'Next.js', 'Accessibility'] },
  backend: { icon: '⌁', description: 'Practice server-side fundamentals from Node and Express to Java, Python, REST, and GraphQL.', topics: ['Node.js', 'APIs', 'Spring Boot'] },
  database: { icon: '▣', description: 'Build practical database knowledge across SQL, PostgreSQL, MongoDB, and Redis.', topics: ['SQL', 'PostgreSQL', 'Redis'] },
  devops: { icon: '☁', description: 'Prepare for delivery and cloud conversations with Git, containers, Kubernetes, CI/CD, and cloud platforms.', topics: ['Docker', 'Kubernetes', 'CI/CD'] },
  architecture: { icon: '◇', description: 'Explore service boundaries, distributed systems, API design, and reusable design patterns.', topics: ['Microservices', 'Distributed systems', 'API design'] },
}

const tracks = TRACKS.map((track) => {
  const sidebar = manifest.sidebars[track.path] ?? []
  const questionCount = sidebar.reduce((total, group) => {
    if (!group.items) return total
    return total + Math.max(0, group.items.length - 1)
  }, 0)
  return { ...track, ...trackDetails[track.id], questionCount }
})

const latest = [...manifest.latest].slice(0, 6)
</script>

<template>
  <StudyDashboard />

  <section class="ip-section ip-track-section" aria-labelledby="featured-tracks">
    <div class="ip-section-heading">
      <div>
        <p class="ip-eyebrow">Interview library</p>
        <h2 id="featured-tracks">Choose a track</h2>
      </div>
      <p>Every track includes concise answers, practical examples, and follow-up prompts.</p>
    </div>

    <div class="ip-track-grid">
      <a v-for="track in tracks" :key="track.path" :href="track.path" class="ip-track-card">
        <span class="ip-track-icon" :class="`ip-track-icon--${track.id}`">{{ track.icon }}</span>
        <span class="ip-track-content">
          <span class="ip-track-topline">{{ track.questionCount }} questions</span>
          <strong>{{ track.label }}</strong>
          <span class="ip-track-description">{{ track.description }}</span>
          <span class="ip-topic-list">
            <span v-for="topic in track.topics" :key="topic">{{ topic }}</span>
          </span>
        </span>
        <span class="ip-track-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </section>

  <section class="ip-section ip-practice-section" aria-labelledby="practice-flow">
    <div class="ip-section-heading">
      <div>
        <p class="ip-eyebrow">A focused practice loop</p>
        <h2 id="practice-flow">Prepare with intent</h2>
      </div>
    </div>
    <div class="ip-practice-grid">
      <article><span>01</span><h3>Choose a topic</h3><p>Start from the concepts most relevant to your next interview.</p></article>
      <article><span>02</span><h3>Learn the answer</h3><p>Review an interview-ready explanation and its key trade-offs.</p></article>
      <article><span>03</span><h3>Practice aloud</h3><p>Use the example and follow-up prompts to build a clear response.</p></article>
    </div>
  </section>

  <section class="ip-section" aria-labelledby="latest-questions">
    <div class="ip-section-heading">
      <div>
        <p class="ip-eyebrow">Fresh practice</p>
        <h2 id="latest-questions">Recently added questions</h2>
      </div>
    </div>
    <div class="ip-latest-grid">
      <a v-for="item in latest" :key="item.link" :href="item.link" class="ip-latest-card">
        <span>{{ item.track }}</span>
        <strong>{{ item.title }}</strong>
        <small>Read answer <span aria-hidden="true">→</span></small>
      </a>
    </div>
  </section>
</template>
