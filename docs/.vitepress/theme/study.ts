import { onMounted, reactive, ref } from 'vue'

export interface QuestionSummary {
  path: string
  title: string
  difficulty?: string
  topic?: string
  track?: string
}

export interface Bookmark extends QuestionSummary {
  savedAt: string
  note?: string
}

export interface RecentQuestion extends QuestionSummary {
  viewedAt: string
}

export interface ReadingPreferences {
  fontSize: 'small' | 'medium' | 'large'
  contentWidth: 'narrow' | 'comfortable' | 'wide'
}

interface StudyState {
  version: 1
  bookmarks: Bookmark[]
  completed: Record<string, string>
  recent: RecentQuestion[]
  preferences: ReadingPreferences
}

const STORAGE_KEY = 'interviewprep-world:study-profile'
const LEGACY_BOOKMARKS_KEY = 'interviewprep-world:bookmarks'
const MAX_RECENT = 20

const bookmarks = ref<Bookmark[]>([])
const completed = ref<Record<string, string>>({})
const recent = ref<RecentQuestion[]>([])
const preferences = reactive<ReadingPreferences>({
  fontSize: 'medium',
  contentWidth: 'comfortable',
})
let listening = false

function normalizePath(path: string) {
  return path.replace(/\/$/, '') || '/'
}

function emptyState(): StudyState {
  return {
    version: 1,
    bookmarks: [],
    completed: {},
    recent: [],
    preferences: { fontSize: 'medium', contentWidth: 'comfortable' },
  }
}

function readState(): StudyState {
  if (typeof window === 'undefined') return emptyState()

  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? 'null')
    if (parsed && parsed.version === 1) return { ...emptyState(), ...parsed }

    const legacy = JSON.parse(window.localStorage.getItem(LEGACY_BOOKMARKS_KEY) ?? '[]')
    const state = emptyState()
    if (Array.isArray(legacy)) state.bookmarks = legacy
    return state
  } catch {
    return emptyState()
  }
}

function applyState(state: StudyState) {
  bookmarks.value = Array.isArray(state.bookmarks) ? state.bookmarks : []
  completed.value = state.completed && typeof state.completed === 'object' ? state.completed : {}
  recent.value = Array.isArray(state.recent) ? state.recent : []
  Object.assign(preferences, emptyState().preferences, state.preferences)
  applyReadingPreferences()
}

function currentState(): StudyState {
  return {
    version: 1,
    bookmarks: bookmarks.value,
    completed: completed.value,
    recent: recent.value,
    preferences: { ...preferences },
  }
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState()))
  } catch {
    // The current session remains usable if storage is unavailable or full.
  }
}

function applyReadingPreferences() {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.ipFontSize = preferences.fontSize
  document.documentElement.dataset.ipContentWidth = preferences.contentWidth
}

function initialize() {
  applyState(readState())
  if (!listening) {
    listening = true
    window.addEventListener('storage', (event) => {
      if (event.key === STORAGE_KEY || event.key === LEGACY_BOOKMARKS_KEY) applyState(readState())
    })
  }
}

export function useStudy() {
  onMounted(initialize)

  function addBookmark(question: QuestionSummary) {
    const path = normalizePath(question.path)
    const existing = bookmarks.value.find((item) => item.path === path)
    bookmarks.value = [
      { ...question, path, savedAt: existing?.savedAt ?? new Date().toISOString(), note: existing?.note },
      ...bookmarks.value.filter((item) => item.path !== path),
    ]
    persist()
  }

  function removeBookmark(path: string) {
    const normalized = normalizePath(path)
    bookmarks.value = bookmarks.value.filter((item) => item.path !== normalized)
    persist()
  }

  function isBookmarked(path: string) {
    const normalized = normalizePath(path)
    return bookmarks.value.some((item) => item.path === normalized)
  }

  function updateBookmarkNote(path: string, note: string) {
    const item = bookmarks.value.find((bookmark) => bookmark.path === normalizePath(path))
    if (!item) return
    item.note = note.trim()
    bookmarks.value = [...bookmarks.value]
    persist()
  }

  function clearBookmarks() {
    bookmarks.value = []
    persist()
  }

  function toggleCompleted(path: string) {
    const normalized = normalizePath(path)
    const next = { ...completed.value }
    if (next[normalized]) delete next[normalized]
    else next[normalized] = new Date().toISOString()
    completed.value = next
    persist()
  }

  function isCompleted(path: string) {
    return Boolean(completed.value[normalizePath(path)])
  }

  function recordView(question: QuestionSummary) {
    const path = normalizePath(question.path)
    recent.value = [
      { ...question, path, viewedAt: new Date().toISOString() },
      ...recent.value.filter((item) => item.path !== path),
    ].slice(0, MAX_RECENT)
    persist()
  }

  function setPreference<K extends keyof ReadingPreferences>(key: K, value: ReadingPreferences[K]) {
    preferences[key] = value
    applyReadingPreferences()
    persist()
  }

  return {
    bookmarks,
    completed,
    recent,
    preferences,
    addBookmark,
    removeBookmark,
    isBookmarked,
    updateBookmarkNote,
    clearBookmarks,
    toggleCompleted,
    isCompleted,
    recordView,
    setPreference,
  }
}
