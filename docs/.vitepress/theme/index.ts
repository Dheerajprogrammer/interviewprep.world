import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import AdSlot from './components/AdSlot.vue'
import HomeHero from './components/HomeHero.vue'
import HomeSections from './components/HomeSections.vue'
import PagefindSearch from './components/PagefindSearch.vue'
import BookmarksPage from './components/BookmarksPage.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomeHero', HomeHero)
    app.component('HomeSections', HomeSections)
    app.component('PagefindSearch', PagefindSearch)
    app.component('BookmarksPage', BookmarksPage)
    app.component('AdSlot', AdSlot)
  },
} satisfies Theme
