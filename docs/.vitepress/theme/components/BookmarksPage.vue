<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useBookmarks } from '../bookmarks'
import { useStudy } from '../study'

const PAGE_SIZE = 10
const { bookmarks, remove, updateNote, clear } = useBookmarks()
const { isCompleted } = useStudy()
const currentPage = ref(1)
const search = ref('')
const topic = ref('all')
const difficulty = ref('all')
const sort = ref<'newest' | 'oldest' | 'title'>('newest')
const confirmClear = ref(false)

const topics = computed(() =>
  [...new Set(bookmarks.value.map((item) => item.track).filter(Boolean) as string[])].sort(),
)
const filteredBookmarks = computed(() => {
  const query = search.value.trim().toLocaleLowerCase()
  const items = bookmarks.value.filter((item) => {
    const matchesSearch = !query || `${item.title} ${item.topic ?? ''} ${item.note ?? ''}`.toLocaleLowerCase().includes(query)
    const matchesTopic = topic.value === 'all' || item.track === topic.value
    const matchesDifficulty = difficulty.value === 'all' || item.difficulty === difficulty.value
    return matchesSearch && matchesTopic && matchesDifficulty
  })
  return [...items].sort((a, b) => {
    if (sort.value === 'title') return a.title.localeCompare(b.title)
    const delta = new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()
    return sort.value === 'newest' ? delta : -delta
  })
})
const totalPages = computed(() => Math.max(1, Math.ceil(filteredBookmarks.value.length / PAGE_SIZE)))
const visibleBookmarks = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return filteredBookmarks.value.slice(start, start + PAGE_SIZE)
})

watch(totalPages, (pages) => {
  if (currentPage.value > pages) currentPage.value = pages
})
watch([search, topic, difficulty, sort], () => (currentPage.value = 1))

function goToPage(page: number) {
  currentPage.value = Math.min(Math.max(page, 1), totalPages.value)
  document.querySelector('.ip-bookmarks')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function clearAll() {
  clear()
  confirmClear.value = false
}
</script>

<template>
  <section class="ip-bookmarks" aria-labelledby="bookmarks-title">
    <header class="ip-bookmarks-header">
      <div>
        <p class="ip-bookmarks-eyebrow">Your study list</p>
        <h1 id="bookmarks-title">Bookmarked questions</h1>
        <p>Questions you save are kept in this browser.</p>
      </div>
      <span v-if="bookmarks.length" class="ip-bookmarks-count">
        {{ bookmarks.length }} {{ bookmarks.length === 1 ? 'question' : 'questions' }}
      </span>
    </header>

    <div v-if="bookmarks.length" class="ip-bookmark-controls">
      <label class="ip-bookmark-search">
        <span class="sr-only">Search saved questions</span>
        <input v-model="search" type="search" placeholder="Search questions or notes…" />
      </label>
      <label>
        <span>Topic</span>
        <select v-model="topic">
          <option value="all">All topics</option>
          <option v-for="item in topics" :key="item" :value="item">{{ item }}</option>
        </select>
      </label>
      <label>
        <span>Difficulty</span>
        <select v-model="difficulty">
          <option value="all">All levels</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <label>
        <span>Sort</span>
        <select v-model="sort">
          <option value="newest">Recently saved</option>
          <option value="oldest">Oldest saved</option>
          <option value="title">Question title</option>
        </select>
      </label>
    </div>

    <div v-if="bookmarks.length" class="ip-bookmark-results-bar">
      <span>{{ filteredBookmarks.length }} matching {{ filteredBookmarks.length === 1 ? 'question' : 'questions' }}</span>
      <div v-if="confirmClear" class="ip-clear-confirm">
        <span>Remove every bookmark?</span>
        <button type="button" class="is-danger" @click="clearAll">Yes, clear all</button>
        <button type="button" @click="confirmClear = false">Cancel</button>
      </div>
      <button v-else type="button" @click="confirmClear = true">Clear all</button>
    </div>

    <div v-if="visibleBookmarks.length" class="ip-bookmark-list">
      <article v-for="bookmark in visibleBookmarks" :key="bookmark.path" class="ip-bookmark-card">
        <a :href="bookmark.path" class="ip-bookmark-card-link">
          <span v-if="bookmark.topic" class="ip-bookmark-topic">{{ bookmark.topic }}</span>
          <strong>{{ bookmark.title }}</strong>
          <span class="ip-bookmark-open">Open question <span aria-hidden="true">→</span></span>
        </a>
        <label class="ip-bookmark-note">
          <span>Personal note</span>
          <textarea
            :value="bookmark.note"
            rows="2"
            maxlength="500"
            placeholder="Add a reminder, key point, or follow-up…"
            @change="updateNote(bookmark.path, ($event.target as HTMLTextAreaElement).value)"
          />
        </label>
        <div class="ip-bookmark-card-footer">
          <span v-if="bookmark.difficulty" class="ip-bookmark-difficulty">{{ bookmark.difficulty }}</span>
          <span v-if="isCompleted(bookmark.path)" class="ip-bookmark-completed">✓ Completed</span>
          <button type="button" :aria-label="`Remove ${bookmark.title} from bookmarks`" @click="remove(bookmark.path)">
            Remove
          </button>
        </div>
      </article>
    </div>

    <div v-else-if="bookmarks.length" class="ip-bookmarks-no-results">
      <h2>No matching questions</h2>
      <p>Try changing your search or filters.</p>
      <button type="button" @click="search = ''; topic = 'all'; difficulty = 'all'">Reset filters</button>
    </div>

    <div v-else class="ip-bookmarks-empty">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 4.75A1.75 1.75 0 0 1 7.75 3h8.5A1.75 1.75 0 0 1 18 4.75V21l-6-3.75L6 21V4.75Z" />
      </svg>
      <h2>No saved questions yet</h2>
      <p>Use the “Save question” button on any interview question to add it here.</p>
      <a href="/">Explore interview questions</a>
    </div>

    <nav v-if="totalPages > 1" class="ip-bookmark-pagination" aria-label="Bookmark pages">
      <button type="button" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">Previous</button>
      <button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        type="button"
        :class="{ 'is-current': currentPage === pageNumber }"
        :aria-current="currentPage === pageNumber ? 'page' : undefined"
        @click="goToPage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
      <button type="button" :disabled="currentPage === totalPages" @click="goToPage(currentPage + 1)">Next</button>
    </nav>
  </section>
</template>
