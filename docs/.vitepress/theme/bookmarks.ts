import { onMounted, ref } from 'vue'

export interface Bookmark {
  path: string
  title: string
  difficulty?: string
  topic?: string
  savedAt: string
}

const STORAGE_KEY = 'interviewprep-world:bookmarks'
const bookmarks = ref<Bookmark[]>([])
let initialized = false

function readBookmarks(): Bookmark[] {
  if (typeof window === 'undefined') return []

  try {
    const value = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]')
    if (!Array.isArray(value)) return []
    return value.filter(
      (item): item is Bookmark =>
        typeof item?.path === 'string' && typeof item?.title === 'string',
    )
  } catch {
    return []
  }
}

function syncFromStorage() {
  bookmarks.value = readBookmarks()
}

export function useBookmarks() {
  onMounted(() => {
    syncFromStorage()
    if (!initialized) {
      initialized = true
      window.addEventListener('storage', syncFromStorage)
    }
  })

  function writeToStorage(items: Bookmark[]) {
    bookmarks.value = items
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Keep the in-memory state usable when storage is blocked or full.
    }
  }

  function add(bookmark: Omit<Bookmark, 'savedAt'>) {
    const normalizedPath = bookmark.path.replace(/\/$/, '') || '/'
    const withoutExisting = bookmarks.value.filter((item) => item.path !== normalizedPath)
    writeToStorage([{ ...bookmark, path: normalizedPath, savedAt: new Date().toISOString() }, ...withoutExisting])
  }

  function remove(path: string) {
    const normalizedPath = path.replace(/\/$/, '') || '/'
    writeToStorage(bookmarks.value.filter((item) => item.path !== normalizedPath))
  }

  function has(path: string) {
    const normalizedPath = path.replace(/\/$/, '') || '/'
    return bookmarks.value.some((item) => item.path === normalizedPath)
  }

  return { bookmarks, add, remove, has }
}
