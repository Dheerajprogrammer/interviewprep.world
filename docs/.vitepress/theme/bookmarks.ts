// Compatibility wrapper for components and future external imports.
import { useStudy } from './study'

export type { Bookmark } from './study'

export function useBookmarks() {
  const study = useStudy()
  return {
    bookmarks: study.bookmarks,
    add: study.addBookmark,
    remove: study.removeBookmark,
    has: study.isBookmarked,
    updateNote: study.updateBookmarkNote,
    clear: study.clearBookmarks,
  }
}
