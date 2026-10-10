<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useBookmarks } from '../bookmarks'

const PAGE_SIZE = 10
const { bookmarks, remove } = useBookmarks()
const currentPage = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(bookmarks.value.length / PAGE_SIZE)))
const visibleBookmarks = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE
  return bookmarks.value.slice(start, start + PAGE_SIZE)
})

watch(totalPages, (pages) => {
  if (currentPage.value > pages) currentPage.value = pages
})

function goToPage(page: number) {
  currentPage.value = Math.min(Math.max(page, 1), totalPages.value)
  document.querySelector('.ip-bookmarks')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

    <div v-if="bookmarks.length" class="ip-bookmark-list">
      <article v-for="bookmark in visibleBookmarks" :key="bookmark.path" class="ip-bookmark-card">
        <a :href="bookmark.path" class="ip-bookmark-card-link">
          <span v-if="bookmark.topic" class="ip-bookmark-topic">{{ bookmark.topic }}</span>
          <strong>{{ bookmark.title }}</strong>
          <span class="ip-bookmark-open">Open question <span aria-hidden="true">→</span></span>
        </a>
        <div class="ip-bookmark-card-footer">
          <span v-if="bookmark.difficulty" class="ip-bookmark-difficulty">{{ bookmark.difficulty }}</span>
          <button type="button" :aria-label="`Remove ${bookmark.title} from bookmarks`" @click="remove(bookmark.path)">
            Remove
          </button>
        </div>
      </article>
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
