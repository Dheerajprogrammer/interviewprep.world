import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import readingTime from 'reading-time'
import YAML from 'yaml'
import { z } from 'zod'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DOCS = path.join(ROOT, 'docs')
const CONTENT = path.join(ROOT, 'content')

const SITE_URL = 'https://interviewprep.world'

const Difficulty = z.enum(['easy', 'medium', 'hard'])
const Level = z.enum(['junior', 'mid', 'senior'])

const OverrideSchema = z.object({
  slug: z.string(),
  title: z.string(),
  track: z.string(),
  subcategory: z.string(),
  subcategoryLabel: z.string(),
  trackLabel: z.string(),
  trackPath: z.string(),
  difficulty: Difficulty,
  experienceLevel: Level,
  tags: z.array(z.string()),
  updated: z.string(),
  description: z.string(),
  answerExcerpt: z.string(),
  body: z.string(),
})

type QuestionRecord = {
  slug: string
  title: string
  track: string
  subcategory: string
  subcategoryLabel: string
  trackLabel: string
  trackPath: string
  difficulty: z.infer<typeof Difficulty>
  experienceLevel: z.infer<typeof Level>
  tags: string[]
  updated: string
  description: string
  answerExcerpt: string
  body: string
  link: string
}

type TrackConfig = {
  id: string
  label: string
  urlSegment: string
  count: number
  subcategories: Array<{ slug: string; label: string; topic: string }>
}

/**
 * A deliberately human-curated set of questions.  These topics are based on the
 * public interview-question collections maintained by Sudheer Jonna, but the
 * explanations generated below are original for InterviewPrep World.
 */
const QUESTION_TITLES: Record<string, Record<string, string[]>> = {
  javascript: {
    basics: ['What are the JavaScript primitive types?', 'What is the difference between `==` and `===`?', 'What is the difference between `null` and `undefined`?', 'What is hoisting in JavaScript?', 'What is the temporal dead zone?', 'How do `var`, `let`, and `const` differ?', 'What is strict mode?', 'What is type coercion?', 'What makes a value truthy or falsy?', 'What is the difference between shallow and deep equality?'],
    functions: ['What is a closure?', 'What is lexical scope?', 'What is the difference between `call`, `apply`, and `bind`?', 'What is a higher-order function?', 'What is currying?', 'What is function composition?', 'How do arrow functions handle `this`?', 'What is an IIFE?', 'What is a pure function?', 'What is the difference between a callback and a promise?'],
    async: ['What is the JavaScript event loop?', 'What is the difference between the microtask and macrotask queues?', 'What are the states of a Promise?', 'How does `async`/`await` work?', 'What is the difference between `Promise.all` and `Promise.allSettled`?', 'When would you use `Promise.race` or `Promise.any`?', 'How do you handle errors with async/await?', 'What is callback hell and how do you avoid it?', 'How do you cancel a fetch request?', 'What is the difference between synchronous and asynchronous code?'],
    prototypes: ['What is the prototype chain?', 'What is the difference between `__proto__` and `prototype`?', 'How does `new` work?', 'What are JavaScript classes syntactic sugar for?', 'What is prototypal inheritance?', 'How do you create an object without a prototype?', 'What is the difference between own and inherited properties?', 'How does `instanceof` work?', 'What are getters and setters?', 'When should you prefer composition over inheritance?'],
    es6: ['What are ES modules?', 'What is the difference between default and named exports?', 'What are template literals?', 'What are destructuring assignments?', 'What is the rest parameter?', 'What is the spread operator?', 'What are `Map` and `Set` useful for?', 'What are `WeakMap` and `WeakSet`?', 'What are generators and iterators?', 'What are optional chaining and nullish coalescing?'],
    dom: ['What is event delegation?', 'What is the difference between event bubbling and capturing?', 'What do `preventDefault` and `stopPropagation` do?', 'What is the difference between an attribute and a property?', 'When does `DOMContentLoaded` fire?', 'How do you create and insert DOM elements safely?', 'What is the difference between `innerHTML`, `textContent`, and `innerText`?', 'How do you use `data-*` attributes?', 'What is the browser rendering pipeline?', 'What is a Web Worker?'],
    performance: ['What causes a memory leak in JavaScript?', 'What is debouncing?', 'What is throttling?', 'What is memoization?', 'What is a layout thrash?', 'How can you avoid unnecessary reflows and repaints?', 'What is code splitting?', 'What is tree shaking?', 'How do you profile a slow web page?', 'When should you use `requestAnimationFrame`?'],
    security: ['What is the same-origin policy?', 'What is CORS?', 'What is cross-site scripting (XSS)?', 'How do you prevent XSS in a web application?', 'What is CSRF and how can it be mitigated?', 'Why is `eval` dangerous?', 'How should sensitive data be stored in the browser?', 'What are secure cookie attributes?', 'What is Content Security Policy?', 'How do you validate and sanitize user input?'],
    patterns: ['What is the module pattern?', 'What is the observer pattern?', 'What is the pub/sub pattern?', 'What is the factory pattern?', 'What is the singleton pattern and its trade-offs?', 'What is the strategy pattern?', 'What is the adapter pattern?', 'What is dependency injection in JavaScript?', 'What is immutability and why does it matter?', 'How do you design a reusable API client?'],
    'coding-challenges': ['How do you flatten a nested array?', 'How do you implement debounce?', 'How do you implement deep clone?', 'How do you group an array of objects by a key?', 'How do you find duplicate values in an array?', 'How do you implement `Array.prototype.map`?', 'How do you implement a Promise pool with concurrency limits?', 'How do you write a memoize function?', 'How do you compare two objects deeply?', 'How do you implement an event emitter?'],
  },
  react: {
    basics: ['What is React and what problems does it solve?', 'What is the Virtual DOM?', 'What is reconciliation in React?', 'What is JSX?', 'What is the difference between props and state?', 'What causes a React component to re-render?', 'What are keys and why are they important?', 'What is a controlled component?', 'What is an uncontrolled component?', 'What is React Strict Mode?'],
    hooks: ['What are the Rules of Hooks?', 'Explain the `useState` Hook.', 'Explain the `useEffect` Hook.', 'What is the difference between `useEffect` and `useLayoutEffect`?', 'When should you use `useMemo`?', 'When should you use `useCallback`?', 'What is `useRef` used for?', 'How do you build a custom Hook?', 'How do stale closures happen in Hooks?', 'How do you avoid an infinite effect loop?'],
    'state-management': ['Where should state live in a React application?', 'What is lifting state up?', 'What is derived state and why should you avoid storing it?', 'How do you update nested state immutably?', 'What is state colocation?', 'When is Context appropriate for state?', 'When should you use a client-state library?', 'How do you model async request state?', 'What is optimistic UI?', 'How do you prevent race conditions in state updates?'],
    performance: ['How do you diagnose unnecessary React re-renders?', 'What does `React.memo` do?', 'What are the limits of `useMemo` and `useCallback`?', 'How do you virtualize a large list?', 'What is code splitting with `lazy` and `Suspense`?', 'How do you optimize Context consumers?', 'How do stable keys improve rendering?', 'What is concurrent rendering?', 'How do you optimize expensive calculations?', 'How do you profile a React app?'],
    'react-router': ['What is client-side routing?', 'How do nested routes work in React Router?', 'What is an outlet?', 'How do route parameters work?', 'How do you protect a route?', 'How do you navigate programmatically?', 'What are loaders and actions?', 'How do you handle a 404 route?', 'How do you preserve query parameters?', 'How do you split route bundles?'],
    'context-api': ['What problem does the Context API solve?', 'How do you create and consume Context?', 'How does Context affect re-renders?', 'How do you avoid Context performance problems?', 'When should Context not replace a state manager?', 'How do you test a component that consumes Context?', 'How do you compose multiple providers?', 'How do you give Context a safe default?', 'How do you update Context from a child?', 'How do you split a large Context?'],
    redux: ['What are the core Redux principles?', 'What are actions, reducers, and the store?', 'Why must Redux reducers be pure?', 'What is Redux Toolkit?', 'What is a selector?', 'How do you handle async logic with Redux?', 'What is middleware?', 'What is normalized state?', 'How do you avoid unnecessary Redux re-renders?', 'When is Redux not a good fit?'],
    advanced: ['What are error boundaries?', 'What are portals?', 'What is a render prop?', 'What is a higher-order component?', 'What are compound components?', 'What is `forwardRef`?', 'What is `useImperativeHandle`?', 'What is hydration?', 'What is server-side rendering?', 'What is React Server Components?'],
    architecture: ['How do you organize a scalable React project?', 'How do you separate presentational and container concerns?', 'How do you design reusable components?', 'How do you handle feature flags?', 'How do you define API boundaries in React?', 'How do you make React code testable?', 'How do you manage forms at scale?', 'How do you handle global errors?', 'How do you design a design-system component?', 'How do you migrate a legacy React application?'],
    'coding-challenges': ['Build a searchable, sortable React list.', 'Build a debounced search input.', 'Build a reusable modal component.', 'Build a paginated data table.', 'Build a multi-step form.', 'Build a toast notification system.', 'Build a custom `useFetch` Hook.', 'Build a virtualized list.', 'Build an accessible tabs component.', 'Build an optimistic todo list.'],
  },
  angular: {
    basics: ['What is Angular?', 'What is the difference between Angular and AngularJS?', 'What is a standalone component?', 'What are Angular modules?', 'What is a decorator?', 'What is a component lifecycle?', 'What is data binding in Angular?', 'What is the difference between property and attribute binding?', 'What are directives?', 'What are pipes?'],
    components: ['What is the difference between a component and a directive?', 'How do `@Input` and `@Output` work?', 'What is `EventEmitter` used for?', 'What is content projection?', 'What is `ViewChild`?', 'What is the difference between view and content children?', 'How do lifecycle hooks work?', 'What is the `OnPush` change-detection strategy?', 'How do you build a reusable Angular component?', 'How do you communicate between sibling components?'],
    services: ['What is an Angular service?', 'Why are services usually injectable?', 'What does `providedIn: root` mean?', 'What is the difference between a service and a factory provider?', 'How do you share state with a service?', 'How do you test an Angular service?', 'What is `HttpClient`?', 'How do HTTP interceptors work?', 'How do you handle HTTP errors?', 'When should a service be stateless?'],
    'dependency-injection': ['What is dependency injection?', 'What is an injector?', 'What are provider scopes?', 'What is an injection token?', 'What are multi-providers?', 'How does hierarchical DI work?', 'What is `@Optional`?', 'What is `@Self` and `@SkipSelf`?', 'How do you provide a configuration object?', 'How do you mock a dependency in a test?'],
    rxjs: ['What is an Observable?', 'What is the difference between an Observable and a Promise?', 'What is a Subject?', 'What is the difference between Subject and BehaviorSubject?', 'What is a ReplaySubject?', 'What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`?', 'What do `debounceTime` and `distinctUntilChanged` do?', 'How do you unsubscribe safely?', 'What is the `async` pipe?', 'How do you handle errors in RxJS?'],
    routing: ['How does Angular Router work?', 'What is a router outlet?', 'What are route parameters and query parameters?', 'What are route guards?', 'What is lazy loading?', 'What are resolvers?', 'How do you create child routes?', 'How do you redirect routes?', 'How do you handle a not-found route?', 'How do you preload lazy modules?'],
    'state-management': ['How do you manage state in Angular?', 'When is a service with RxJS enough?', 'What is NgRx?', 'What are actions, reducers, selectors, and effects?', 'Why should reducers be pure?', 'How do selectors improve performance?', 'How do you model loading and error state?', 'What is entity state normalization?', 'How do signals fit state management?', 'When should you avoid a global store?'],
    signals: ['What are Angular signals?', 'What is the difference between `signal`, `computed`, and `effect`?', 'How do signals work with OnPush?', 'How do you update a writable signal?', 'What is a computed signal?', 'When should you use an effect?', 'How do signals interoperate with RxJS?', 'What are signal inputs?', 'How do you avoid effects that write state?', 'When should you use a signal instead of an Observable?'],
    performance: ['How does Angular change detection work?', 'What does `OnPush` change detection do?', 'How do you track list items efficiently?', 'How do you avoid expensive template expressions?', 'How do pure pipes improve performance?', 'How do you lazy load a feature?', 'How do you profile an Angular app?', 'What is zone.js and what role does it play?', 'How do you reduce bundle size?', 'How do you prevent memory leaks in Angular?'],
    architecture: ['How do you structure a large Angular application?', 'What is feature-based architecture?', 'How do you design a shared module or shared library?', 'How do you separate smart and presentational components?', 'How do you organize core services?', 'How do you create reusable form controls?', 'How do you define API models and mappers?', 'How do you handle application-wide errors?', 'How do you test Angular components and services?', 'How do you migrate an Angular application safely?'],
  },
  typescript: {
    basics: ['What is TypeScript and why use it?', 'What is structural typing?', 'What is the difference between `any`, `unknown`, and `never`?', 'What is type inference?', 'What is a union type?', 'What is an intersection type?', 'What is type narrowing?', 'What is a discriminated union?', 'What is a type assertion?', 'What does `strict` mode enable?'],
    interfaces: ['What is the difference between an interface and a type alias?', 'How do optional properties work?', 'What are readonly properties?', 'What is declaration merging?', 'What is an index signature?', 'How do you extend an interface?', 'What are callable interfaces?', 'What are mapped types?', 'What are utility types?', 'How do you model an API response?'],
    generics: ['What are generics?', 'How do generic constraints work?', 'What does `keyof` do?', 'What does `typeof` do in a type position?', 'What are conditional types?', 'What is the `infer` keyword?', 'How do generic defaults work?', 'How do you write a generic function?', 'How do you write a generic React component?', 'When should you avoid generics?'],
    functions: ['How do function overloads work?', 'What is a type predicate?', 'What is an assertion function?', 'What is a function return type?', 'What is the difference between `void` and `never`?', 'How do you type async functions?', 'How do you type callbacks?', 'How do rest parameters work in TypeScript?', 'How do you type `this` in a function?', 'What are template literal types?'],
    architecture: ['How do you organize types in a large project?', 'How do you type environment variables?', 'How do you validate untrusted runtime data?', 'How do you migrate JavaScript to TypeScript?', 'What is `tsconfig.json` for?', 'What is module resolution?', 'How do project references work?', 'How do you share types between frontend and backend?', 'How do you avoid over-engineered types?', 'How do you make TypeScript builds faster?'],
  },
  'system-design': {
    requirements: ['How do you approach a frontend system design interview?', 'What functional requirements should you clarify?', 'What non-functional requirements matter for frontend systems?', 'How do you estimate scale for a UI?', 'How do you identify critical user journeys?', 'How do you define success metrics?', 'How do you choose an architecture?', 'How do you communicate trade-offs?', 'How do you handle progressive delivery?', 'How do you prioritize a first version?'],
    performance: ['How would you design a fast e-commerce product page?', 'How do you optimize initial page load?', 'How do you design image delivery at scale?', 'How do you implement code splitting?', 'How do you prevent layout shift?', 'How do you design list virtualization?', 'How do you measure Core Web Vitals?', 'How do you cache static assets?', 'How do you handle low-end devices?', 'How do you build a performance budget?'],
    data: ['How would you design typeahead search?', 'How do you design a client-side cache?', 'How do you handle stale data?', 'How do you design infinite scrolling?', 'How do you handle optimistic updates?', 'How do you manage pagination?', 'How do you prevent duplicate network requests?', 'How do you design offline support?', 'How do you handle API errors?', 'How do you secure client data?'],
    realtime: ['How would you design a notification center?', 'How do WebSockets compare with SSE?', 'How do you design a collaborative editor?', 'How do you reconcile real-time updates?', 'How do you handle reconnects?', 'How do you order real-time events?', 'How do you prevent notification overload?', 'How do you design presence indicators?', 'How do you handle conflicts?', 'How do you observe real-time reliability?'],
    architecture: ['How would you design a scalable design system?', 'How do you organize a micro-frontend architecture?', 'How do you manage feature flags?', 'How do you define frontend API boundaries?', 'How do you make a frontend resilient to backend changes?', 'How do you plan for accessibility?', 'How do you plan observability?', 'How do you handle authentication state?', 'How do you deploy safely?', 'How do you evolve a legacy frontend?'],
  },
  hr: {
    introduction: ['Tell me about yourself.', 'Walk me through your resume.', 'Why do you want this role?', 'Why do you want to work here?', 'What are your greatest strengths?', 'What is an area you are working to improve?', 'What motivates you?', 'What are your career goals?', 'Why are you leaving your current role?', 'What makes you a strong fit for this position?'],
    collaboration: ['Tell me about a conflict with a teammate.', 'Describe a time you gave difficult feedback.', 'Describe a time you received difficult feedback.', 'Tell me about a time you influenced without authority.', 'How do you build trust with a new team?', 'Describe a cross-functional disagreement.', 'Tell me about a time you helped a teammate succeed.', 'How do you handle different working styles?', 'Describe a time you communicated bad news.', 'How do you collaborate in a remote team?'],
    ownership: ['Tell me about a time you showed ownership.', 'Describe a time you made a mistake.', 'Tell me about a difficult decision you made.', 'Tell me about a time you missed a deadline.', 'Describe a time you handled ambiguity.', 'Tell me about a time you improved a process.', 'Describe a time you disagreed with a decision.', 'Tell me about a time you took initiative.', 'How do you prioritize competing work?', 'Tell me about a time you managed risk.'],
    leadership: ['Tell me about a time you led a project.', 'How do you mentor others?', 'Describe a time you delegated work.', 'Tell me about a time you resolved a team conflict.', 'How do you create alignment?', 'Tell me about a time you drove change.', 'How do you make decisions with incomplete information?', 'Tell me about a time you raised the quality bar.', 'How do you handle an underperforming teammate?', 'What is your leadership style?'],
    culture: ['What kind of culture helps you do your best work?', 'How do you handle pressure?', 'How do you maintain work-life balance?', 'What feedback style works best for you?', 'What does inclusion mean to you?', 'How do you respond to failure?', 'What would your manager say about you?', 'What are you looking for in your next manager?', 'What questions do you have for us?', 'How do you evaluate a job offer?'],
  },
  frontend: {
    html: ['What is semantic HTML?', 'When should you use a button instead of a link?', 'How do forms associate labels with inputs?', 'What is the document outline?', 'What are custom data attributes?', 'How do HTML templates work?', 'What is the purpose of the meta viewport tag?', 'How do you use responsive images?', 'What is the difference between defer and async scripts?', 'How do you structure an accessible table?'],
    css: ['How does CSS specificity work?', 'What is the CSS box model?', 'When should you use Flexbox versus Grid?', 'How do stacking contexts work?', 'What is the difference between relative, absolute, fixed, and sticky positioning?', 'How do container queries work?', 'What are CSS custom properties?', 'How do you prevent layout shift with CSS?', 'What is the cascade layer feature?', 'How do you build responsive layouts without device-specific breakpoints?'],
    'next-js': ['What is Next.js?', 'What is the difference between the App Router and Pages Router?', 'What are React Server Components in Next.js?', 'When do you use a Server Component versus a Client Component?', 'How does Next.js data fetching and caching work?', 'What are route handlers?', 'How do dynamic routes work in Next.js?', 'How do you handle loading and error states in the App Router?', 'What is static generation versus server-side rendering?', 'How do you optimize images and fonts in Next.js?'],
    redux: ['What are the core Redux principles?', 'What are actions, reducers, and the store?', 'Why must Redux reducers be pure?', 'What is Redux Toolkit?', 'What is a selector?', 'How do you handle async logic with Redux?', 'What is middleware?', 'What is normalized state?', 'How do you avoid unnecessary Redux re-renders?', 'When is Redux not a good fit?'],
    rxjs: ['What is an Observable?', 'How does an Observable differ from a Promise?', 'What is a Subject?', 'When do you use BehaviorSubject?', 'How do switchMap, mergeMap, concatMap, and exhaustMap differ?', 'What do debounceTime and distinctUntilChanged do?', 'How do you unsubscribe safely?', 'How do you handle errors in an RxJS stream?', 'What is a cold versus hot Observable?', 'How do you test an Observable pipeline?'],
    performance: ['What are Core Web Vitals?', 'How do you reduce Largest Contentful Paint?', 'How do you avoid Cumulative Layout Shift?', 'How do you improve Interaction to Next Paint?', 'What is the critical rendering path?', 'When should you lazy load code or images?', 'How do you measure web performance?', 'What causes long tasks on the main thread?', 'How do you use a performance budget?', 'How do you optimize third-party scripts?'],
    security: ['What is the same-origin policy?', 'What is CORS?', 'What is cross-site scripting?', 'How do you prevent XSS?', 'What is CSRF and how can it be mitigated?', 'Why is Content Security Policy important?', 'How should sensitive tokens be stored in a browser?', 'What cookie attributes improve security?', 'How do you safely render untrusted content?', 'How do you protect a frontend supply chain?'],
    accessibility: ['What does web accessibility mean?', 'How do you use semantic HTML for accessibility?', 'When should you use ARIA?', 'How do you make a custom control keyboard accessible?', 'How do you manage focus in a modal dialog?', 'What is accessible name and description?', 'How do you test a page with a screen reader?', 'How do you meet color contrast requirements?', 'How do you support reduced motion preferences?', 'What is an accessible error message for a form field?'],
  },
  backend: {
    'node-js': ['What is Node.js and when is it a good fit?', 'How does the Node.js event loop work?', 'What is the difference between CommonJS and ES modules?', 'How do streams work in Node.js?', 'How do you handle errors in asynchronous Node.js code?', 'What is the cluster module used for?', 'How do worker threads differ from child processes?', 'How do you manage configuration in Node.js?', 'How do you prevent a Node.js memory leak?', 'How do you secure a Node.js application?'],
    express: ['What is Express?', 'How does Express middleware work?', 'How do you structure an Express application?', 'How do you handle errors centrally in Express?', 'How do you validate request input?', 'How do you implement authentication middleware?', 'How do you version an Express API?', 'How do you serve static assets securely?', 'How do you test Express routes?', 'How do you handle graceful shutdown in Express?'],
    java: ['What are the main features of Java?', 'How do the JVM, JRE, and JDK differ?', 'What is the difference between an interface and an abstract class?', 'How does Java garbage collection work?', 'What is the Java memory model?', 'What is the difference between checked and unchecked exceptions?', 'How do Java collections differ?', 'What is immutability in Java?', 'How does concurrency work in Java?', 'What are records and sealed classes?'],
    'spring-boot': ['What is Spring Boot?', 'What does dependency injection mean in Spring?', 'What are Spring Boot starters?', 'How do you create a REST controller?', 'How does Spring Boot auto-configuration work?', 'How do you manage configuration profiles?', 'How do you handle exceptions globally in Spring Boot?', 'How do you validate request bodies?', 'How do you test a Spring Boot application?', 'How do you secure a Spring Boot API?'],
    python: ['What are Python decorators?', 'How do Python generators work?', 'What is the difference between a list and a tuple?', 'How does Python manage memory?', 'What are virtual environments?', 'How do you handle exceptions in Python?', 'What is the Global Interpreter Lock?', 'How do async and await work in Python?', 'How do you structure a Python package?', 'How do you test Python code?'],
    'rest-api': ['What makes an API RESTful?', 'How do you choose HTTP methods?', 'What status code should an API return?', 'How do you design resource URLs?', 'How do you paginate an API?', 'How do you version a REST API?', 'How do you make an API idempotent?', 'How do you design API error responses?', 'How do you secure a REST API?', 'How do you document a REST API?'],
    graphql: ['What is GraphQL?', 'How does GraphQL differ from REST?', 'What are queries, mutations, and subscriptions?', 'How do you design a GraphQL schema?', 'What is the N+1 query problem?', 'How do DataLoaders work?', 'How do you handle GraphQL errors?', 'How do you paginate a GraphQL connection?', 'How do you secure a GraphQL API?', 'How do you version a GraphQL schema?'],
  },
  database: {
    sql: ['What is SQL?', 'What is the difference between INNER and LEFT JOIN?', 'How do GROUP BY and HAVING differ?', 'What is a database index?', 'How do transactions work?', 'What are isolation levels?', 'What is normalization?', 'How do you prevent SQL injection?', 'How do you optimize a slow SQL query?', 'What are window functions?'],
    postgresql: ['What makes PostgreSQL different from other relational databases?', 'What is MVCC in PostgreSQL?', 'How do PostgreSQL indexes work?', 'What is VACUUM?', 'How do you use EXPLAIN ANALYZE?', 'What are JSONB columns useful for?', 'How do PostgreSQL transactions and locks work?', 'What are common table expressions?', 'How do you configure replication?', 'How do you back up and restore PostgreSQL?'],
    mongodb: ['What is MongoDB?', 'When should you embed versus reference documents?', 'How do MongoDB indexes work?', 'What is the aggregation pipeline?', 'How do MongoDB transactions work?', 'How do you model relationships in MongoDB?', 'What is a replica set?', 'What is sharding?', 'How do you optimize a MongoDB query?', 'How do you secure MongoDB?'],
    redis: ['What is Redis?', 'What data structures does Redis provide?', 'When should you use Redis as a cache?', 'How do cache-aside and write-through caching differ?', 'How do Redis expiration and eviction work?', 'What is Redis persistence?', 'How do you prevent cache stampedes?', 'What are Redis transactions?', 'How does Redis Pub/Sub work?', 'How do Redis Cluster and Sentinel differ?'],
  },
  devops: {
    git: ['What is the difference between Git merge and rebase?', 'What is a Git commit?', 'How do branches work in Git?', 'What is a pull request workflow?', 'How do you resolve a merge conflict?', 'What is Git reset versus revert?', 'How do you use git stash?', 'What is a detached HEAD?', 'How do you find a regression with git bisect?', 'How do you protect a main branch?'],
    docker: ['What is Docker?', 'What is the difference between an image and a container?', 'How do Docker layers and caching work?', 'What is a multi-stage build?', 'How do Docker volumes work?', 'How do you pass configuration into a container?', 'How do you reduce Docker image size?', 'How do you secure a Docker container?', 'What is Docker Compose?', 'How do you debug a failing container?'],
    kubernetes: ['What is Kubernetes?', 'What is the difference between a Pod and a Deployment?', 'What are Services and Ingress used for?', 'How do ConfigMaps and Secrets differ?', 'What are liveness and readiness probes?', 'How do you scale a Kubernetes workload?', 'What are requests and limits?', 'How do rolling updates work?', 'What is a Kubernetes namespace?', 'How do you debug a failing Pod?'],
    aws: ['What are AWS regions and availability zones?', 'What is IAM and the principle of least privilege?', 'When should you use EC2, ECS, or Lambda?', 'What is Amazon S3?', 'How do VPCs and security groups work?', 'What is an AWS load balancer?', 'How do you design for high availability on AWS?', 'What is CloudWatch used for?', 'How do you manage AWS infrastructure as code?', 'How do you control AWS costs?'],
    azure: ['What are Azure regions and availability zones?', 'What is Azure Active Directory used for?', 'When should you use Azure VMs, App Service, or Functions?', 'What is Azure Blob Storage?', 'How do virtual networks and network security groups work?', 'What is Azure Kubernetes Service?', 'How do you monitor applications in Azure?', 'How do you manage Azure infrastructure as code?', 'What is Azure Key Vault?', 'How do you control Azure costs?'],
    'ci-cd': ['What is CI/CD?', 'What should a continuous integration pipeline include?', 'What is continuous delivery versus continuous deployment?', 'How do you design a reliable deployment pipeline?', 'What are blue-green and canary deployments?', 'How do you handle database migrations in CI/CD?', 'How do you roll back a deployment?', 'How do you secure CI/CD secrets?', 'How do you measure deployment performance?', 'How do you prevent flaky tests from blocking delivery?'],
    'github-actions': ['What are GitHub Actions?', 'How do workflows, jobs, and steps differ?', 'How do you trigger a GitHub Actions workflow?', 'How do you share data between jobs?', 'How do you cache dependencies?', 'How do you use secrets safely?', 'What are reusable workflows?', 'How do you use matrix builds?', 'How do you control workflow permissions?', 'How do you deploy with GitHub Actions?'],
  },
  architecture: {
    microservices: ['What are microservices?', 'When should you choose microservices over a monolith?', 'How do services communicate?', 'How do you define service boundaries?', 'How do you handle distributed transactions?', 'What is the saga pattern?', 'How do you deploy microservices safely?', 'How do you observe a microservices system?', 'How do you manage shared data?', 'What are common microservices failure modes?'],
    'distributed-systems': ['What is a distributed system?', 'What is the CAP theorem?', 'What is eventual consistency?', 'How do you make a distributed operation idempotent?', 'What is leader election?', 'How do you handle clock skew?', 'What is a quorum?', 'How do retries and backoff work?', 'What is the difference between at-least-once and exactly-once delivery?', 'How do you design for partial failure?'],
    'api-design': ['What makes an API easy to use?', 'How do you model an API resource?', 'How do you design consistent API errors?', 'How do you version an API contract?', 'How do you design pagination?', 'How do you handle backward compatibility?', 'How do you design an idempotent write API?', 'How do you document an API?', 'How do you authenticate and authorize an API?', 'How do you evolve an API without breaking clients?'],
    'design-patterns': ['What is the strategy pattern?', 'What is the observer pattern?', 'What is the factory pattern?', 'What is the adapter pattern?', 'What is dependency injection?', 'What is the command pattern?', 'What is the repository pattern?', 'When is the singleton pattern appropriate?', 'How do composition and inheritance differ?', 'How do you know when not to use a design pattern?'],
  },
}

/**
 * Direct, question-level answers. Keep these concise enough to practise aloud,
 * then use the topic primer and example below for the supporting detail.
 */
const CURATED_ANSWERS: Record<string, string> = {
  'What is semantic HTML?': 'Semantic HTML uses elements for their intended meaning—such as `nav`, `main`, `button`, and `article`—rather than styling generic `div` elements. It gives browsers, search engines, and assistive technology a reliable structure without adding ARIA by hand.',
  'When should you use a button instead of a link?': 'Use a link when the action navigates to another URL and a button when it changes state or performs an action on the current page. This distinction gives keyboard and screen-reader users the interaction they expect.',
  'How do forms associate labels with inputs?': 'Use a visible `label` whose `for` attribute matches the input `id`, or wrap the input inside the label. Placeholder text is not a label because it disappears and is not a dependable accessible name.',
  'What is the document outline?': 'A document outline is the meaningful hierarchy created by headings and sectioning content. Keep one clear `h1`, then use headings in order to describe the page structure rather than choosing levels for visual size.',
  'What are custom data attributes?': 'Custom `data-*` attributes attach small, non-semantic metadata to an element, such as `data-id` or `data-state`. Read them through `element.dataset`; do not use them as a substitute for application state or accessible semantics.',
  'How do HTML templates work?': 'The `template` element stores inert DOM that is not rendered or executed until its content is cloned and inserted. It is useful for client-side rendering when the markup is known ahead of time.',
  'What is the purpose of the meta viewport tag?': 'The viewport tag tells mobile browsers to use the device width as the layout viewport and sets the initial scale. Without it, a responsive layout can be rendered as a zoomed-out desktop page.',
  'How do you use responsive images?': 'Use `srcset` and `sizes` so the browser can choose an appropriately sized image, and use `picture` when the image itself must change at a breakpoint or format. Always set width and height to reserve layout space.',
  'What is the difference between defer and async scripts?': '`defer` scripts download in parallel, execute after HTML parsing, and preserve document order. `async` scripts execute as soon as they finish downloading, so they are suitable only for independent scripts such as analytics.',
  'How do you structure an accessible table?': 'Use a real `table` for two-dimensional data, with `caption`, `thead`, `tbody`, and `th` headers. Connect headers with `scope` or `headers` so assistive technology can announce the row and column context of each cell.',
  'How does CSS specificity work?': 'Specificity determines which competing declaration wins after origin and importance: IDs outrank classes, attributes, and pseudo-classes, which outrank element selectors. Prefer low-specificity, composable selectors instead of escalating with IDs or `!important`.',
  'What is the CSS box model?': 'Every element has content, padding, border, and margin. With `box-sizing: border-box`, declared width and height include padding and border, which makes component sizing easier to reason about.',
  'When should you use Flexbox versus Grid?': 'Use Flexbox for one-dimensional alignment along a row or column; use Grid when you need coordinated rows and columns. They are complementary—Grid often lays out a page area while Flexbox aligns content inside it.',
  'How do stacking contexts work?': 'A stacking context is an isolated z-ordering group created by properties such as positioned elements with `z-index`, `transform`, or `opacity`. A child cannot escape its parent context, so raising its `z-index` may not place it above another context.',
  'What is the difference between relative, absolute, fixed, and sticky positioning?': '`relative` keeps the element in normal flow while allowing an offset; `absolute` positions it against a containing block and removes it from flow; `fixed` is normally viewport-anchored; `sticky` stays in flow until it reaches a scroll threshold.',
  'How do container queries work?': 'Container queries style a component from the size of a named or eligible ancestor rather than the viewport. Declare a containment context with `container-type`, then use `@container` so a reusable component adapts wherever it is placed.',
  'What are CSS custom properties?': 'Custom properties are cascade-aware variables such as `--space-2` that can be reused with `var()`. They inherit by default and are especially useful for tokens, theming, and values that must change at runtime.',
  'How do you prevent layout shift with CSS?': 'Reserve space for images, ads, and asynchronous content with dimensions or an aspect ratio; avoid inserting content above existing content; and animate transforms or opacity rather than layout-affecting properties.',
  'What is the cascade layer feature?': 'Cascade layers let you explicitly order groups of CSS, such as reset, base, components, and utilities. Layer order is resolved before selector specificity, so a low-specificity component rule can reliably beat a utility-free reset.',
  'How do you build responsive layouts without device-specific breakpoints?': 'Let content set the breakpoints: use fluid widths, Flexbox or Grid with `minmax`, container queries, and a small number of changes when the layout no longer has enough room. Test at arbitrary widths, not only named device sizes.',
  'What is Next.js?': 'Next.js is a React framework that provides file-based routing, server rendering, static generation, data caching, and production tooling. It lets applications choose the rendering and data-fetching strategy per route.',
  'What is the difference between the App Router and Pages Router?': 'The App Router uses nested layouts, React Server Components, and conventions such as `page.tsx`; the Pages Router uses the older `pages/` directory and data-fetching functions. New applications generally use the App Router, while the Pages Router remains supported for existing apps.',
  'What are React Server Components in Next.js?': 'Server Components render on the server and send a serialized UI result rather than their JavaScript to the browser. They can read server-only resources directly, but cannot use browser APIs, event handlers, or client Hooks.',
  'When do you use a Server Component versus a Client Component?': 'Use a Server Component by default for data access, secure server-only logic, and non-interactive UI. Add `use client` only at the smallest interactive boundary that needs state, effects, event handlers, or browser APIs.',
  'How does Next.js data fetching and caching work?': 'In the App Router, server-side `fetch` calls can be memoized and cached according to their options; routes can be static, dynamic, or revalidated. Choose caching deliberately and invalidate or revalidate after mutations rather than assuming fresh data.',
  'What are route handlers?': 'Route handlers are server functions in `route.ts` files that implement HTTP methods such as GET and POST. They are useful for webhooks, backend-for-frontend endpoints, and small APIs that belong with a route.',
  'How do dynamic routes work in Next.js?': 'Folders such as `[id]` create a parameterized route, while `[...slug]` captures multiple segments. Validate route parameters before using them and return `notFound()` or a controlled error for invalid resources.',
  'How do you handle loading and error states in the App Router?': 'Add `loading.tsx` for a route-level loading UI and `error.tsx` as a client error boundary for rendering failures. Keep the fallback close to the affected segment so unaffected layouts remain responsive.',
  'What is static generation versus server-side rendering?': 'Static generation creates HTML ahead of time and is fast to serve from a CDN; server-side rendering produces it per request when data is user-specific or highly dynamic. Revalidation offers a middle ground for data that can be briefly stale.',
  'How do you optimize images and fonts in Next.js?': 'Use `next/image` to generate responsive image sizes, prevent layout shift, and lazy-load noncritical images; use `next/font` to self-host and preload fonts without an external render-blocking request. Set dimensions and prioritize only the true LCP image.',
  'What are the core Redux principles?': 'Redux keeps state in one store, updates it through dispatched actions, and calculates the next state with pure reducers. The model makes state changes explicit, inspectable, and easier to test.',
  'What are actions, reducers, and the store?': 'An action describes an event, a reducer returns the next state for that action, and the store holds state and notifies subscribers. Application code dispatches actions instead of mutating the store directly.',
  'Why must Redux reducers be pure?': 'A pure reducer returns the same next state for the same inputs and has no side effects. That makes replay, testing, time-travel debugging, and predictable updates possible.',
  'What is Redux Toolkit?': 'Redux Toolkit is the recommended way to write Redux. It provides `configureStore`, `createSlice`, Immer-backed immutable update syntax, and standard patterns that reduce boilerplate.',
  'What is a selector?': 'A selector reads or derives a view of store state. Memoized selectors avoid repeating expensive derivations and give components a stable, focused subscription boundary.',
  'How do you handle async logic with Redux?': 'Keep async work outside reducers, typically in thunks, listener middleware, or a data-fetching layer such as RTK Query. Dispatch lifecycle actions or store explicit loading, success, and error state.',
  'What is middleware?': 'Middleware sits between dispatch and reducers, where it can observe actions, trigger side effects, transform actions, or add logging. It should not hide core business state transitions from reducers.',
  'What is normalized state?': 'Normalized state stores each entity once by ID and keeps relationships as ID references. It prevents duplicated, inconsistent copies and makes targeted updates efficient.',
  'How do you avoid unnecessary Redux re-renders?': 'Select the smallest state a component needs, use memoized selectors for derived data, and preserve referential equality for unchanged values. Do not return a newly created object from a selector on every call unless it is memoized.',
  'When is Redux not a good fit?': 'Redux is unnecessary for short-lived local UI state or a small app with simple ownership. Use component state, context, or a focused server-state tool until multiple features genuinely need shared, coordinated state.',
  'What is an Observable?': 'An Observable is a lazy representation of values that may arrive over time. A subscriber receives next values, an error, or completion, and can unsubscribe to stop the work when the source supports it.',
  'How does an Observable differ from a Promise?': 'A Promise resolves once and begins immediately, while an Observable can emit zero or many values, is usually lazy, and supports cancellation through unsubscription. Observables are a better fit for events, streams, and composed asynchronous flows.',
  'What is a Subject?': 'A Subject is both an Observable and an observer: code can subscribe to it and manually push values with `next`. Use it sparingly as an event bridge; prefer a cold Observable when the producer should be created per subscriber.',
  'When do you use BehaviorSubject?': 'Use a BehaviorSubject when subscribers need the current value immediately, such as a small state store. It requires an initial value and exposes the latest value, so avoid it for one-off event streams.',
  'How do switchMap, mergeMap, concatMap, and exhaustMap differ?': '`switchMap` cancels the previous inner work, `mergeMap` runs work concurrently, `concatMap` queues work in order, and `exhaustMap` ignores new triggers while work is active. Choose the operator from the business concurrency rule.',
  'What do debounceTime and distinctUntilChanged do?': '`debounceTime` waits for a quiet period before emitting, while `distinctUntilChanged` suppresses consecutive equal values. Together they prevent search or autosave work from running for every keystroke.',
  'How do you unsubscribe safely?': 'Prefer framework-managed lifetimes such as Angular’s async pipe or `takeUntilDestroyed`; otherwise retain and unsubscribe from the subscription in cleanup. Do not unsubscribe from finite sources that complete naturally merely out of habit.',
  'How do you handle errors in an RxJS stream?': 'Handle expected errors inside the pipeline with `catchError`, return an appropriate fallback or rethrow, and keep error state visible to the UI. An unhandled error terminates the subscription, so decide whether the stream should recover.',
  'What is a cold versus hot Observable?': 'A cold Observable creates its producer for each subscriber, such as an HTTP request. A hot Observable shares a producer independent of subscribers, such as a DOM event or Subject.',
  'How do you test an Observable pipeline?': 'Test emitted values, completion, and errors with deterministic source Observables; use a virtual-time scheduler for time-based operators. Assertions should cover the selected concurrency behavior and cleanup path.',
  'What are Core Web Vitals?': 'Core Web Vitals are user-centered loading, responsiveness, and visual-stability metrics: Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Use field data to prioritize improvements on real user journeys.',
  'How do you reduce Largest Contentful Paint?': 'Identify the LCP element, then reduce server response time, remove render-blocking work, preload the critical image or font, and avoid delaying its request with client-side rendering. Optimize the page’s actual largest element rather than every asset.',
  'How do you avoid Cumulative Layout Shift?': 'Give images, embeds, and ad slots reserved dimensions; avoid late content above the fold; and use transforms for motion. A layout should not move because an asset or font finished loading.',
  'How do you improve Interaction to Next Paint?': 'Break up long main-thread tasks, reduce JavaScript and third-party work, defer noncritical rendering, and respond to input before doing expensive follow-up work. Profile the slow interaction to find the blocking task.',
  'What is the critical rendering path?': 'The critical rendering path is the work needed to turn HTML, CSS, JavaScript, and assets into visible pixels. Blocking CSS, synchronous JavaScript, and late critical resources delay first render and meaningful content.',
  'When should you lazy load code or images?': 'Lazy-load below-the-fold images and code that is not needed for the initial route or interaction. Do not lazy-load the LCP image, critical UI, or code needed immediately after navigation.',
  'How do you measure web performance?': 'Use lab tools such as Lighthouse and browser performance profiles to diagnose issues, then verify impact with field data such as the Web Vitals API or RUM. Measure representative devices, networks, and user flows.',
  'What causes long tasks on the main thread?': 'Large JavaScript parsing or execution, expensive rendering, synchronous event handlers, and third-party scripts can block the main thread for more than 50 ms. Split, defer, or move non-UI computation off the critical path.',
  'How do you use a performance budget?': 'Set measurable limits for resources and user outcomes—such as JavaScript bytes, LCP, or INP—then enforce them in CI and monitor them in production. A budget makes performance a release criterion rather than a cleanup task.',
  'How do you optimize third-party scripts?': 'Audit whether each script is necessary, load it only where needed, defer it until after critical rendering, and use provider-supported facades or server-side alternatives when possible. Treat third-party JavaScript as untrusted performance cost.',
  'What does web accessibility mean?': 'Web accessibility means people can perceive, understand, navigate, and operate a product across disabilities, devices, and assistive technologies. It is built into design and engineering, not added as a final audit.',
  'How do you use semantic HTML for accessibility?': 'Start with native elements whose behavior already matches the intent—buttons, links, headings, landmarks, inputs, and tables. Native semantics provide keyboard support and accessible names with less code and fewer failure modes than custom ARIA widgets.',
  'When should you use ARIA?': 'Use ARIA only when native HTML cannot express the required semantics or state, and follow the behavior that the chosen ARIA role implies. ARIA can improve a custom widget, but it cannot repair incorrect interaction or replace a native element.',
  'How do you make a custom control keyboard accessible?': 'Prefer a native control. If a custom control is unavoidable, make it focusable, support the expected keyboard commands, expose its role and state, show a visible focus indicator, and test it without a pointer.',
  'How do you manage focus in a modal dialog?': 'Move focus into the dialog when it opens, keep Tab navigation within it, restore focus to the trigger when it closes, and provide an accessible name. Also prevent background content from being exposed or interactive while the modal is active.',
  'What is accessible name and description?': 'The accessible name is the primary label announced for a control; the description provides supplemental help. Provide them with visible text, `label`, `aria-labelledby`, and `aria-describedby` in that order of preference.',
  'How do you test a page with a screen reader?': 'Test core flows with keyboard only first, then use a screen reader to verify headings, landmarks, names, state changes, and error messages are announced sensibly. Combine manual testing with automated checks; neither is sufficient alone.',
  'How do you meet color contrast requirements?': 'Check text and meaningful graphics against their background using WCAG contrast ratios, including hover and disabled states where content must be read. Do not use color alone to communicate status or errors.',
  'How do you support reduced motion preferences?': 'Respect `prefers-reduced-motion` by removing or simplifying nonessential movement, especially parallax, autoplay, and large transitions. Keep essential feedback but avoid motion that can distract or cause discomfort.',
  'What is an accessible error message for a form field?': 'Put a concise, actionable message near the field, programmatically associate it with the input, and move focus or announce a summary after submission when appropriate. Explain how to fix the issue, not only that validation failed.',
  'What is Node.js and when is it a good fit?': 'Node.js is a JavaScript runtime built on V8. It is a strong fit for I/O-bound APIs, real-time connections, and tooling because non-blocking I/O lets one process coordinate many concurrent requests; move CPU-heavy work to workers or another service.',
  'How does the Node.js event loop work?': 'Node runs JavaScript on an event-loop thread and delegates I/O to the operating system or worker pool. When work completes, callbacks are queued; Promise microtasks run before the next timer or I/O callback, so long synchronous work blocks every request.',
  'What is the difference between CommonJS and ES modules?': 'CommonJS uses `require` and `module.exports` and historically resolves synchronously; ES modules use static `import` and `export`, support tree shaking, and can use top-level await. Choose one module system consistently at a package boundary.',
  'How do streams work in Node.js?': 'Streams process data incrementally instead of buffering it all in memory. Readable streams produce chunks, writable streams consume them, and `pipe` or `pipeline` connects them with backpressure and error handling.',
  'How do you handle errors in asynchronous Node.js code?': 'Use `try`/`catch` around awaited Promises, pass errors to a central HTTP error handler, and listen for stream error events or use `pipeline`. Log enough context for diagnosis but do not expose internal errors to clients.',
  'What is the cluster module used for?': 'The cluster module starts multiple Node processes that can share a server port, allowing an application to use multiple CPU cores. In container platforms, separate replicas or an orchestrator are often a simpler scaling choice.',
  'How do worker threads differ from child processes?': 'Worker threads run JavaScript in separate threads inside one process and can share memory deliberately; child processes are separate OS processes with stronger isolation and IPC. Use workers for CPU-bound tasks and child processes when process isolation is useful.',
  'How do you manage configuration in Node.js?': 'Read configuration from environment variables at startup, validate it into a typed configuration object, and keep secrets in a secret manager rather than source control. Fail fast if a required value is missing or malformed.',
  'How do you prevent a Node.js memory leak?': 'Profile heap growth, then remove unintended references such as unbounded caches, event listeners, timers, or request objects retained by closures. Bound cache size and lifetime, and make listener or timer cleanup part of component ownership.',
  'How do you secure a Node.js application?': 'Validate input, authenticate and authorize every request, use parameterized database calls, set security headers, keep dependencies patched, and protect secrets. Rate-limit expensive endpoints and log security events without recording sensitive values.',
  'What is Express?': 'Express is a lightweight Node.js framework for routing and middleware. It gives an application a small HTTP abstraction while leaving choices about validation, authentication, database access, and project structure to the team.',
  'How does Express middleware work?': 'Middleware receives `request`, `response`, and `next`; it can enrich the request, end the response, or call `next` to continue the chain. Order matters, so parsing, authentication, routing, and error middleware should be arranged deliberately.',
  'How do you structure an Express application?': 'Organize by feature or domain, keep route handlers thin, put business rules in services, and isolate persistence behind repositories or data-access modules. Dependency injection or explicit factories make those layers easier to test.',
  'How do you handle errors centrally in Express?': 'Pass asynchronous failures to `next(error)` and define one error-handling middleware with four parameters after routes. Map known domain errors to safe status codes and messages; log unexpected errors with a request correlation ID.',
  'How do you validate request input?': 'Validate params, query strings, headers, and body against an explicit schema at the HTTP boundary. Reject invalid input with a clear 400-level response, use the validated value downstream, and enforce authorization separately from validation.',
  'How do you implement authentication middleware?': 'Verify the credential or session once in middleware, load only the identity and claims needed by downstream handlers, and attach that trusted context to the request. Authorization middleware then checks whether that identity may perform the requested action.',
  'How do you version an Express API?': 'Prefer compatible, additive changes; when a breaking change is unavoidable, version the public contract through a URL prefix, header, or media type. Maintain a deprecation window, document migration steps, and measure use before removing a version.',
  'How do you serve static assets securely?': 'Serve only a dedicated public directory, prevent path traversal through the framework static middleware, set appropriate cache and content-type headers, and never expose uploads or source files without explicit access control.',
  'How do you test Express routes?': 'Test routes through the HTTP boundary with a tool such as Supertest while replacing external dependencies with fakes or a test database. Cover success, validation, authorization, error mapping, and idempotency behavior.',
  'How do you handle graceful shutdown in Express?': 'Stop accepting new connections after SIGTERM, allow in-flight requests a bounded time to finish, close database and queue clients, then exit. A readiness check should fail first so load balancers stop sending new traffic.',
  'What is the difference between Git merge and rebase?': 'A merge creates a commit that combines two histories and preserves their branch structure; a rebase replays commits onto a new base, producing a linear history. Rebase local, unpublished work for clarity; do not rewrite shared history without team agreement.',
  'What is a Git commit?': 'A Git commit is an immutable snapshot of the staged project state, with a parent reference, author information, message, and content hash. A small commit should represent one coherent, reviewable change.',
  'How do branches work in Git?': 'A branch is a movable name pointing to a commit. Creating a branch is inexpensive; new commits advance that branch pointer, letting work proceed independently until it is reviewed and integrated.',
  'What is a pull request workflow?': 'A pull request proposes a branch change for review, automated checks, and discussion before integration. Keep it focused, describe intent and risks, require relevant checks, and use review feedback to improve the change before merging.',
  'How do you resolve a merge conflict?': 'First understand both changes and the desired behavior, then edit the conflicted file to a single correct result, run relevant tests, stage the resolution, and complete the merge or rebase. Never resolve by choosing a side blindly.',
  'What is Git reset versus revert?': '`git reset` moves a branch pointer and can rewrite local history; `git revert` adds a new commit that undoes an earlier commit while preserving shared history. Prefer revert for changes that have already been pushed to a shared branch.',
  'How do you use git stash?': 'Use `git stash` to temporarily save uncommitted changes so you can switch context without creating a partial commit. Apply or pop the stash later, and prefer a small WIP commit or branch when the work must be shared or kept for long.',
  'What is a detached HEAD?': 'HEAD is detached when it points directly to a commit rather than a branch. You can inspect or experiment safely, but create a branch before making work you intend to keep because new commits otherwise have no branch name.',
  'How do you find a regression with git bisect?': 'Mark a known good commit and a known bad commit, then let `git bisect` repeatedly check out the midpoint while you test it. Each result halves the search space, making it practical to identify the introducing commit in a long history.',
  'How do you protect a main branch?': 'Require pull requests, passing status checks, approvals, and up-to-date branches before merge; restrict force pushes and direct commits; and use CODEOWNERS or required reviewers for sensitive areas. Protection should match the branch’s deployment significance.',
  'What is TypeScript and why use it?': 'TypeScript is JavaScript with static type checking. It catches mismatched contracts before runtime, improves editor tooling and refactoring, but must be paired with runtime validation for data from APIs, users, and environment variables.',
  'What is structural typing?': 'TypeScript checks whether a value has the required shape rather than requiring an explicit declaration that it implements a named type. Two independently declared objects are compatible when their members are compatible.',
  'What is the difference between `any`, `unknown`, and `never`?': '`any` opts out of checking, `unknown` accepts any value but requires narrowing before use, and `never` represents a value that cannot occur. Prefer `unknown` at untrusted boundaries and avoid `any` unless interoperating with untyped code.',
  'What is type inference?': 'Type inference lets TypeScript derive types from values, assignments, and control flow, so annotations are needed mainly at public boundaries or when they clarify intent. It preserves safety without making ordinary code verbose.',
  'What is a union type?': 'A union type represents a value that may be one of several types, such as `string | number`. Code must narrow the union with a discriminant, `typeof`, or another runtime check before using members unique to one option.',
  'What is an intersection type?': 'An intersection type combines requirements from multiple types, so a value must satisfy all of them. It is useful for composing compatible object contracts, but conflicting property types can produce an impossible type.',
  'What is type narrowing?': 'Narrowing refines a broad type after a runtime check, such as `typeof`, `in`, equality against a discriminant, or a custom type predicate. It is how TypeScript keeps union handling safe without casts.',
  'What is a discriminated union?': 'A discriminated union gives each variant a shared literal tag, such as `status: "loading" | "success" | "error"`. Switching on that tag narrows each branch and lets the compiler check exhaustiveness.',
  'What is a type assertion?': 'A type assertion tells TypeScript to treat a value as a specified type without changing it at runtime or validating it. Use assertions only when you have stronger knowledge than the compiler; validate untrusted data instead.',
  'What does `strict` mode enable?': 'The `strict` compiler option enables a family of checks including strict nullability, safer function parameters, and definite assignment. It finds more defects early and should normally be enabled for new code.',
  'What is the difference between an interface and a type alias?': 'Both can describe object shapes. Interfaces are designed for object contracts and can be declaration-merged; type aliases can name unions, intersections, primitives, and mapped types. Use the form that communicates the contract most clearly.',
  'How do optional properties work?': 'An optional property may be absent, so reading it produces a value that may be `undefined`. Check or provide a default before using it, and distinguish an absent property from one explicitly set to `undefined` when that matters.',
  'What are readonly properties?': 'A readonly property cannot be assigned through that type after construction. It is a compile-time guarantee only; freeze objects or avoid mutation at runtime when real immutability is required.',
  'What is declaration merging?': 'Declaration merging combines multiple declarations with the same interface or namespace name into one type. It is useful for extending library types, but should be used sparingly because global augmentation can make dependencies harder to understand.',
  'What is an index signature?': 'An index signature describes objects whose keys are not known ahead of time, such as `Record<string, number>`. The value type applies to every matching key, so it should be used only when arbitrary keys are truly valid.',
  'How do you extend an interface?': 'Use `extends` to inherit members from another interface, then add or refine compatible members. Prefer small composable interfaces over one broad base type that forces unrelated consumers to depend on fields they do not need.',
  'What are callable interfaces?': 'A callable interface describes a function value and can also declare properties on that function. It is useful for APIs such as middleware or factories where the callable behavior itself has metadata or helper methods.',
  'What are mapped types?': 'Mapped types create a new type by transforming every property of another type, such as making all fields optional or readonly. They reduce duplication when the transformation follows a uniform rule.',
  'What are utility types?': 'Utility types such as `Pick`, `Omit`, `Partial`, `Required`, and `Record` derive common variations of an existing type. Use them when they clarify a relationship; avoid chains so complex that the source contract becomes unreadable.',
  'How do you model an API response?': 'Model the transport envelope, success data, and failure cases explicitly, then validate untrusted JSON at runtime before treating it as that type. Keep API DTOs separate from domain models when their lifecycles differ.',
  'What are generics?': 'Generics parameterize a type, function, or class so it can preserve the relationship between values without giving up type safety. For example, `Array<T>` says the output elements have the same type `T` supplied by the caller.',
  'How do generic constraints work?': 'A constraint such as `T extends { id: string }` limits a type parameter to values with capabilities the implementation needs. It keeps a generic reusable while allowing safe access to the constrained members.',
  'What does `keyof` do?': '`keyof T` produces a union of the property names of `T`. Combine it with a generic constraint to write safe property-access helpers that reject keys the object does not have.',
  'What does `typeof` do in a type position?': 'In a type position, `typeof value` captures the static type of an existing value or function. It is useful when a value is the source of truth for a type, such as a configuration object or factory.',
  'What are conditional types?': 'Conditional types choose one type or another based on assignability, using `T extends U ? X : Y`. They power reusable utilities but should be kept understandable because distributive behavior over unions can be surprising.',
  'What is the `infer` keyword?': '`infer` introduces a type variable inside a conditional type so TypeScript can extract part of a matched type, such as a function return type or array element. It is most useful inside small named utility types.',
  'How do generic defaults work?': 'A generic default supplies a type argument when the caller does not provide one, such as `ApiResponse<T = unknown>`. Defaults should be safe and broad enough that omitted arguments do not create false certainty.',
  'How do you write a generic function?': 'Declare the type parameter before the arguments and use it where input and output must be related. For example, `function first<T>(items: readonly T[]): T | undefined` preserves the element type for every caller.',
  'How do you write a generic React component?': 'Parameterize the component’s props with the data type and expose callbacks that use that same type, such as `Table<T>`. Keep generic inference easy at the call site and constrain `T` only when rendering needs a known field.',
  'When should you avoid generics?': 'Avoid generics when a concrete type communicates the domain better, when no input-output relationship needs preserving, or when callers must supply complex annotations. A small explicit union is often clearer than an abstract generic API.',
  'How do function overloads work?': 'Function overloads expose several call signatures while one implementation handles all cases. The implementation must accept the combined input space and return a result compatible with every public overload signature.',
  'What is a type predicate?': 'A type predicate is a function return type such as `value is User` that tells TypeScript a runtime check narrows a value. Its implementation must actually verify the claimed shape; otherwise it creates unsound code.',
  'What is an assertion function?': 'An assertion function throws when a condition is not met and declares that the condition holds afterward, such as `asserts value is string`. Use it for boundary validation and invariants, not to silence legitimate uncertainty.',
  'What is a function return type?': 'A function return type describes the value a caller can receive. TypeScript often infers it, but annotating exported or complex functions documents the contract and catches accidental return-path changes.',
  'What is the difference between `void` and `never`?': '`void` means a function returns no useful value but may finish normally; `never` means it cannot complete normally, such as a function that always throws or loops forever. `never` is useful for exhaustive checks.',
  'How do you type async functions?': 'An `async` function returns `Promise<T>` where `T` is the resolved value type. Type the resolved result, handle rejected promises at the call boundary, and do not pretend an asynchronous failure cannot happen.',
  'How do you type callbacks?': 'Describe callback parameters and return values explicitly, including whether callers may omit a value or return a Promise. Keep callback types narrow so implementations cannot depend on context the API does not guarantee.',
  'How do rest parameters work in TypeScript?': 'A rest parameter is typed as an array or tuple and gathers remaining arguments. A tuple preserves each argument position and type, making it useful for forwarding calls or modeling a known variable-length signature.',
  'How do you type `this` in a function?': 'Declare a fake first parameter such as `function f(this: HTMLElement, event: Event)` to specify the required receiver without adding a runtime argument. Arrow functions capture lexical `this` and cannot declare their own receiver type.',
  'What are template literal types?': 'Template literal types build string unions from other literal types, such as `` `get${Capitalize<Key>}` ``. They are useful for constrained naming conventions, but should not replace simple runtime validation for external strings.',
  'How do you organize types in a large project?': 'Keep types close to the domain or feature that owns them, export stable contracts from clear module boundaries, and avoid a global dumping ground. Share types only when the dependency is intentional and versioned.',
  'How do you type environment variables?': 'Declare the expected environment shape for editor support, then validate actual values at startup with a runtime schema. Environment variables are strings at runtime, so types alone cannot prove a URL, number, or secret is valid.',
  'How do you validate untrusted runtime data?': 'Parse untrusted input with a runtime schema library or explicit validator at the boundary, return a controlled error when it fails, and use the validated result in the domain. Type assertions do not validate JSON.',
  'How do you migrate JavaScript to TypeScript?': 'Enable checking incrementally, start at high-value boundaries and shared utilities, replace `any` with `unknown` plus narrowing, and keep the build passing throughout. Avoid a flag day that blocks product work.',
  'What is `tsconfig.json` for?': '`tsconfig.json` defines compiler behavior, included files, module resolution, and strictness for a TypeScript project. Treat it as an engineering policy: keep settings explicit and share a base configuration where repositories need consistency.',
  'What is module resolution?': 'Module resolution is TypeScript’s process for mapping an import specifier to a file and its types. Its mode should match the runtime and bundler so code that type-checks also resolves after build and deployment.',
  'How do project references work?': 'Project references split a TypeScript codebase into buildable units with declared dependencies. `tsc --build` can then type-check and rebuild only affected projects, improving scale and enforcing package boundaries.',
  'How do you share types between frontend and backend?': 'Share stable contract definitions in a versioned package or generate them from an API schema, while keeping server-only domain details private. Validate data at the network boundary because shared TypeScript types disappear at runtime.',
  'How do you avoid over-engineered types?': 'Optimize for readable errors and common use, not for modeling every theoretical case. Prefer straightforward discriminated unions and concrete domain types; introduce advanced conditional or generic types only when they remove real repetition safely.',
  'How do you make TypeScript builds faster?': 'Enable incremental builds, use project references for large repos, avoid unnecessary type-level complexity, exclude generated output, and profile slow type-checking paths. Keep dependencies and declaration files under control.',
  'What are the JavaScript primitive types?': 'JavaScript primitives are `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`. Primitives are immutable values; objects and functions are reference values that can hold mutable properties.',
  'What is the difference between `==` and `===`?': '`===` compares values without converting their types, while `==` first applies coercion rules that can produce surprising matches. Use strict equality by default and use loose equality only when you explicitly want its narrow behavior, such as checking for `null` or `undefined` together.',
  'What is the difference between `null` and `undefined`?': '`undefined` usually means a value was not provided or a property does not exist; `null` is an explicit empty value chosen by the program. Both are falsy, but they communicate different intent and should not be conflated in an API contract.',
  'What is hoisting in JavaScript?': 'Before execution, JavaScript creates bindings for declarations in a scope. Function declarations are initialized with their function value, `var` is initialized to `undefined`, and `let` or `const` exist but cannot be read before initialization.',
  'What is the temporal dead zone?': 'The temporal dead zone is the period from entering a scope until a `let` or `const` binding is initialized. Accessing the binding then throws a ReferenceError, preventing accidental use of an uninitialized value.',
  'How do `var`, `let`, and `const` differ?': '`var` is function-scoped, can be redeclared, and is initialized to `undefined`; `let` and `const` are block-scoped and have a temporal dead zone. Use `const` by default, `let` when rebinding is required, and avoid `var` in new code.',
  'What is strict mode?': 'Strict mode enables safer JavaScript semantics, such as throwing on accidental globals and disallowing some legacy behavior. ES modules are strict automatically; in older scripts it can be enabled with `"use strict"`.',
  'What is type coercion?': 'Type coercion is JavaScript converting a value to another type for an operation, such as turning a number into a string during concatenation. Prefer explicit conversion with `Number`, `String`, or Boolean checks when the conversion matters to correctness.',
  'What makes a value truthy or falsy?': 'Falsy values are `false`, `0`, `-0`, `0n`, empty string, `null`, `undefined`, and `NaN`; every other value, including empty arrays and objects, is truthy. Do not use truthiness when you specifically need to distinguish empty from missing.',
  'What is the difference between shallow and deep equality?': 'Shallow equality compares top-level values or references, while deep equality recursively compares nested structure. JavaScript object equality is reference equality, so two separately created but identical objects are not `===`.',
  'What is a closure?': 'A closure is a function together with access to the lexical variables from the scope where it was created. It enables private state and callbacks, but can retain memory longer than intended if it captures large objects.',
  'What is lexical scope?': 'Lexical scope means variable lookup is determined by where code is written, not where a function is called. A nested function can access bindings from its enclosing scopes, and an inner binding shadows an outer one with the same name.',
  'What is the difference between `call`, `apply`, and `bind`?': '`call` invokes a function immediately with a chosen `this` and separate arguments; `apply` does the same with an argument array; `bind` returns a new function with `this` and optional leading arguments fixed.',
  'What is a higher-order function?': 'A higher-order function accepts a function, returns a function, or both. Array methods, middleware, and decorators use this pattern to separate reusable control flow from the behavior supplied by callers.',
  'What is currying?': 'Currying transforms a function that takes multiple arguments into nested functions that each take one argument. It can make configuration reusable, but do not use it when ordinary parameters are clearer at the call site.',
  'What is function composition?': 'Function composition combines small functions so the output of one becomes the input of the next. It works best when functions are pure, have compatible contracts, and each represents one understandable transformation.',
  'How do arrow functions handle `this`?': 'Arrow functions do not create their own `this`; they capture it from the surrounding lexical scope. Use them for callbacks that should keep the outer receiver, but not for object methods that need dynamic method-call `this`.',
  'What is an IIFE?': 'An immediately invoked function expression is a function expression called as soon as it is created. It was commonly used to create private scope before modules and block-scoped declarations; modern code usually prefers modules.',
  'What is a pure function?': 'A pure function returns the same result for the same inputs and has no observable side effects. Purity makes tests, memoization, and composition easier because the function does not depend on or mutate hidden state.',
  'What is the difference between a callback and a promise?': 'A callback is a function passed to be called later, while a Promise represents one eventual result or failure and can be chained with `then` or `await`. Promises make sequencing and error propagation more consistent, but do not represent multiple values over time.',
  'What is the JavaScript event loop?': 'The event loop lets JavaScript coordinate asynchronous work while running synchronous code on one call stack. Once the stack is empty, it processes queued microtasks before taking the next task such as a timer or I/O callback.',
  'What is the difference between the microtask and macrotask queues?': 'Promise reactions and `queueMicrotask` use the microtask queue, which drains after current synchronous work and before the next task. Timers, events, and many I/O callbacks are tasks; an unbounded microtask chain can delay rendering and timers.',
  'What are the states of a Promise?': 'A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously.',
  'How does `async`/`await` work?': 'An `async` function always returns a Promise; `await` pauses that function until a Promise settles and resumes its continuation as a microtask. Use `try`/`catch` around awaited work when the failure belongs to that operation.',
  'What is the difference between `Promise.all` and `Promise.allSettled`?': '`Promise.all` fulfills only when every input fulfills and rejects as soon as one rejects; `Promise.allSettled` waits for every input and reports each outcome. Use `all` when every result is required and `allSettled` for independent best-effort work.',
  'When would you use `Promise.race` or `Promise.any`?': '`Promise.race` settles with the first input to settle, whether fulfilled or rejected, which is useful for timeouts. `Promise.any` fulfills with the first successful input and rejects only when every input rejects, which suits redundant sources.',
  'How do you handle errors with async/await?': 'Catch errors at the boundary that can recover, translate expected failures into a domain result or user-facing state, and let unexpected failures reach centralized logging. Do not swallow a rejection without deciding how the caller should proceed.',
  'What is callback hell and how do you avoid it?': 'Callback hell is deeply nested asynchronous control flow that obscures sequencing and makes errors hard to propagate. Flatten work with Promises and `async`/`await`, extract named operations, and model parallel work explicitly.',
  'How do you cancel a fetch request?': 'Create an `AbortController`, pass its signal to `fetch`, and call `abort()` when the request is no longer relevant, such as component cleanup or a replaced search query. Handle the resulting abort error separately from a real network failure.',
  'What is the difference between synchronous and asynchronous code?': 'Synchronous code completes before the next statement runs; asynchronous code schedules work that completes later and reports its result through a callback, Promise, or event. Async code improves responsiveness for waiting, not for CPU-bound computation on the same thread.',
  'What is the prototype chain?': 'When a property is not found on an object, JavaScript looks on that object’s prototype, then continues through prototypes until `null`. This delegation chain is the mechanism behind inherited methods and properties.',
  'What is the difference between `__proto__` and `prototype`?': '`prototype` is a property on constructor functions used as the prototype for objects created with `new`; `__proto__` is a legacy accessor to an individual object’s actual prototype. Prefer `Object.getPrototypeOf` and `Object.setPrototypeOf` when inspection is necessary.',
  'How does `new` work?': '`new` creates an object whose prototype is the constructor’s `prototype`, calls the constructor with that object as `this`, and returns the object unless the constructor explicitly returns another object. Classes use the same underlying mechanism.',
  'What are JavaScript classes syntactic sugar for?': 'Classes provide clearer syntax for constructor functions, prototype methods, inheritance, and `super`, while still using prototype delegation underneath. They do not create a separate class-based object model.',
  'What is prototypal inheritance?': 'Prototypal inheritance lets one object delegate missing property lookups to another object. It supports shared behavior without copying methods into every instance and can be created with constructors, classes, or `Object.create`.',
  'How do you create an object without a prototype?': 'Use `Object.create(null)` to create a dictionary-like object with no inherited properties. It avoids collisions with names such as `toString`, but also lacks methods from `Object.prototype`, so use `Object.hasOwn` for membership checks.',
  'What is the difference between own and inherited properties?': 'Own properties are stored directly on an object; inherited properties are found through its prototype chain. Use `Object.hasOwn(object, key)` when logic must distinguish data owned by the object from delegated behavior.',
  'How does `instanceof` work?': '`instanceof` checks whether a constructor’s `prototype` appears in an object’s prototype chain. It can be unreliable across separate JavaScript realms and can be customized with `Symbol.hasInstance`, so use structural checks when the actual capability matters.',
  'What are getters and setters?': 'Getters and setters are accessor properties that run code when a property is read or assigned. Use them for a clear computed or validated property contract, but avoid hidden expensive work or side effects in an ordinary-looking read.',
  'When should you prefer composition over inheritance?': 'Prefer composition when behavior can be assembled from independent capabilities or when inheritance would create a fragile hierarchy. Inheritance is appropriate only for a stable “is-a” relationship with shared invariants and substitutable subclasses.',
  'What are ES modules?': 'ES modules are JavaScript files that explicitly export values and import dependencies with static syntax. They have their own scope, run in strict mode, support tooling such as tree shaking, and are the standard module system for modern browsers and Node.',
  'What is the difference between default and named exports?': 'A module has at most one default export, which importers may name freely, while named exports are imported by their declared names and a module can have many. Named exports make public APIs and refactoring more explicit.',
  'What are template literals?': 'Template literals use backticks to support interpolation with `${...}`, multiline strings, and tagged processing functions. Use them for readable string construction, not to build unescaped HTML from untrusted values.',
  'What are destructuring assignments?': 'Destructuring extracts values from arrays or properties from objects into bindings, optionally with aliases and defaults. It improves clarity when used locally but can obscure data shape when patterns become deeply nested.',
  'What is the rest parameter?': 'A rest parameter gathers remaining function arguments into a real array, such as `function sum(...values)`. It must be the final parameter and replaces the older array-like `arguments` object for most uses.',
  'What is the spread operator?': 'Spread expands iterable values into arguments or array elements and expands object properties into a new object. It makes shallow copies only, so nested objects remain shared unless they are copied separately.',
  'What are `Map` and `Set` useful for?': '`Map` stores key-value pairs with keys of any type and preserves insertion order; `Set` stores unique values. Use them when their operations and semantics fit better than object-property dictionaries or arrays.',
  'What are `WeakMap` and `WeakSet`?': 'WeakMap and WeakSet hold object keys or values weakly, allowing garbage collection when no other reference remains. They are useful for metadata or private associations but are not iterable and cannot be inspected like normal collections.',
  'What are generators and iterators?': 'An iterator exposes a `next()` method that yields a sequence; a generator function creates an iterator and can pause with `yield`. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams.',
  'What are optional chaining and nullish coalescing?': 'Optional chaining (`?.`) stops property access or calls when the left side is nullish; nullish coalescing (`??`) provides a fallback only for `null` or `undefined`. They avoid verbose guards without treating valid falsy values such as `0` or empty string as missing.',
  'What is event delegation?': 'Event delegation attaches one listener to a stable ancestor and handles events from matching descendants as they bubble. It reduces listeners and works for elements added later, but the handler must verify the actual target with `closest` or similar logic.',
  'What is the difference between event bubbling and capturing?': 'Capturing travels from the document down to the target; bubbling travels from the target back up through ancestors. Most handlers use bubbling by default, while capture is useful when an ancestor must observe an event before descendants handle it.',
  'What do `preventDefault` and `stopPropagation` do?': '`preventDefault` cancels the browser’s default action when the event is cancelable; `stopPropagation` prevents the event from continuing to ancestor listeners. Use each narrowly because stopping propagation can break unrelated component behavior.',
  'What is the difference between an attribute and a property?': 'An HTML attribute is initial markup metadata; a DOM property is the live JavaScript state of an element. For example, an input’s `value` property changes as the user types while its `value` attribute may still hold the initial value.',
  'When does `DOMContentLoaded` fire?': '`DOMContentLoaded` fires when the initial HTML has been parsed and deferred scripts have executed; it does not wait for images, stylesheets, or subframes. Use `load` only when the full page resource set is required.',
  'How do you create and insert DOM elements safely?': 'Create elements with DOM APIs, set text through `textContent`, set only trusted attributes, and append the node. Avoid assigning untrusted strings to `innerHTML`, because it can turn data into executable markup.',
  'What is the difference between `innerHTML`, `textContent`, and `innerText`?': '`innerHTML` reads or parses markup and is unsafe for untrusted input; `textContent` reads or writes raw text without layout awareness; `innerText` reflects rendered text and can trigger style or layout work. Prefer `textContent` for plain data.',
  'How do you use `data-*` attributes?': 'Use `data-*` attributes for small element-associated metadata, accessed through `element.dataset`. They are useful for event delegation and hooks, but application state should live in JavaScript data structures rather than serialized into arbitrary DOM attributes.',
  'What is the browser rendering pipeline?': 'Browsers parse HTML into a DOM and CSS into a CSSOM, combine them into a render tree, calculate layout, paint pixels, and composite layers. JavaScript that repeatedly reads layout after writes can force expensive synchronous recalculation.',
  'What is a Web Worker?': 'A Web Worker runs JavaScript on a background thread and communicates by messages or transferable objects. It is useful for CPU-heavy work that would block the UI, but it cannot directly access the DOM.',
  'What causes a memory leak in JavaScript?': 'A memory leak occurs when code unintentionally retains references to objects that are no longer useful, such as detached DOM nodes, uncleared timers, global caches, or listeners. Find it by comparing heap snapshots and remove the retaining reference.',
  'What is debouncing?': 'Debouncing delays a function until calls stop for a specified interval. It is useful for bursty input such as search typing or resize events when only the final value matters.',
  'What is throttling?': 'Throttling limits a function to at most one execution per interval. Use it for continuous events such as scrolling or pointer movement when periodic updates are useful but every event is unnecessary.',
  'What is memoization?': 'Memoization caches a function result for a given input so repeated computations can be reused. It helps only when the calculation is expensive, inputs repeat, and cache size and invalidation are controlled.',
  'What is a layout thrash?': 'Layout thrashing occurs when code alternates DOM writes with layout reads, forcing the browser to recalculate layout repeatedly. Batch reads before writes and prefer transform-based animation to reduce forced synchronous layout.',
  'How can you avoid unnecessary reflows and repaints?': 'Batch DOM changes, avoid layout reads after writes, update classes rather than many inline styles, and animate `transform` or `opacity` where possible. Profile first because layout is only one potential bottleneck.',
  'What is code splitting?': 'Code splitting divides JavaScript into independently loaded chunks so an initial route does not download every feature. Split at route or interaction boundaries, and avoid fragmenting critical code into too many network requests.',
  'What is tree shaking?': 'Tree shaking removes unused exports from statically analyzable ES modules during bundling. It works best with side-effect-free modules and direct imports; dynamic access or CommonJS patterns can prevent unused code removal.',
  'How do you profile a slow web page?': 'Reproduce the slow user journey with browser performance tools, inspect network, scripting, layout, and rendering timelines, then form a hypothesis and measure the change. Validate with field metrics because lab conditions may differ from real users.',
  'When should you use `requestAnimationFrame`?': 'Use `requestAnimationFrame` for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering.',
  'What is the same-origin policy?': 'The same-origin policy restricts a document from reading resources from a different scheme, host, or port unless that other origin explicitly permits it. It is a browser isolation boundary, not an authorization system for a server API.',
  'What is CORS?': 'Cross-Origin Resource Sharing is an HTTP mechanism through which a server tells browsers which origins, methods, headers, or credentials may access a resource. Configure it narrowly on the server; client-side headers cannot bypass it.',
  'What is cross-site scripting (XSS)?': 'XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy.',
  'How do you prevent XSS in a web application?': 'Keep untrusted data as text, use framework escaping or `textContent`, sanitize any intentionally supported HTML with a trusted library, validate URLs, and use a restrictive CSP. Never rely on client-side validation alone.',
  'What is CSRF and how can it be mitigated?': 'CSRF tricks a browser into sending an authenticated cross-site request using ambient credentials such as cookies. Mitigate it with SameSite cookies, anti-CSRF tokens for state-changing requests, origin checks, and avoiding credentialed cross-origin endpoints.',
  'Why is `eval` dangerous?': '`eval` executes a string as code in the current scope, enabling code injection when the string is influenced by untrusted data and making optimization and auditing harder. Use data parsers and explicit logic instead.',
  'How should sensitive data be stored in the browser?': 'Avoid storing sensitive long-lived secrets in browser-accessible storage. Prefer short-lived, HttpOnly, Secure, SameSite cookies for session credentials, minimize what reaches the client, and assume any JavaScript-readable token can be stolen by XSS.',
  'What are secure cookie attributes?': '`Secure` sends cookies only over HTTPS, `HttpOnly` blocks JavaScript access, and `SameSite` limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials.',
  'What is Content Security Policy?': 'Content Security Policy is a response header that limits where scripts, styles, images, and other resources may load from. A nonce- or hash-based policy can greatly reduce the impact of injected markup by blocking unauthorized script execution.',
  'How do you validate and sanitize user input?': 'Validate input against the expected type, length, format, and authorization rules at the server boundary; normalize only when semantics require it; and sanitize only for the output context, such as HTML or a URL. Validation and sanitization solve different problems.',
  'What is the module pattern?': 'The module pattern groups private state and public functions inside a closure, exposing only the intended API. Modern ES modules provide the same encapsulation more directly and should be preferred for new code.',
  'What is the observer pattern?': 'The observer pattern lets subscribers register interest in a subject and receive notifications when it changes. Define subscription lifetime and error behavior clearly so listeners do not leak or make updates unpredictable.',
  'What is the pub/sub pattern?': 'Publish/subscribe sends events through a broker or channel so publishers and subscribers do not know each other directly. It improves decoupling but makes ordering, delivery guarantees, and debugging important design concerns.',
  'What is the factory pattern?': 'A factory centralizes object creation behind a function or method, allowing callers to request a capability without coupling to construction details. Use it when creation varies or dependencies must be injected; do not add one for a single simple constructor.',
  'What is the singleton pattern and its trade-offs?': 'A singleton ensures one shared instance, often for configuration or a connection manager. It can hide dependencies and create global mutable state, so prefer explicit injection unless one process-wide instance is truly required.',
  'What is the strategy pattern?': 'The strategy pattern packages interchangeable algorithms behind a common interface and selects one at runtime. It replaces large conditional branches when behaviors vary independently and callers should not know implementation details.',
  'What is the adapter pattern?': 'An adapter translates one interface into another expected by the caller. Use it to isolate third-party APIs, legacy contracts, or transport differences so the rest of the code depends on a stable internal abstraction.',
  'What is dependency injection in JavaScript?': 'Dependency injection supplies collaborators such as HTTP clients, clocks, or repositories from outside a function or class rather than constructing them inside. It makes dependencies explicit and enables simple tests with fakes.',
  'What is immutability and why does it matter?': 'Immutability means representing changes by creating new values instead of mutating existing ones. It makes state transitions easier to reason about, enables reliable equality checks, and reduces accidental shared-state bugs.',
  'How do you design a reusable API client?': 'Define a small transport boundary that handles base URL, authentication, serialization, timeouts, errors, and retries consistently, then expose domain-focused methods above it. Make dependencies injectable and keep server response parsing near the boundary.',
  'How do you flatten a nested array?': 'Traverse each item recursively or iteratively; append primitives and recursively flatten nested arrays. State whether depth is unlimited, whether sparse arrays matter, and whether the original array must remain unchanged.',
  'How do you implement debounce?': 'Keep a timer identifier in a closure, clear it on every call, and schedule the function after the quiet delay. Decide whether leading invocation, cancellation, and preserving `this` and arguments are required by the API.',
  'How do you implement deep clone?': 'Use `structuredClone` when its supported types meet the requirement; otherwise define the exact value types to support and copy recursively while tracking cycles. JSON serialization is not a general deep clone because it loses many JavaScript values.',
  'How do you group an array of objects by a key?': 'Reduce the array into a `Map` or object keyed by the selected property, appending each item to that group. Define behavior for missing keys and avoid mutating the source array.',
  'How do you find duplicate values in an array?': 'Track seen values in a `Set`; if a value is already present, add it to a duplicates set. This is O(n) time with O(n) additional space and works when the equality semantics of `Set` are acceptable.',
  'How do you implement `Array.prototype.map`?': 'Create a result array of the same length, visit existing indexes in order, call the callback with value, index, and source array, and preserve holes. Do not mutate the source and validate that the callback is callable.',
  'How do you implement a Promise pool with concurrency limits?': 'Keep a queue index and start at most `limit` workers; each worker awaits the next task until the queue is exhausted. Collect results by input index and decide whether one rejection should stop remaining work or be recorded independently.',
  'How do you write a memoize function?': 'Cache results in a `Map` keyed by a stable representation of the arguments or by argument identity for object keys. Bound the cache or expose invalidation when inputs are unbounded, and avoid memoizing impure functions.',
  'How do you compare two objects deeply?': 'First compare primitives and identity, then compare constructors or supported types, key sets, and recursively compare corresponding values while tracking visited pairs for cycles. Define how dates, maps, sets, functions, and prototypes should be treated.',
  'How do you implement an event emitter?': 'Store a `Map` from event names to listener sets, provide `on`, `off`, and `emit`, and snapshot listeners before calling them if listeners may unsubscribe during emission. Define error behavior and avoid retaining listeners longer than their owner lifetime.',
  'What is Angular?': 'Angular is a TypeScript-based web framework for building client applications with components, templates, dependency injection, routing, forms, and reactive primitives. It provides strong conventions for large applications.',
  'What is the difference between Angular and AngularJS?': 'AngularJS is the older JavaScript framework based on controllers and digest cycles; modern Angular is a TypeScript framework based on components, dependency injection, ahead-of-time compilation, and a different architecture. They are not successive versions of the same API.',
  'What is a standalone component?': 'A standalone component declares its own template dependencies through its `imports` array and does not need to be declared in an NgModule. It simplifies feature composition and is the default approach for new Angular code.',
  'What are Angular modules?': 'NgModules group declarations, providers, and imports into a compilation and dependency boundary. They remain useful in existing applications and libraries, though standalone APIs remove the need for them in many new features.',
  'What is a decorator?': 'A decorator attaches metadata to a class, property, method, or parameter so Angular can understand how to compile or inject it. Examples include `@Component`, `@Injectable`, `@Input`, and `@Output`.',
  'What is a component lifecycle?': 'A component lifecycle is the sequence of creation, input updates, view initialization, checking, and destruction. Use lifecycle hooks for integration with external resources, not for work that can happen declaratively during rendering.',
  'What is data binding in Angular?': 'Angular data binding connects component state and template output through interpolation, property binding, event binding, and two-way binding. Keep data flow clear: values go down into the view and user events update component state.',
  'What is the difference between property and attribute binding?': 'Property binding updates a live DOM property or directive input, such as `[disabled]`; attribute binding writes an HTML attribute, such as `[attr.aria-label]`. Use attributes for semantics that have no matching property or for ARIA values.',
  'What are directives?': 'Directives add behavior to existing elements or control template structure. Components are directives with templates; attribute directives change appearance or behavior, while structural directives add or remove rendered views.',
  'What are pipes?': 'Pipes transform template values for display, such as formatting a date or currency. Keep pure pipes deterministic and inexpensive; use services or components for work that needs side effects, dependencies, or complex state.',
  'What is the difference between a component and a directive?': 'A component is a directive with its own template and view; an attribute directive adds behavior or styling to an existing host element. Use a component for a self-contained UI unit and a directive for reusable behavior that does not own markup.',
  'How do `@Input` and `@Output` work?': '`@Input` receives data from a parent and `@Output` exposes events for the parent to handle. This keeps components reusable by separating incoming state from outgoing intent.',
  'What is `EventEmitter` used for?': 'EventEmitter is Angular’s event stream utility commonly used by an output to emit component events. It communicates that something happened; the parent decides how to update application state.',
  'What is content projection?': 'Content projection lets a parent provide markup that a child component renders through `ng-content`. It is useful for reusable shells such as cards, dialogs, and layout components without forcing callers into a fixed template.',
  'What is `ViewChild`?': 'ViewChild queries a directive, component, template, or element from a component’s own view. Use it for focused imperative integration such as a DOM API or child method, not as a substitute for normal input/output data flow.',
  'What is the difference between view and content children?': 'View children are declared in a component’s own template; content children are projected into the component by its parent. Query them with ViewChild or ContentChild according to where the target is declared.',
  'How do lifecycle hooks work?': 'Angular calls lifecycle hooks at defined points, including input changes, view initialization, and destruction. Use `ngOnDestroy` to clean up external resources and prefer input setters or signals for straightforward reactive updates.',
  'What is the `OnPush` change-detection strategy?': 'OnPush tells Angular to check a component when an input reference changes, an event occurs in its view, a signal it reads changes, or it is explicitly marked. It encourages immutable updates and reduces unnecessary checking.',
  'How do you build a reusable Angular component?': 'Define a narrow input and output contract, use semantic accessible markup, keep domain-specific data access outside the component, and expose only behavior callers need. Test it through its public inputs and rendered output.',
  'How do you communicate between sibling components?': 'Lift shared state to their nearest common parent, then pass data down through inputs and events up through outputs. Use a shared service or store only when the state genuinely spans a wider feature boundary.',
  'What is an Angular service?': 'An Angular service is a class that holds reusable behavior such as data access, business rules, shared state, or integration with a browser API. Components consume it through dependency injection instead of constructing it directly.',
  'Why are services usually injectable?': 'Injection makes a service’s dependencies explicit and lets Angular supply, scope, replace, or mock them. That improves reuse and testing compared with hard-coding collaborators inside components.',
  'What does `providedIn: root` mean?': 'It registers the service with the application root injector, usually creating one shared instance for the app and allowing unused services to be tree-shaken. Use a narrower provider when the service state should be scoped to a route or component.',
  'What is the difference between a service and a factory provider?': 'A service is usually a class Angular instantiates; a factory provider creates a value through a function and can choose implementation from configuration or other dependencies. Both are resolved through the injector.',
  'How do you share state with a service?': 'Keep state private inside a feature-scoped service and expose readonly signals or Observables plus methods that perform valid updates. This makes ownership, mutation rules, and cleanup explicit.',
  'How do you test an Angular service?': 'Instantiate it with TestBed or directly with controlled dependencies, replace HTTP or collaborators with fakes, and assert its public behavior. Test error paths and observable or signal state transitions, not private implementation details.',
  'What is `HttpClient`?': 'HttpClient is Angular’s HTTP API, returning typed Observables for requests. It supports interceptors, cancellation through unsubscription, request options, and test utilities; generic types describe expected data but do not validate server responses.',
  'How do HTTP interceptors work?': 'An interceptor wraps outgoing requests and incoming responses in a chain. Use it for cross-cutting concerns such as authentication headers, tracing, retries, and centralized error translation, while avoiding feature-specific business rules.',
  'How do you handle HTTP errors?': 'Handle expected errors near the feature so the UI can show useful recovery states, and use an interceptor for consistent transport-level behavior. Preserve enough error context for logging without exposing sensitive server details.',
  'When should a service be stateless?': 'Keep a service stateless when it performs a reusable calculation or request and does not own feature state. Stateful services are appropriate for a clearly scoped store or coordination boundary, but hidden shared mutable state makes tests and lifecycles harder.',
  'What is dependency injection?': 'Dependency injection supplies an object’s collaborators from outside rather than having it construct them. It separates behavior from wiring, makes dependencies visible, and lets tests substitute controlled implementations.',
  'What is an injector?': 'An injector is Angular’s resolver for dependency tokens. It looks up a provider in its hierarchy, creates or retrieves the configured value, and supplies it to constructors or `inject()` calls.',
  'What are provider scopes?': 'Provider scope determines where a dependency is registered and therefore how long an instance lives: root for the application, route or environment for a feature boundary, and component for one component subtree. Choose the narrowest scope that matches the state lifetime.',
  'What is an injection token?': 'An InjectionToken is a typed runtime key for dependencies that are not classes, such as configuration values or interfaces. It avoids relying on erased TypeScript interfaces and makes providers explicit.',
  'What are multi-providers?': 'Multi-providers register several values under one token and inject them as an array. Angular uses them for extensible concerns such as HTTP interceptors, where multiple independent contributions form an ordered pipeline.',
  'How does hierarchical DI work?': 'Angular searches from the requesting injector upward through parent injectors until it finds a provider. A child provider can override a parent one, enabling feature-local configuration and test substitutions.',
  'What is `@Optional`?': '`@Optional` tells Angular to inject `null` instead of throwing when no provider exists. Use it only when the dependency is truly optional and the consumer has a safe behavior without it.',
  'What is `@Self` and `@SkipSelf`?': '`@Self` restricts lookup to the current injector; `@SkipSelf` starts lookup at the parent. They are useful for advanced scoping or wrapper components, but ordinary dependencies should rely on normal hierarchical lookup.',
  'How do you provide a configuration object?': 'Create an InjectionToken for a typed configuration contract and register a value or factory provider at the intended scope. Validate environment-derived values at startup rather than assuming the TypeScript type makes them valid.',
  'How do you mock a dependency in a test?': 'Override its provider in the test configuration with a fake, spy, or test implementation that exposes only the behavior the test needs. Assert the consumer’s observable outcome rather than the injector internals.',
  'What is an Observable?': 'An Observable represents a lazy sequence of zero or more values over time. Subscribers receive values, completion, or errors and can unsubscribe, which makes Observables suitable for UI events, HTTP, and reactive state.',
  'What is the difference between an Observable and a Promise?': 'A Promise produces one eventual result and begins immediately; an Observable can produce many values, usually begins on subscription, and supports cancellation through unsubscription. Choose the abstraction that matches the cardinality and lifetime.',
  'What is a Subject?': 'A Subject is both an Observable and an observer, so code can subscribe to it and push values with `next`. It is useful as a bridge for imperative events but should not become an uncontrolled global event bus.',
  'What is the difference between Subject and BehaviorSubject?': 'A Subject sends only future values to a new subscriber; a BehaviorSubject requires an initial value and immediately sends its current value. Use BehaviorSubject for current state, not for events with no meaningful initial value.',
  'What is a ReplaySubject?': 'A ReplaySubject remembers a configured number of prior values and replays them to new subscribers. It is useful for bounded history or late subscribers, but its buffer size and lifetime must be controlled to avoid memory growth.',
  'What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`?': '`switchMap` cancels stale inner work, `mergeMap` runs work concurrently, `concatMap` queues it in order, and `exhaustMap` ignores triggers while one operation runs. Select the operator from the required concurrency behavior.',
  'What do `debounceTime` and `distinctUntilChanged` do?': '`debounceTime` waits for a quiet interval before emitting; `distinctUntilChanged` suppresses consecutive equal values. They are commonly paired to avoid unnecessary search, validation, or autosave work.',
  'How do you unsubscribe safely?': 'Use Angular-managed lifetimes such as the async pipe or `takeUntilDestroyed`, and clean up manual subscriptions in the owner’s destruction path. Finite Observables such as HttpClient requests complete automatically.',
  'What is the `async` pipe?': 'The async pipe subscribes to an Observable or Promise in a template, exposes its latest value, marks the view for update, and unsubscribes when the view is destroyed. It avoids manual subscription lifecycle code in components.',
  'How do you handle errors in RxJS?': 'Use `catchError` near the operation that can recover, map expected failures to a meaningful state or fallback, and rethrow unexpected errors for centralized handling. An unhandled error terminates that subscription.',
  'How does Angular Router work?': 'Angular Router matches the current URL against a route configuration and renders the matched component tree into router outlets. Routes can declare parameters, guards, lazy boundaries, redirects, and data requirements.',
  'What is a router outlet?': 'A router outlet is a directive that marks where the active route component should render. Nested outlets let child routes render inside a parent feature layout.',
  'What are route parameters and query parameters?': 'Route parameters identify a resource in the path, such as `/projects/42`; query parameters modify a view, such as filtering or pagination. Validate both because URLs are untrusted external input.',
  'What are route guards?': 'Route guards decide whether navigation may proceed, redirect, or wait for a condition. They improve user experience but are not security boundaries; the server must still enforce authorization.',
  'What is lazy loading?': 'Lazy loading defers a route or feature bundle until navigation requires it. It reduces initial JavaScript, but loading UI and error handling must make the transition clear and reliable.',
  'What are resolvers?': 'Resolvers fetch or prepare route data before route activation. Use them when a view should not render without essential data; for optional data, loading inside the component may provide a faster perceived transition.',
  'How do you create child routes?': 'Declare a `children` array under a parent route and place a router outlet in the parent component. Child routes inherit the parent path and can share layout, guards, or providers.',
  'How do you redirect routes?': 'Use a route with `redirectTo` and the correct `pathMatch` to map one URL to another. Keep redirects explicit and avoid broad prefix redirects that accidentally catch legitimate child paths.',
  'How do you handle a not-found route?': 'Place a wildcard `**` route last and render a helpful not-found page or redirect intentionally. Do not hide missing resources behind a generic success page, because it complicates navigation and diagnostics.',
  'How do you preload lazy modules?': 'Configure a preloading strategy to fetch selected lazy routes after the initial route becomes stable. Preload likely next destinations, but measure network cost and avoid competing with critical user work.',
  'How do you manage state in Angular?': 'Give each piece of state one clear owner: local component state for local UI, a feature service or signal store for shared feature state, and a global store only for cross-feature coordination. Keep updates explicit and derive values instead of storing duplicates.',
  'When is a service with RxJS enough?': 'A service with an Observable or BehaviorSubject is enough when state belongs to one feature, transitions are simple, and the team can understand the update flow. Introduce a larger store when coordination, effects, or debugging needs justify its overhead.',
  'What is NgRx?': 'NgRx is a Redux-inspired Angular state-management library built around actions, reducers, selectors, effects, and a store. It is useful for complex, shared state with explicit transitions and tooling.',
  'What are actions, reducers, selectors, and effects?': 'Actions describe events, reducers calculate the next immutable state, selectors derive views of state, and effects perform asynchronous or external work in response to actions. This separation keeps state changes predictable and side effects testable.',
  'Why should reducers be pure?': 'Pure reducers return the same next state for the same prior state and action without performing I/O or mutation. That makes replay, tests, debugging, and state inspection reliable.',
  'How do selectors improve performance?': 'Selectors centralize derived state and can memoize a result until their inputs change. Components then subscribe to small, stable slices of state instead of recalculating or reacting to unrelated updates.',
  'How do you model loading and error state?': 'Model request state explicitly—such as idle, loading, success with data, and error with recoverable details—rather than using a single boolean. Keep stale data and refresh state separate when the UX needs them.',
  'What is entity state normalization?': 'Normalization stores each entity once by ID and represents relationships with IDs. It prevents inconsistent duplicates and makes updates to a single entity efficient, especially for lists shared across views.',
  'How do signals fit state management?': 'Signals provide synchronous reactive state and computed derivations with clear dependency tracking. They work well for local or feature stores; effects should bridge to imperative work, not silently become the main state-update mechanism.',
  'When should you avoid a global store?': 'Avoid a global store for short-lived local UI state, isolated forms, or state with one obvious component owner. A global store can make simple features harder to trace and couples unrelated parts of the app.',
  'What are Angular signals?': 'Signals are reactive containers for synchronous state. Angular tracks where a signal is read and can update dependent templates or computed values when it changes.',
  'What is the difference between `signal`, `computed`, and `effect`?': 'A writable `signal` stores state, `computed` derives a cached value from signals, and `effect` runs imperative side work when its dependencies change. Keep derived business values in computed signals and reserve effects for integration.',
  'How do signals work with OnPush?': 'When an OnPush template reads a signal, Angular records that dependency and marks the component for checking when the signal changes. This gives targeted updates without manually calling change detection for ordinary signal state.',
  'How do you update a writable signal?': 'Use `set` to replace the value or `update` to calculate the next value from the current one. For object or array state, return a new value instead of mutating a nested value invisibly.',
  'What is a computed signal?': 'A computed signal derives a value from other signals and recalculates lazily only when a dependency changes. Its derivation should be pure and should not write state or perform external effects.',
  'When should you use an effect?': 'Use an effect to synchronize reactive state with an imperative boundary such as logging, local storage, a chart library, or a DOM API. Do not use it to derive application state that belongs in `computed`.',
  'How do signals interoperate with RxJS?': 'Use Angular interop helpers to convert an Observable to a signal or a signal to an Observable at a boundary. Preserve the Observable’s error, completion, and subscription lifetime semantics rather than assuming a signal replaces every stream.',
  'What are signal inputs?': 'Signal inputs expose a component input as a signal, so derived values can react to input changes without lifecycle-hook bookkeeping. They still follow the same parent-to-child ownership rule as ordinary inputs.',
  'How do you avoid effects that write state?': 'Model the desired value as a computed signal or update state in an explicit event or async completion handler. Effects that read and write signals can create hidden loops and make update order difficult to reason about.',
  'When should you use a signal instead of an Observable?': 'Use a signal for synchronous state read by templates and an Observable for asynchronous streams, cancellation, composition, or multiple values over time. They interoperate, so choose the abstraction that matches the boundary rather than forcing one everywhere.',
  'How does Angular change detection work?': 'Angular checks bindings to determine whether rendered output needs updating after an event, async notification, signal change, or explicit trigger. Keep templates cheap and state updates predictable so a check does not do unnecessary work.',
  'What does `OnPush` change detection do?': 'OnPush limits checks to meaningful triggers such as changed input references, events in the component, signals it reads, async-pipe emissions, or explicit marking. It rewards immutable data flow and component boundaries.',
  'How do you track list items efficiently?': 'Track each repeated item with a stable unique ID so Angular can preserve existing DOM nodes when items are reordered or updated. Do not track by index when the list can change order or receive insertions.',
  'How do you avoid expensive template expressions?': 'Keep templates declarative and cheap: precompute or use computed signals, pure pipes, or selectors for derived values, and avoid calling allocating or expensive methods during every change-detection pass.',
  'How do pure pipes improve performance?': 'A pure pipe runs only when an input reference or primitive value changes, so it can avoid repeated deterministic transformations. It must not depend on hidden mutable state, or its output can become stale.',
  'How do you lazy load a feature?': 'Configure a route with `loadComponent` or `loadChildren` so its code is fetched on navigation. Add loading and error UI, and split at user-meaningful route boundaries rather than creating tiny chunks everywhere.',
  'How do you profile an Angular app?': 'Measure the slow interaction with browser performance tools and Angular-aware profiling, inspect scripting, change detection, rendering, and network work, then verify an improvement with representative production metrics.',
  'What is zone.js and what role does it play?': 'Zone.js patches asynchronous browser APIs so Angular knows when work may require change detection. Modern Angular can also use zoneless patterns with explicit reactive signals and scheduling, reducing some patching overhead.',
  'How do you reduce bundle size?': 'Lazy-load features, remove unused dependencies, use production builds and modern targets, import only required library pieces, optimize assets, and inspect bundle analysis before making assumptions about the largest cost.',
  'How do you prevent memory leaks in Angular?': 'Let Angular-managed template subscriptions clean up automatically, use `takeUntilDestroyed` for manual streams, clear timers and listeners in destruction, and avoid feature services retaining components or unbounded data.',
  'How do you structure a large Angular application?': 'Organize code by feature and keep each feature’s UI, state, data access, and routes close together. Put only genuinely reusable primitives in shared libraries and keep platform-wide configuration in a small core layer.',
  'What is feature-based architecture?': 'Feature-based architecture groups related components, services, models, and tests around a user capability rather than technical file type. It makes ownership, deletion, and independent delivery clearer as the application grows.',
  'How do you design a shared module or shared library?': 'Expose a small, stable public API of reusable UI primitives, utilities, or data contracts, and avoid importing feature-specific code into it. Shared code should have clear consumers and tests because changes affect many features.',
  'How do you separate smart and presentational components?': 'Smart components coordinate data, state, and routing; presentational components receive inputs and emit events while focusing on rendering. This is a guideline, not a rigid rule: keep a component’s dependencies proportional to its responsibility.',
  'How do you organize core services?': 'Place application-wide concerns such as authentication, configuration, logging, error handling, and HTTP infrastructure in a small core layer. Do not let it become a catch-all for feature business logic.',
  'How do you create reusable form controls?': 'Implement the ControlValueAccessor contract when a custom component should behave like a native Angular form control, expose validation and disabled state correctly, and provide an accessible name and errors. Keep the control’s API focused.',
  'How do you define API models and mappers?': 'Treat API DTOs as transport contracts, validate or normalize them at the boundary, and map them to domain or view models when their shape or semantics differ. This prevents backend changes from leaking through every component.',
  'How do you handle application-wide errors?': 'Handle expected errors at the feature boundary with recovery UI, and send unexpected errors to a centralized ErrorHandler and monitoring system with useful context. Avoid one global handler that hides every failure from users.',
  'How do you test Angular components and services?': 'Test components through inputs, user-visible DOM, and outputs; test services through their public methods with controlled dependencies. Use integration tests for critical routing and HTTP flows, and avoid asserting framework implementation details.',
  'How do you migrate an Angular application safely?': 'Upgrade incrementally, read the migration guide, run automated migrations, keep tests and builds green, and isolate deprecated patterns behind boundaries. Ship small changes and monitor production behavior rather than combining a framework upgrade with unrelated refactors.',
  'What are the Rules of Hooks?': 'Call Hooks only at the top level of a React function component or custom Hook, and call them in the same order on every render. React relies on that stable order to associate each Hook call with its stored state.',
  'Explain the `useState` Hook.': '`useState` adds local state to a function component and returns the current value plus a setter. Use the functional setter form when the next value depends on the previous value, and replace objects or arrays instead of mutating them.',
  'Explain the `useEffect` Hook.': '`useEffect` synchronizes a component with something outside React, such as a subscription, timer, or network request. Its cleanup runs before a dependency change and on unmount, so setup and cleanup must be safe to repeat.',
  'What is the difference between `useEffect` and `useLayoutEffect`?': '`useEffect` runs after the browser paints, while `useLayoutEffect` runs after DOM changes but before paint. Use layout effects only when reading layout or synchronously preventing visual flicker; they can delay rendering.',
  'When should you use `useMemo`?': 'Use `useMemo` after profiling shows a calculation is expensive or a stable reference prevents meaningful child work. It is a performance hint, not a correctness tool, and its dependencies must include every value used by the calculation.',
  'When should you use `useCallback`?': 'Use `useCallback` when a stable function identity matters, such as a memoized child, an effect dependency, or subscription API. Do not wrap every handler; it adds complexity and does not prevent a component from rendering.',
  'What is `useRef` used for?': 'useRef stores a mutable value that persists across renders without causing a re-render, commonly for DOM nodes, timer IDs, or the latest value used by an external callback. It should not replace state that affects visible UI.',
  'How do you build a custom Hook?': 'Extract reusable stateful logic into a function named with `use`, compose other Hooks inside it, and return a small documented API. A custom Hook shares logic, not state: each component call gets its own Hook state.',
  'How do stale closures happen in Hooks?': 'A callback or effect closes over values from the render that created it, so it can use an outdated value when dependencies are omitted or work runs later. Include dependencies, use functional updates, or store a deliberate latest value in a ref.',
  'How do you avoid an infinite effect loop?': 'Do not update state in an effect unless the update depends on an external change and converges; stabilize object, function, or array dependencies when needed. Often the right fix is deriving the value during render instead of storing it and syncing with an effect.',
  'Where should state live in a React application?': 'Keep state in the lowest common owner that needs to coordinate it. Local component state is the default; lift it only when siblings need the same source of truth, and use a shared store only when ownership crosses meaningful feature boundaries.',
  'What is lifting state up?': 'Lifting state up moves shared state to the nearest common parent and passes values down with props while children notify changes with callbacks. It prevents siblings from maintaining inconsistent copies of the same data.',
  'What is derived state and why should you avoid storing it?': 'Derived state can be calculated from props or existing state, such as a filtered list or total. Storing it creates multiple sources of truth that can drift, so calculate it during render or memoize it only when measurement justifies it.',
  'How do you update nested state immutably?': 'Create new objects or arrays along the path that changes while reusing untouched branches. This preserves reference equality for unchanged data and lets React and memoized selectors detect what actually changed.',
  'What is state colocation?': 'State colocation keeps state near the component that owns and uses it instead of putting it in a global store by default. It reduces unnecessary coupling and limits how much of the tree updates when that state changes.',
  'When is Context appropriate for state?': 'Context is appropriate for stable cross-cutting values such as theme, locale, authenticated identity, or a service dependency. Split frequently changing values or use a store because every consuming component re-renders when a provider value changes.',
  'When should you use a client-state library?': 'Use a client-state library when multiple independent features need coordinated shared state, derived data, actions, persistence, or debugging tools. Do not use one only to avoid passing a few props through a small tree.',
  'How do you model async request state?': 'Model at least pending, success data, and failure explicitly, and decide how stale data, retries, cancellation, and concurrent requests behave. A server-state library can centralize caching and invalidation for remote data.',
  'What is optimistic UI?': 'Optimistic UI updates the interface before a server mutation completes, then confirms or rolls back based on the response. It feels fast but requires a rollback strategy, idempotent operations, and careful handling of concurrent changes.',
  'How do you prevent race conditions in state updates?': 'Use functional state updates for queued local changes, cancel or ignore obsolete requests with AbortController or request IDs, and ensure only the response for the current input may update state. Define conflict behavior rather than relying on response order.',
  'How do you diagnose unnecessary React re-renders?': 'Use the React DevTools Profiler to identify what rendered, how long it took, and why it rendered. Then inspect state placement, changing prop identities, and context updates before adding memoization.',
  'What does `React.memo` do?': 'React.memo can skip rendering a component when its props are shallowly equal to the previous props. It helps only when parent renders are frequent and the skipped component work is meaningful; changing object or function props defeats the default comparison.',
  'What are the limits of `useMemo` and `useCallback`?': 'They retain values and add dependency bookkeeping, so they can increase memory and complexity. They do not stop parent renders or make an expensive calculation cheap; use them only where profiling shows stable identity or cached work matters.',
  'How do you virtualize a large list?': 'Render only the rows visible in the viewport plus a small overscan buffer, and represent the rest with spacer size. Use a virtualization library when rows have variable height or accessibility and scrolling details would otherwise be error-prone.',
  'What is code splitting with `lazy` and `Suspense`?': 'React.lazy loads a component module on demand, while Suspense renders a fallback until it is available. Split at route or optional-feature boundaries and provide loading and error UI that does not hide critical content.',
  'How do you optimize Context consumers?': 'Split unrelated context values, keep provider values stable where practical, and move high-frequency state into a focused store or subscription mechanism. A component re-renders whenever a context value it reads changes.',
  'How do stable keys improve rendering?': 'Stable keys let React match list items across renders, preserving the right DOM, component state, and focus when data is inserted, deleted, or reordered. Keys must identify the item, not its current position.',
  'What is concurrent rendering?': 'Concurrent rendering lets React prepare a render interruptibly and prioritize urgent updates such as input over non-urgent work. Rendering may be restarted, so render functions must be pure and effects remain the place for external side effects.',
  'How do you optimize expensive calculations?': 'First measure the cost, then reduce the amount of work, move it off the critical interaction path, cache results for repeated inputs, or precompute at a boundary. Memoization is usually secondary to choosing a better algorithm or data shape.',
  'How do you profile a React app?': 'Record interactions with the React DevTools Profiler and browser performance panel, inspect commit duration and component causes, then validate changes with user-facing metrics. Test representative data sizes and devices, not only a fast development machine.',
  'What is client-side routing?': 'Client-side routing maps the browser location to UI without a full document navigation, while preserving browser history and shareable URLs. The server must still serve the application entry point for direct route visits.',
  'How do nested routes work in React Router?': 'Nested route definitions render parent layouts around matching child routes. The parent uses an Outlet to choose where the active child appears, which keeps shared navigation and data boundaries close to the feature hierarchy.',
  'What is an outlet?': 'An Outlet is the placeholder where the element for the currently matched child route renders. It enables nested layouts without manually passing route content through each parent component.',
  'How do route parameters work?': 'Dynamic path segments such as `projects/:projectId` become route parameters. Treat them as untrusted strings, validate them before data access, and show a controlled not-found or error state for invalid resources.',
  'How do you protect a route?': 'Use a route-level loader, wrapper, or redirect to keep unauthorized users out of protected UI and send them to sign-in or an access-denied page. This is only a UX layer; the API must enforce authorization independently.',
  'How do you navigate programmatically?': 'Use the router navigation API after an explicit user action or completed workflow, and preserve useful history behavior by choosing push or replace deliberately. Prefer links for ordinary navigation because they retain browser semantics.',
  'What are loaders and actions?': 'Loaders fetch route data before rendering and actions handle route-scoped mutations such as form submissions. They centralize pending, error, and revalidation behavior at the routing boundary.',
  'How do you handle a 404 route?': 'Add a catch-all route that renders a useful not-found page and preserve navigation options. For a missing server resource, return or throw a route-level not-found response rather than silently showing an empty success view.',
  'How do you preserve query parameters?': 'Read and update query parameters through the router’s search-param API, merge existing values intentionally, and treat them as URL input that needs parsing. Preserve only parameters that remain meaningful for the destination.',
  'How do you split route bundles?': 'Lazy-load route elements and their route-specific dependencies, then place Suspense and error boundaries around the navigation experience. Split at user-visible routes so the initial route does not download features users may never visit.',
  'What problem does the Context API solve?': 'Context lets a value be available to a subtree without manually passing it through every intermediate component. It is useful for stable cross-cutting concerns such as theme, locale, identity, or service dependencies.',
  'How do you create and consume Context?': 'Create a context with a safe default, wrap consumers in a provider with the intended value, and read it with `useContext`. Keep the provider close to the feature that owns the value when it is not truly application-wide.',
  'How does Context affect re-renders?': 'When a provider value changes by reference, React re-renders every descendant consumer of that context. Context bypasses prop drilling, not rendering cost, so avoid placing frequently changing unrelated state in one provider.',
  'How do you avoid Context performance problems?': 'Split contexts by update frequency and responsibility, memoize provider values when their identity would otherwise change unnecessarily, and use a dedicated store for high-frequency or selector-based state. Measure before optimizing.',
  'When should Context not replace a state manager?': 'Do not use Context as a full state manager when many features need coordinated updates, derived selectors, persistence, devtools, or independent subscriptions. Context is a transport mechanism, not an opinionated state-transition system.',
  'How do you test a component that consumes Context?': 'Render the component inside the real provider or a small test provider that supplies controlled values. Test visible behavior for each meaningful context state instead of mocking `useContext` implementation details.',
  'How do you compose multiple providers?': 'Nest providers in a stable application or feature shell, or create a small composed provider component when the grouping is meaningful. Keep unrelated providers separate enough that ownership and test setup remain clear.',
  'How do you give Context a safe default?': 'Use a default that makes accidental use outside a provider obvious, such as `null` plus a custom Hook that throws a clear error, or a genuine safe fallback for optional context. Avoid defaults that silently hide a missing provider.',
  'How do you update Context from a child?': 'Provide an explicit callback, dispatch function, or store API as part of the context value and call it from the child. Keep state ownership in the provider rather than letting consumers mutate shared objects directly.',
  'How do you split a large Context?': 'Separate values by domain and update frequency—for example auth identity, theme, and live editor state—and move high-churn state to a selector-capable store. Each consumer should subscribe only to what it needs.',
  'What are error boundaries?': 'Error boundaries catch rendering errors in their descendant tree and render a fallback UI. They do not catch event-handler, async, or server-rendering errors, which need their own handling.',
  'What are portals?': 'Portals render children into a different DOM container while keeping them in the same React tree. They are useful for modals and overlays; manage focus and accessibility because visual DOM position changes.',
  'What is a render prop?': 'A render prop is a function prop a component calls to let the caller control rendering while the component shares behavior or state. Custom Hooks usually provide the same logic-sharing benefit with less nesting today.',
  'What is a higher-order component?': 'A higher-order component takes a component and returns an enhanced component. It was a common logic-reuse pattern; custom Hooks are usually simpler for function components, but HOCs remain useful for cross-cutting wrappers.',
  'What are compound components?': 'Compound components share implicit state through context while exposing coordinated child components, such as Tabs and TabPanel. They give callers flexible markup while the parent manages interaction rules.',
  'What is `forwardRef`?': 'forwardRef lets a component pass a ref it receives to a descendant DOM node or imperative handle. Use it sparingly for focus, measurement, or integration; prefer declarative props for ordinary behavior.',
  'What is `useImperativeHandle`?': 'useImperativeHandle customizes the value exposed through a ref, allowing a component to offer a narrow imperative API such as focus or reset. Keep that API small so consumers do not depend on internal structure.',
  'What is hydration?': 'Hydration attaches React behavior to HTML rendered on the server. The client render must match the server output; mismatches can cause warnings, discarded markup, or subtle UI bugs.',
  'What is server-side rendering?': 'Server-side rendering produces HTML on the server for an initial request, improving first content and SEO in suitable cases. The client still downloads JavaScript to hydrate interactive components.',
  'What are React Server Components?': 'React Server Components render on the server and send a component payload instead of their JavaScript to the browser. They can access server-only resources but cannot use client hooks, browser APIs, or event handlers.',
  'How do you organize a scalable React project?': 'Organize by feature, keep UI, state, API access, and tests near the capability they serve, and expose small shared libraries for genuine reuse. Clear ownership is more valuable than a universal folder convention.',
  'How do you separate presentational and container concerns?': 'Keep data fetching, state coordination, and side effects at a boundary, while presentational components receive explicit props and emit events. Apply the split where it improves reuse and testing, not as a rigid component taxonomy.',
  'How do you design reusable components?': 'Define a small semantic API, accessible defaults, and clear controlled or uncontrolled behavior. Compose slots or children for variation and avoid props that encode every possible layout or business rule.',
  'How do you handle feature flags?': 'Evaluate flags at a controlled boundary, expose a typed capability to features, and define owners, rollout rules, and removal dates. Test both paths and avoid leaving expired flags as permanent hidden branches.',
  'How do you define API boundaries in React?': 'Centralize transport, authentication, parsing, errors, and caching behind feature-oriented hooks or clients. Components should consume domain data and actions, not construct URLs or interpret raw HTTP responses.',
  'How do you make React code testable?': 'Keep rendering deterministic, inject or mock external boundaries, test user-visible behavior, and isolate pure domain logic from framework code. Avoid tests coupled to component internals or implementation-specific state.',
  'How do you manage forms at scale?': 'Use a consistent validation schema, field abstraction, accessibility pattern, and submit lifecycle. Keep server errors and async validation explicit, and choose a form library only when it reduces repeated complexity.',
  'How do you handle global errors?': 'Use error boundaries for render failures, route-level handling for navigation and data failures, and centralized logging with useful context. Show a recovery path and never rely on one boundary to catch async or event errors.',
  'How do you design a design-system component?': 'Start with semantics, accessibility, and a stable interaction contract, then expose tokens and composable structure for visual variation. Document states, keyboard behavior, and breaking-change policy like a public API.',
  'How do you migrate a legacy React application?': 'Stabilize behavior with tests, define target boundaries, migrate incrementally by route or feature, and keep old and new systems interoperable during transition. Measure regressions and avoid combining migration with unnecessary redesign.',
  'Build a searchable, sortable React list.': 'Keep the raw items, query, and sort choice as state; derive the filtered and sorted list during render, preserving stable item keys. Debounce only expensive remote search, and make sort controls keyboard accessible.',
  'Build a debounced search input.': 'Use controlled input state for immediate feedback and debounce the side effect that fetches or filters expensive results. Cancel or ignore obsolete requests so an older result cannot replace the current query.',
  'Build a reusable modal component.': 'Render the dialog in a portal, move focus into it, trap Tab navigation, close on Escape when appropriate, restore trigger focus, and expose an accessible name. Treat background content as inert while the dialog is open.',
  'Build a paginated data table.': 'Model page, page size, loading, data, and error state explicitly, derive request parameters from them, and provide accessible table semantics and pagination controls. Reset or clamp the page when filters change the result set.',
  'Build a multi-step form.': 'Keep one validated form model and track the current step separately, validating the fields needed to advance while preserving entered values. Support back navigation, error focus, progress context, and final server-side validation.',
  'Build a toast notification system.': 'Store a bounded queue of notifications with stable IDs, severity, timeout, and optional action; render them in an accessible live region and allow manual dismissal. Avoid using toasts for critical information that must remain visible.',
  'Build a custom `useFetch` Hook.': 'Expose data, loading, error, and a refetch action; cancel obsolete requests with AbortController and ignore responses after cleanup. For shared cached server data, prefer a mature query library over reimplementing invalidation.',
  'Build a virtualized list.': 'Render only visible rows plus overscan, calculate their offset within a full-height scroll area, and use stable keys. Handle variable row height, focus, and screen-reader access deliberately or use a well-tested virtualization library.',
  'Build an accessible tabs component.': 'Use tab, tablist, and tabpanel roles with linked IDs; support arrow-key navigation, Home and End, visible focus, and the chosen activation model. Keep the selected tab state controlled by the parent or a clear compound-component boundary.',
  'Build an optimistic todo list.': 'Apply the local change with a temporary ID or pending state, send an idempotent mutation, reconcile with the server result, and roll back or show a recoverable error on failure. Guard against concurrent edits and stale responses.',
  'How do you approach a frontend system design interview?': 'Start by clarifying users, core journeys, constraints, and scale; propose the smallest end-to-end architecture; then deepen the areas most likely to fail, such as data, performance, accessibility, reliability, and delivery. State trade-offs as you make them.',
  'What functional requirements should you clarify?': 'Clarify the users, primary flows, data shown and changed, real-time needs, roles and permissions, offline behavior, error states, and success criteria. Separate must-have behavior from nice-to-have scope before choosing architecture.',
  'What non-functional requirements matter for frontend systems?': 'Discuss performance targets, availability, accessibility, security, privacy, localization, observability, compatibility, and team delivery constraints. Tie each requirement to a measurable user or business outcome.',
  'How do you estimate scale for a UI?': 'Estimate active users, concurrent sessions, page views, request rates, payload sizes, update frequency, device and network mix, and growth horizon. Use rough order-of-magnitude math to identify the bottleneck worth designing for.',
  'How do you identify critical user journeys?': 'Find the paths that create user value or business risk, such as discovery, checkout, editing, or recovery from failure. Rank them by frequency, impact, and fragility, then optimize and test those journeys first.',
  'How do you define success metrics?': 'Pair product measures such as completion rate or conversion with experience measures such as Core Web Vitals, error rate, and task time. Define a baseline, target, owner, and instrumentation before implementation.',
  'How do you choose an architecture?': 'Choose the simplest architecture that meets clarified constraints, team capabilities, and expected change rate. Compare alternatives by data ownership, deployment independence, performance, failure isolation, and operational cost—not novelty.',
  'How do you communicate trade-offs?': 'Name the options, the criterion that matters most, what you gain and give up, and the condition that would make you revisit the decision. Concrete trade-offs demonstrate judgment better than claiming an approach is universally best.',
  'How do you handle progressive delivery?': 'Use feature flags, staged rollouts, monitoring, and a rollback plan to expose a change gradually. Start with internal or low-risk users, define success and stop conditions, and remove the flag once the rollout is complete.',
  'How do you prioritize a first version?': 'Ship the smallest coherent workflow that proves user value and leaves a safe extension path. Defer scale, personalization, and edge features only after identifying the non-negotiable security, accessibility, and reliability baseline.',
  'How would you design a fast e-commerce product page?': 'Render product identity, price, availability, and the primary purchase action first from a cached server response; optimize the hero image and fonts; defer reviews and recommendations; and instrument conversion, LCP, INP, and errors.',
  'How do you optimize initial page load?': 'Deliver minimal critical HTML and CSS, reduce render-blocking work, serve cached assets from a CDN, prioritize the LCP resource, and defer noncritical JavaScript. Measure real-user loading metrics before and after changes.',
  'How do you design image delivery at scale?': 'Store originals once, generate responsive sizes and modern formats at an image CDN, select candidates with `srcset`, reserve layout space, and prioritize only images visible in the critical path.',
  'How do you implement code splitting?': 'Split by route and optional feature boundaries with dynamic imports, preload likely next chunks after critical work, and provide loading and error states. Monitor chunk size and request waterfalls so splitting does not create new latency.',
  'How do you prevent layout shift?': 'Reserve dimensions for images, embeds, ads, and async content; avoid inserting content above existing content; and use transform animations. Track CLS in field data because third-party and font behavior often causes real shifts.',
  'How do you design list virtualization?': 'Represent the full list height while rendering only visible rows and a small overscan range. Use stable item identity, handle measurement for variable sizes, and ensure keyboard focus and assistive-technology access remain usable.',
  'How do you measure Core Web Vitals?': 'Collect field measurements with the Web Vitals API or RUM, segment by route, device, connection, and release, and pair them with lab profiles to diagnose causes. Use the 75th percentile of real user experiences to prioritize work.',
  'How do you cache static assets?': 'Fingerprint immutable assets in filenames and serve them with long-lived immutable cache headers through a CDN; serve HTML with a shorter policy so deployments can point users to the new asset graph.',
  'How do you handle low-end devices?': 'Design for constrained CPU, memory, and network: ship less JavaScript, avoid expensive hydration and animation, use progressive enhancement, and test on representative devices rather than only desktop throttling.',
  'How do you build a performance budget?': 'Set route-specific limits for user metrics and resource cost, enforce them in CI, monitor regressions in production, and assign ownership. Budgets should state both a threshold and the action when a release exceeds it.',
  'How would you design typeahead search?': 'Debounce input, cancel stale requests, cache recent queries, show loading and empty states, and rank results server-side when the dataset is large. Define keyboard navigation, accessibility, and behavior for slow or failed responses.',
  'How do you design a client-side cache?': 'Key entries by all inputs that affect the result, store freshness metadata, deduplicate in-flight requests, and define invalidation after mutations. Keep cache scope and eviction bounded so data does not become stale or consume unbounded memory.',
  'How do you handle stale data?': 'Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless.',
  'How do you design infinite scrolling?': 'Use cursor-based pagination, request the next page near the viewport boundary, prevent duplicate concurrent loads, preserve scroll position, and offer a reachable footer or alternative pagination for accessibility and control.',
  'How do you handle optimistic updates?': 'Apply a reversible local update, associate it with the mutation request, reconcile it with the server response, and roll back or surface a conflict on failure. Model concurrent edits and idempotency before claiming the interaction is safe.',
  'How do you manage pagination?': 'Use stable ordering and a cursor for changing datasets, keep page state in the URL when it should be shareable, reset pages after filter changes, and report total counts only when their cost and accuracy justify it.',
  'How do you prevent duplicate network requests?': 'Deduplicate requests with a shared cache key or in-flight promise, cancel obsolete work on input changes, and make server mutations idempotent. Avoid relying only on UI disabling because retries and multiple tabs still happen.',
  'How do you design offline support?': 'Identify which reads and writes are safe offline, cache app shell and selected data with a service worker, queue durable mutations with conflict rules, and communicate connectivity and sync status clearly to users.',
  'How do you handle API errors?': 'Classify errors into validation, authentication, authorization, not-found, rate-limit, transient, and unexpected failures; show an actionable recovery where possible; and log enough context for diagnosis without leaking internals.',
  'How do you secure client data?': 'Minimize sensitive data in the client, enforce authorization on the server, protect transport with HTTPS, avoid long-lived browser-readable secrets, and consider caching, screenshots, logs, and shared-device exposure in the threat model.',
  'How would you design a notification center?': 'Fetch an initial paginated notification list, receive incremental updates through a push channel, deduplicate by ID, track read state with idempotent mutations, and degrade gracefully to polling when real-time delivery is unavailable.',
  'How do WebSockets compare with SSE?': 'WebSockets provide bidirectional persistent messaging; Server-Sent Events provide server-to-client streaming over HTTP with simpler reconnect behavior. Choose SSE for one-way updates and WebSockets when the client must send frequent real-time messages.',
  'How do you design a collaborative editor?': 'Separate document model, presence, transport, persistence, and conflict resolution. Use operational transforms or CRDTs when concurrent offline edits must merge, and define permissions, ordering, snapshots, and recovery before optimizing the UI.',
  'How do you reconcile real-time updates?': 'Apply updates using version, sequence, or timestamp rules, ignore duplicates, and refetch or resync when a gap is detected. Keep local optimistic changes distinguishable until the server confirms their canonical result.',
  'How do you handle reconnects?': 'Use exponential backoff with jitter, resume from the last acknowledged cursor where possible, reauthenticate on reconnect, and show connection state to users. Avoid reconnect storms after a shared outage.',
  'How do you order real-time events?': 'Use a server-issued monotonic sequence or per-entity version, buffer only briefly when ordering can be recovered, and request a snapshot when events are missing. Arrival order alone is not a reliable ordering guarantee.',
  'How do you prevent notification overload?': 'Group related events, prioritize urgent notifications, let users control channels and frequency, and cap noisy streams. Measure action and dismissal rates so the system optimizes attention rather than raw event delivery.',
  'How do you design presence indicators?': 'Treat presence as approximate and ephemeral: send heartbeats, expire inactive clients, scope visibility by permission, and avoid implying exact availability. Update UI at a bounded rate to prevent churn.',
  'How do you handle conflicts?': 'Choose a domain-specific policy such as last-write-wins, field-level merge, user resolution, or CRDT merge; surface meaningful conflicts to users; and preserve enough history to recover. Do not silently discard valuable concurrent edits.',
  'How do you observe real-time reliability?': 'Measure connection success, reconnect rate, message lag, gap or resync rate, delivery failures, and client errors by release and region. Correlate client telemetry with server queue and connection metrics to find the failing boundary.',
  'How would you design a scalable design system?': 'Build accessible primitives with stable APIs and design tokens, document usage and ownership, version releases, and provide migration support. Scale contribution through review criteria and visual regression testing, not by centralizing every decision.',
  'How do you organize a micro-frontend architecture?': 'Split only at stable team and domain boundaries, define shared runtime contracts for routing, auth, design tokens, and observability, and preserve a coherent user experience. A modular monolith is often simpler until independent deployment is truly needed.',
  'How do you manage feature flags?': 'Give every flag an owner, purpose, targeting rule, expiry date, and cleanup task; evaluate it consistently and monitor both variants. Flags support delivery safety but create complexity if they are not removed.',
  'How do you define frontend API boundaries?': 'Expose domain-oriented hooks or services that hide transport details, validate external data, normalize errors, and own caching. Components should not know endpoint URLs or response quirks.',
  'How do you make a frontend resilient to backend changes?': 'Use backward-compatible contracts, runtime validation at the boundary, tolerant handling of unknown fields, controlled fallbacks for missing optional data, and contract testing. Do not assume a typed client guarantees a compatible server response.',
  'How do you plan for accessibility?': 'Make semantic structure, keyboard interaction, focus behavior, contrast, error handling, and assistive-technology testing acceptance criteria from the first design. Test critical flows manually and automatically before release.',
  'How do you plan observability?': 'Instrument key journeys with performance, error, and product events; define correlation IDs and privacy rules; and build dashboards and alerts around user impact. Observability should answer who is affected, where, and since which release.',
  'How do you handle authentication state?': 'Keep the server as the source of truth, initialize identity safely, handle expiration and refresh deliberately, clear protected data on logout, and gate UI as a convenience while enforcing access on APIs.',
  'How do you deploy safely?': 'Use immutable artifacts, automated checks, staged rollout, health and user-metric monitoring, and a tested rollback path. Keep configuration separate from builds and make database or API compatibility safe across versions.',
  'How do you evolve a legacy frontend?': 'Identify seams, add tests around critical behavior, migrate feature by feature behind stable interfaces, remove old paths after verification, and measure user and performance regressions throughout the transition.',
  'Tell me about a time you led a project.': 'Use STAR to explain the outcome, scope, stakeholders, plan, and risks, then focus on how you created alignment and removed blockers. Quantify the result and share what you learned about leading through uncertainty.',
  'How do you mentor others?': 'Describe how you set goals with the person, observe their work, give timely specific feedback, create stretch opportunities, and gradually transfer ownership. Good mentoring develops judgment rather than making someone dependent on you.',
  'Describe a time you delegated work.': 'Explain how you chose the owner based on development goals and capability, clarified outcome and decision rights, provided context and checkpoints, then let them own execution. Include how you stayed accountable without micromanaging.',
  'Tell me about a time you resolved a team conflict.': 'Frame the conflict around work and constraints, listen to each perspective, establish shared facts and decision criteria, facilitate a decision, and follow up on the relationship. Avoid presenting yourself as the hero over unreasonable teammates.',
  'How do you create alignment?': 'Create alignment by sharing context, defining the decision and owner, inviting relevant dissent early, documenting the outcome, and making next steps explicit. Alignment is understanding and commitment, not unanimous preference.',
  'Tell me about a time you drove change.': 'Describe the problem evidence, the coalition you built, a pilot or incremental rollout, and how you handled resistance constructively. Close with adoption and measurable impact, not just the idea you proposed.',
  'How do you make decisions with incomplete information?': 'State the reversible and irreversible parts, gather enough evidence for the cost of delay, consult the right experts, choose a direction, and define signals that would trigger a revisit. Do not wait for certainty when learning is possible.',
  'Tell me about a time you raised the quality bar.': 'Explain the gap you observed, the concrete standard or guardrail you introduced, how you made adoption easy, and the measurable improvement. Emphasize enabling the team rather than personally policing quality.',
  'How do you handle an underperforming teammate?': 'Address it early and privately with specific observations and expectations, understand obstacles, agree on support and milestones, document progress, and involve the manager or formal process when needed. Be fair and direct.',
  'What is your leadership style?': 'Describe adaptable behaviors rather than a label: set clear outcomes, share context, invite challenge, coach people according to experience, and hold yourself accountable. Support the answer with a concrete example of the style in action.',
  'What kind of culture helps you do your best work?': 'Describe positive conditions such as candid feedback, clear ownership, respectful debate, learning, and follow-through, then connect them to how you contribute. Avoid using the answer to criticize former employers.',
  'How do you handle pressure?': 'Explain how you prioritize, communicate risks early, break work into controllable steps, ask for help when needed, and protect recovery. Use an example that shows calm decision-making rather than claiming pressure never affects you.',
  'How do you maintain work-life balance?': 'Describe sustainable habits: clarify priorities, set expectations, protect focus and recovery time, and raise capacity risks before they become emergencies. Show accountability for results without normalizing chronic overwork.',
  'What feedback style works best for you?': 'Say you value timely, specific, actionable feedback delivered with context, and explain how you seek it regularly. Mention that you adapt to the relationship while preferring directness and a clear next step.',
  'What does inclusion mean to you?': 'Inclusion means designing team practices so people with different backgrounds, communication styles, and circumstances can contribute and influence decisions. Give an example such as sharing context asynchronously, rotating facilitation, or crediting ideas fairly.',
  'How do you respond to failure?': 'Acknowledge the impact, stabilize the situation, communicate honestly, analyze contributing factors without blame, and change the system or behavior that allowed it. Share what you learned and how you verified the improvement.',
  'What would your manager say about you?': 'Choose a few traits supported by observable behavior and examples, such as reliable delivery, clear communication, or constructive challenge. Keep it credible by naming an area you continue to develop as well.',
  'What are you looking for in your next manager?': 'Describe the management behaviors that help you succeed—clear expectations, useful feedback, context, trust, and support for growth—while showing that you take responsibility for your own performance and communication.',
  'What questions do you have for us?': 'Ask questions that reveal the role’s success measures, team decision-making, current technical challenges, customer context, and growth opportunities. Use the answers to evaluate fit, not simply to demonstrate interest.',
  'How do you evaluate a job offer?': 'Evaluate the work, team, manager, growth, mission, compensation, risk, and practical constraints against your priorities. Gather evidence from multiple conversations and decide from the whole opportunity rather than one attractive feature.',
  'What are microservices?': 'Microservices are independently deployable services organized around business capabilities, each owning its runtime and usually its data. They trade simple deployment boundaries for distributed-system complexity.',
  'When should you choose microservices over a monolith?': 'Choose them when stable domain and team boundaries, independent scaling, or deployment cadence justify operational cost. Start with a modular monolith when those boundaries are uncertain or the team cannot support distributed operations.',
  'How do services communicate?': 'Use synchronous APIs for immediate request-response needs and asynchronous events or queues for decoupled workflows. Define contracts, timeouts, retries, idempotency, ownership, and observability for either choice.',
  'How do you define service boundaries?': 'Define boundaries around business capabilities, data ownership, change cadence, and team responsibility—not technical layers. A service should own its invariants and avoid sharing its database with another service.',
  'How do you handle distributed transactions?': 'Avoid cross-service ACID transactions; use local transactions plus durable events and a saga or compensation workflow. Design operations to be idempotent and provide reconciliation for failures and partial completion.',
  'What is the saga pattern?': 'A saga coordinates a multi-service business process as a sequence of local transactions with compensating actions when a later step fails. It can be orchestrated centrally or choreographed through events, each with different visibility and coupling trade-offs.',
  'How do you deploy microservices safely?': 'Use immutable artifacts, independent CI/CD, backward-compatible contracts, staged rollout, health checks, and rollback. Deploy producers before consumers when schemas evolve and monitor both technical and business outcomes.',
  'How do you observe a microservices system?': 'Use structured logs, metrics, distributed traces, correlation IDs, service-level objectives, and dependency dashboards. Observability must let an operator follow one user request across services and identify the owning failure.',
  'How do you manage shared data?': 'Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services.',
  'What are common microservices failure modes?': 'Common failures include network timeouts, retries amplifying load, duplicate messages, schema drift, cascading dependency outages, inconsistent data, and poor traceability. Mitigate them with timeouts, backoff, idempotency, isolation, and operational discipline.',
  'What is a distributed system?': 'A distributed system coordinates independent computers over a network to provide one service. It must tolerate message delay, loss, duplication, partial failure, and independently changing clocks.',
  'What is the CAP theorem?': 'During a network partition, a distributed data system must choose between always returning a consistent result and remaining available to every request. CAP is about partition-time trade-offs, not a claim that only two qualities ever matter.',
  'What is eventual consistency?': 'Eventual consistency means replicas may temporarily differ but converge if updates stop and delivery succeeds. Applications must define what stale reads are acceptable and how users see or resolve conflicts.',
  'How do you make a distributed operation idempotent?': 'Associate a stable operation ID with the request, persist its result or deduplication record, and return the same outcome for retries. Ensure every side effect is guarded by that identity, not only the API entry point.',
  'What is leader election?': 'Leader election chooses one node to coordinate work such as scheduling or writes. A correct design uses leases or consensus so a failed or partitioned leader cannot safely act forever.',
  'How do you handle clock skew?': 'Do not rely on wall-clock time for ordering or correctness across machines; use logical versions, server-assigned sequence numbers, or monotonic clocks. Synchronize clocks for observability but treat timestamps as approximate.',
  'What is a quorum?': 'A quorum is enough replicas participating in a read or write to guarantee overlap with another quorum. For replication factor N, choose read and write sizes so R plus W is greater than N when strong overlap is required.',
  'How do retries and backoff work?': 'Retry only transient, idempotent operations, use exponential backoff with jitter, cap attempts, and propagate deadlines. Retries without limits can turn a partial outage into a cascading failure.',
  'What is the difference between at-least-once and exactly-once delivery?': 'At-least-once delivery may duplicate messages, so consumers must deduplicate or be idempotent. Exactly-once is usually an end-to-end semantic built from deduplication and atomic state changes, not a free transport guarantee.',
  'How do you design for partial failure?': 'Assume any dependency can be slow or unavailable: set timeouts, limit concurrency, isolate failures, provide fallbacks, use circuit breaking where justified, and expose degraded state rather than waiting indefinitely.',
  'What is the strategy pattern?': 'The strategy pattern encapsulates interchangeable algorithms behind one interface and selects one at runtime. It is useful when behavior varies independently and a growing conditional would obscure responsibility.',
  'What is the observer pattern?': 'The observer pattern lets subscribers receive change notifications from a subject. Define subscription ownership, error isolation, and cleanup so listeners do not leak or make changes unpredictable.',
  'What is the factory pattern?': 'A factory centralizes creation of objects or services so callers depend on a stable abstraction rather than construction details. Use it when creation varies or dependencies need wiring; avoid it for a single trivial constructor.',
  'What is the adapter pattern?': 'An adapter translates one interface into another expected by a caller. It isolates third-party, legacy, or transport-specific code so the rest of the system depends on a stable internal contract.',
  'What is dependency injection?': 'Dependency injection supplies collaborators from outside a class or function instead of constructing them internally. It makes dependencies explicit, supports configuration, and allows tests to use controlled fakes.',
  'What is the command pattern?': 'The command pattern represents an action as an object containing the data and execution behavior needed to perform it. It supports queues, retries, logging, undo, or delayed execution when those concerns are real requirements.',
  'What is the repository pattern?': 'A repository presents a collection-like domain interface over persistence, hiding query and storage details. It is valuable when it protects domain code from infrastructure coupling, not when it merely wraps every ORM call.',
  'When is the singleton pattern appropriate?': 'Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state.',
  'How do composition and inheritance differ?': 'Composition builds behavior by combining collaborators; inheritance shares behavior through a subtype hierarchy. Composition is usually more flexible and local, while inheritance needs a stable substitutable “is-a” relationship.',
  'How do you know when not to use a design pattern?': 'Do not use a pattern when straightforward code already makes ownership and behavior clear. Add an abstraction only when it removes real duplication, isolates volatility, or improves testability without creating indirection for its own sake.',
  'What are the main features of Java?': 'Java is statically typed, object-oriented, JVM-based, garbage-collected, and supported by a mature standard library and tooling. Its portability, concurrency support, and backward compatibility make it common for long-lived services.',
  'How do the JVM, JRE, and JDK differ?': 'The JVM executes Java bytecode; the JRE provides the JVM plus runtime libraries; the JDK adds development tools such as the compiler and debugger. Modern distributions commonly ship a JDK for both development and deployment.',
  'What is the difference between an interface and an abstract class?': 'An interface defines a contract and can provide default methods; an abstract class can hold shared state, constructors, and partial implementation. Use an interface for capability contracts and an abstract class only when subclasses truly share implementation and lifecycle.',
  'How does Java garbage collection work?': 'The JVM automatically reclaims objects no longer reachable from GC roots, using generational collectors optimized for short-lived allocations. Developers still manage resources such as files and sockets explicitly with try-with-resources.',
  'What is the Java memory model?': 'The Java Memory Model defines visibility and ordering guarantees between threads. Use synchronization, volatile fields, locks, or concurrent utilities to establish happens-before relationships; ordinary reads and writes are not enough for shared mutable state.',
  'What is the difference between checked and unchecked exceptions?': 'Checked exceptions must be declared or handled and represent recoverable conditions in an API; unchecked exceptions extend RuntimeException and usually indicate programming or invariant failures. Use exceptions sparingly and provide actionable context.',
  'How do Java collections differ?': 'Lists preserve ordered duplicates, sets enforce uniqueness, maps associate keys to values, and queues model ordered processing. Choose implementations from access patterns: ArrayList for indexed reads, HashMap for average constant lookup, and concurrent variants for shared access.',
  'What is immutability in Java?': 'An immutable object cannot change after construction: its fields are final, mutable inputs are defensively copied, and no mutating methods are exposed. Immutability simplifies concurrency, caching, and reasoning about shared data.',
  'How does concurrency work in Java?': 'Java provides threads, executors, futures, locks, atomics, and concurrent collections for parallel or asynchronous work. Prefer bounded executors and high-level concurrency utilities, and protect shared state with clear ownership or synchronization.',
  'What are records and sealed classes?': 'Records are concise immutable data carriers with generated accessors and value methods; sealed classes restrict which types may extend a hierarchy. Together they make closed, data-oriented domain models and exhaustive pattern handling clearer.',
  'What is Spring Boot?': 'Spring Boot is an opinionated layer over Spring that simplifies creating production Java applications through auto-configuration, starters, embedded servers, and externalized configuration.',
  'What does dependency injection mean in Spring?': 'Spring creates and wires application objects from its container rather than letting classes construct collaborators. Constructor injection makes required dependencies explicit and keeps tests simple.',
  'What are Spring Boot starters?': 'Starters are curated dependency bundles for a capability such as web, data, or security. They provide compatible defaults and reduce manual version management, while still allowing explicit overrides when necessary.',
  'How do you create a REST controller?': 'Annotate a class with `@RestController`, map HTTP paths and methods, bind validated request input to DTOs, delegate business logic to services, and return explicit response status and body contracts.',
  'How does Spring Boot auto-configuration work?': 'Boot conditionally configures beans from the classpath, properties, and existing beans. It provides sensible defaults that an application can override through configuration or its own bean definitions.',
  'How do you manage configuration profiles?': 'Use externalized configuration and profiles for environment-specific values, keeping secrets in a secure manager rather than files. Validate required configuration at startup and avoid scattering environment checks through business code.',
  'How do you handle exceptions globally in Spring Boot?': 'Use `@ControllerAdvice` with exception handlers to map known domain and validation failures into a consistent error response. Log unexpected failures with correlation context without exposing internals to clients.',
  'How do you validate request bodies?': 'Use DTOs with Bean Validation constraints and annotate controller parameters with `@Valid`. Return clear field-level validation errors and keep authorization and business-rule validation separate from shape validation.',
  'How do you test a Spring Boot application?': 'Use unit tests for services with mocked boundaries, slice tests for controllers or repositories, and a small set of integration tests for real wiring. Test observable contracts and error paths, not framework annotations alone.',
  'How do you secure a Spring Boot API?': 'Authenticate requests with Spring Security, authorize every operation by role and resource ownership, validate input, use HTTPS, protect secrets, and configure safe session or token handling. Security rules belong near the endpoint and domain boundary.',
  'What are Python decorators?': 'Decorators wrap a function or class to add behavior such as logging, authorization, or registration without changing call sites. Use `functools.wraps` so metadata and debugging remain accurate.',
  'How do Python generators work?': 'A generator function uses `yield` to produce values lazily and preserve its execution state between iterations. It is useful for streaming large data or pipelines without allocating every result at once.',
  'What is the difference between a list and a tuple?': 'Lists are mutable sequences; tuples are immutable sequences. Use tuples for fixed records or hashable values and lists when a collection must change.',
  'How does Python manage memory?': 'CPython primarily uses reference counting plus a cyclic garbage collector for reference cycles. Resources such as files and sockets still need deterministic cleanup with context managers.',
  'What are virtual environments?': 'Virtual environments isolate a project’s Python interpreter and installed packages from global and other-project dependencies. They make dependency versions reproducible and avoid machine-wide package conflicts.',
  'How do you handle exceptions in Python?': 'Catch only exceptions you can handle, add context or translate them at boundaries, use `finally` or context managers for cleanup, and let unexpected exceptions reach centralized logging. Avoid broad bare `except` blocks.',
  'What is the Global Interpreter Lock?': 'In CPython, the GIL allows only one thread to execute Python bytecode at a time. Threads still help I/O-bound work; use processes, native extensions, or distributed workers for CPU-bound parallelism.',
  'How do async and await work in Python?': 'Async functions return coroutines that run cooperatively on an event loop when awaited. They are useful for concurrent I/O, but blocking CPU or synchronous calls inside them still block the event loop.',
  'How do you structure a Python package?': 'Use a named package with clear modules, a `pyproject.toml`, explicit public APIs, tests, and separate infrastructure from domain logic. Keep imports acyclic and configuration at application boundaries.',
  'How do you test Python code?': 'Write fast unit tests around pure logic, inject or mock external boundaries, use fixtures for controlled setup, and add integration tests for critical persistence or HTTP behavior. Test errors and edge cases alongside the happy path.',
  'What makes an API RESTful?': 'A RESTful API models resources with stable URLs and uses standard HTTP methods, status codes, headers, and representations. It is stateless between requests and uses links or documented contracts to guide interaction.',
  'How do you choose HTTP methods?': 'Use GET for safe reads, POST for non-idempotent creation or actions, PUT for full replacement, PATCH for partial updates, and DELETE for removal. Method semantics affect caching, retries, and client expectations.',
  'What status code should an API return?': 'Return the status that describes the outcome: 2xx for success, 4xx for a client problem, and 5xx for a server failure. Use precise codes such as 201 for creation, 204 for no body, 400 for invalid input, 401 for missing authentication, and 403 for forbidden access.',
  'How do you design resource URLs?': 'Use plural nouns that identify resources and relationships, such as `/users/{id}/orders`; keep URLs stable and avoid embedding verbs for ordinary CRUD. Put filtering, sorting, and pagination in query parameters.',
  'How do you paginate an API?': 'Use cursor pagination with stable ordering for large or changing collections, return an opaque next cursor, enforce a maximum page size, and document consistency behavior. Offset pagination is simpler but can shift under concurrent writes.',
  'How do you version a REST API?': 'Prefer additive compatible changes; for breaking changes, expose an explicit version through a path, header, or media type and provide a measured deprecation window. Track consumer use before removing a version.',
  'How do you make an API idempotent?': 'Ensure repeating a request produces the same intended result, using resource identifiers, conditional requests, or idempotency keys for operations such as payment creation. Store and replay the outcome for duplicate keys.',
  'How do you design API error responses?': 'Use one documented error envelope with a stable code, HTTP status, human-readable message, correlation ID, and field errors where relevant. Do not leak stack traces, secrets, or internal topology.',
  'How do you secure a REST API?': 'Authenticate callers, authorize every resource action, validate and rate-limit requests, use TLS, protect secrets, and log security-relevant events. Treat browser CORS configuration as separate from server authorization.',
  'How do you document a REST API?': 'Publish a versioned machine-readable contract such as OpenAPI with examples, authentication, error codes, pagination, limits, and changelog. Generate clients or tests from it where useful and keep it synchronized with implementation.',
  'What is GraphQL?': 'GraphQL is a typed query language and runtime that lets clients request the fields they need from a graph of data. A schema defines available types and operations while resolvers fetch or compute each field.',
  'How does GraphQL differ from REST?': 'REST exposes resource-oriented endpoints and HTTP semantics; GraphQL usually exposes one typed endpoint where clients choose response shape. GraphQL can reduce overfetching but needs explicit controls for query cost, caching, and authorization.',
  'What are queries, mutations, and subscriptions?': 'Queries read data, mutations change data, and subscriptions stream server events to connected clients. Each should have clear authorization, input validation, error behavior, and operational limits.',
  'How do you design a GraphQL schema?': 'Model stable product concepts and relationships rather than database tables, use input types for mutations, make nullability deliberate, and provide predictable pagination and errors. Evolve schemas additively and deprecate fields before removal.',
  'What is the N+1 query problem?': 'N+1 occurs when resolving a list causes one additional data lookup per item, creating many backend calls. Batch and cache related loads per request with a DataLoader or a query that fetches the needed relation efficiently.',
  'How do DataLoaders work?': 'A DataLoader collects individual key requests in one event-loop tick, batches them into one backend call, and caches results for the request lifetime. The batch function must return results in the requested key order.',
  'How do you handle GraphQL errors?': 'Return expected domain errors in a documented shape or union, preserve partial data when appropriate, and put transport or unexpected failures in the standard errors array with a safe extension code. Never expose internal stack traces.',
  'How do you paginate a GraphQL connection?': 'Use a connection with edges, node, cursor, and pageInfo, accepting `first` plus `after` or a reverse equivalent. Cursors are opaque and ordering must be stable so clients can resume safely.',
  'How do you secure a GraphQL API?': 'Authenticate requests, authorize at the resolver or domain layer, limit query depth and complexity, rate-limit expensive operations, validate inputs, and disable unnecessary introspection only where the threat model requires it.',
  'How do you version a GraphQL schema?': 'Evolve schemas by adding fields and types, mark old fields deprecated with migration guidance, measure usage, and remove only after clients have moved. Avoid endpoint versions because the schema itself supports gradual evolution.',
  'What is Kubernetes?': 'Kubernetes is a container orchestration platform that reconciles declared workload state across a cluster. It schedules Pods, manages rollout and recovery, provides service discovery, and integrates configuration and storage.',
  'What is the difference between a Pod and a Deployment?': 'A Pod is the smallest runnable unit, containing one or more tightly coupled containers; a Deployment manages replica Pods and performs declarative rollout and rollback. Applications are normally deployed through a Deployment, not individual Pods.',
  'What are Services and Ingress used for?': 'A Service provides stable discovery and load balancing for a changing set of Pods; Ingress or Gateway resources route external HTTP traffic to Services. They separate application endpoints from Pod IP addresses.',
  'How do ConfigMaps and Secrets differ?': 'ConfigMaps hold non-sensitive configuration; Secrets hold sensitive values and need stricter access, encryption, and rotation controls. Neither makes a value safe merely by existing—limit who can read and mount it.',
  'What are liveness and readiness probes?': 'A liveness probe tells Kubernetes when to restart a stuck container; a readiness probe tells it when a healthy container may receive traffic. Readiness should fail during startup, overload, or dependency unavailability without causing restart loops.',
  'How do you scale a Kubernetes workload?': 'Change replica count manually or use an autoscaler based on CPU, memory, or application metrics. Set realistic resource requests and limits first, because scheduling and autoscaling decisions depend on them.',
  'What are requests and limits?': 'Requests reserve scheduler capacity; limits cap container resource use. CPU limits can throttle and memory limits can cause termination, so tune them from observed behavior rather than copy-pasting defaults.',
  'How do rolling updates work?': 'A Deployment gradually creates new Pods and removes old ones according to surge and unavailable settings, waiting for readiness before progressing. Use compatible changes and monitor rollout status so a bad version can be paused or rolled back.',
  'What is a Kubernetes namespace?': 'A namespace scopes resource names, policies, quotas, and access controls within a cluster. Use it for logical tenancy or environment separation, while recognizing it is not a complete security boundary by itself.',
  'How do you debug a failing Pod?': 'Inspect Pod events, status, logs, container exit code, resource usage, image pull and configuration errors, then test service connectivity and probes. Start with the specific failure state instead of restarting blindly.',
  'What is Docker?': 'Docker packages an application and its dependencies into a portable image that runs as an isolated container. It improves deployment consistency, but it does not replace secure configuration, observability, or orchestration.',
  'What is the difference between an image and a container?': 'An image is an immutable filesystem and configuration template built from layers; a container is a running instance of that image with its own writable layer and runtime settings. One image can start many containers.',
  'How do Docker layers and caching work?': 'Each Dockerfile instruction creates a cacheable layer. Put stable dependency manifests before frequently changing source code so dependency installation is reused, and avoid copying unnecessary files into the build context.',
  'What is a multi-stage build?': 'A multi-stage build uses one image to compile or package an application and a later, smaller image to run only the artifact. It reduces runtime size, attack surface, and accidental inclusion of build tools or secrets.',
  'How do Docker volumes work?': 'Volumes store data outside a container’s writable layer so it survives container replacement and can be managed by Docker. Use named volumes for durable service data and bind mounts mainly for local development.',
  'How do you pass configuration into a container?': 'Inject non-secret configuration through environment variables or mounted config files at runtime, and inject secrets through the platform’s secret mechanism. Keep one image promotion-safe across environments rather than baking environment values into it.',
  'How do you reduce Docker image size?': 'Use a minimal trusted base image, multi-stage builds, a `.dockerignore`, and only production dependencies in the final image. Smaller images build, scan, transfer, and start faster.',
  'How do you secure a Docker container?': 'Run as a non-root user, use a minimal patched base image, drop unneeded Linux capabilities, make the filesystem read-only where possible, and never put secrets in an image layer or build argument history.',
  'What is Docker Compose?': 'Docker Compose defines and runs related local containers—such as an API, database, and cache—from one declarative YAML file. It is useful for development and tests; production orchestration usually needs platform-specific controls.',
  'How do you debug a failing container?': 'Start with container logs, exit code, image and environment configuration, then inspect process state and network connectivity. Reproduce with the same image and command, and verify health-check failures separately from application crashes.',
  'What makes an API easy to use?': 'An API is easy to use when its resource model, names, request shapes, responses, and errors are consistent enough that clients can predict the next endpoint. Good defaults, examples, and stable behavior matter more than exposing every internal capability.',
  'How do you model an API resource?': 'Model a resource around a client-facing business concept with a stable identifier and lifecycle, not a database table. Expose only fields clients need, represent relationships deliberately, and keep transport models separate from persistence models.',
  'How do you design consistent API errors?': 'Use one documented error envelope containing a stable machine-readable code, HTTP status, human-readable message, and field-level details when validation fails. Do not leak stack traces or internal implementation details.',
  'How do you version an API contract?': 'Make additive changes whenever possible; introduce a new version only for breaking behavior or shapes. Publish a migration path, deprecation period, and usage telemetry before removing the older contract.',
  'How do you design pagination?': 'Use cursor pagination for large or frequently changing collections, return an opaque next cursor and a bounded page size, and define ordering explicitly. Offset pagination is simpler but can skip or duplicate items as data changes.',
  'How do you handle backward compatibility?': 'Treat existing fields and behavior as a contract: add optional fields, preserve semantics, tolerate unknown fields, and avoid changing types or meanings in place. Contract tests and consumer telemetry reveal unsafe changes before release.',
  'How do you design an idempotent write API?': 'Accept an idempotency key for retryable create or payment-like operations, persist the key with the outcome, and return the original result for a duplicate request. Define the key scope and retention period so retries cannot create duplicate side effects.',
  'How do you document an API?': 'Document endpoints, authentication, request and response schemas, error codes, pagination, rate limits, and runnable examples alongside the source contract. Keep the documentation generated or tested from the same specification to prevent drift.',
  'How do you authenticate and authorize an API?': 'Authenticate the caller with a verified credential, then authorize every action against the resource and tenant context. Use short-lived scoped tokens, server-side policy checks, audit logs, and deny by default.',
  'How do you evolve an API without breaking clients?': 'Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement.',
  'What is React and what problems does it solve?': 'React is a UI library that describes an interface as a function of state and props. It helps teams compose complex, stateful screens from isolated components while React efficiently reconciles the browser DOM to match the latest UI description.',
  'What is the Virtual DOM?': 'The Virtual DOM is React’s in-memory representation of the desired UI tree. After state changes, React compares the new tree with the previous one and applies the necessary DOM updates; it is an implementation detail, not a guarantee that every update is cheap.',
  'What is reconciliation in React?': 'Reconciliation is React’s process for comparing successive element trees to decide what to preserve, update, create, or remove. Component type and stable keys establish identity, so changing either can reset a component’s state.',
  'What is JSX?': 'JSX is syntax that lets JavaScript describe UI with element-like markup. A build step transforms it into React element creation calls, so expressions use JavaScript rules and values must be escaped or rendered safely.',
  'What is the difference between props and state?': 'Props are inputs supplied by a parent and should be treated as read-only; state is data owned and updated by the component. A component renders from both, but only state changes through its setter or reducer.',
  'What causes a React component to re-render?': 'A component re-renders when its own state changes, its parent renders, or a consumed context changes. Rendering calculates a new UI description; React may then skip DOM work if the output is equivalent.',
  'What are keys and why are they important?': 'Keys give sibling elements stable identity across list updates. Use an ID from the data, not an array index when items can be inserted, removed, or reordered, so React preserves the correct DOM and component state.',
  'What is a controlled component?': 'A controlled form control receives its displayed value from React state and reports edits through an event handler. It gives the application one source of truth for validation, formatting, and submission.',
  'What is an uncontrolled component?': 'An uncontrolled form control stores its current value in the DOM, usually accessed through a ref at submission time. It can be simpler for isolated inputs or integrations, but makes live validation and synchronized UI state harder.',
  'What is React Strict Mode?': 'Strict Mode is a development-only wrapper that surfaces unsafe side effects and deprecated patterns. React may intentionally re-render or re-run effects to reveal code that is not resilient to mounting, cleanup, and replay.',
  'Tell me about yourself.': 'Give a focused present-past-future answer: summarize your current scope, select two or three relevant accomplishments, and end with why this role is the logical next step. Keep it to about ninety seconds and adapt the evidence to the job rather than reciting your resume.',
  'Walk me through your resume.': 'Use the resume as a career narrative, not a line-by-line reading. Explain the choices behind each transition, highlight outcomes most relevant to this role, and connect the progression to the work you want to do next.',
  'Why do you want this role?': 'Tie the role’s responsibilities to work you have already enjoyed and delivered well, then explain what new scope or problem makes it compelling. Cite something specific from the job description rather than relying on generic enthusiasm.',
  'Why do you want to work here?': 'Show that you understand the company’s product, customers, and engineering challenges. Connect one or two of those specifics to your experience and explain the contribution you would be excited to make.',
  'What are your greatest strengths?': 'Choose strengths that matter for the role and support each with evidence. For example, describe how structured communication, debugging, or ownership changed a project outcome instead of only naming a trait.',
  'What is an area you are working to improve?': 'Name a real, non-essential weakness, explain its impact honestly, and describe the concrete habit, feedback loop, or training you use to improve it. Avoid presenting a disguised strength or a problem that would prevent you from doing the job.',
  'What motivates you?': 'Describe the work conditions and outcomes that consistently energize you, such as solving customer problems, improving a system, or helping a team deliver. Connect that motivation to the role’s actual responsibilities.',
  'What are your career goals?': 'State a direction rather than a rigid title: the kind of problems, responsibility, and expertise you want to grow toward. Explain how this role provides a credible next step and how you will create value while learning.',
  'Why are you leaving your current role?': 'Keep the answer positive and forward-looking. Briefly name what you have learned, then explain that you are seeking a different scope, product stage, technical challenge, or growth opportunity—without criticizing people or your employer.',
  'What makes you a strong fit for this position?': 'Match the role’s most important requirements to specific evidence from your work. Use two or three examples with context and results, then close by showing how those strengths would apply in the first months.',
  'Tell me about a conflict with a teammate.': 'Use STAR: describe the shared goal and specific disagreement, explain how you listened and clarified facts, then show the decision and outcome. Focus on resolving the work problem, not proving that the other person was wrong.',
  'Describe a time you gave difficult feedback.': 'Choose an example where the feedback was timely, specific, and delivered privately. Explain the behavior and impact, invite the other person’s perspective, agree on a next step, and share what changed afterward.',
  'Describe a time you received difficult feedback.': 'Show coachability: explain the feedback without defensiveness, how you verified the pattern, the action you took, and the measurable improvement. Acknowledge that the feedback was difficult while demonstrating ownership.',
  'Tell me about a time you influenced without authority.': 'Describe how you built credibility with data, customer impact, prototypes, or one-on-one conversations rather than relying on title. Explain the stakeholders, objections, compromise, and result.',
  'How do you build trust with a new team?': 'Build trust through reliable follow-through: learn the team’s context, make small commitments and meet them, communicate risks early, ask for feedback, and give credit. Trust grows from repeated observable behavior, not an introductory meeting.',
  'Describe a cross-functional disagreement.': 'Frame the disagreement as competing constraints, such as speed, customer value, risk, or feasibility. Explain how you made trade-offs visible, involved the decision owner, documented the outcome, and preserved the working relationship.',
  'Tell me about a time you helped a teammate succeed.': 'Pick a case where your support changed the teammate’s outcome: unblocking a technical issue, sharing context, pairing, or advocating for their work. Emphasize what they owned and how you enabled them rather than taking credit.',
  'How do you handle different working styles?': 'Start by agreeing on outcomes, decision rights, communication cadence, and deadlines. Adapt your own style where reasonable, document decisions, and address friction directly before it becomes a personal issue.',
  'Describe a time you communicated bad news.': 'Communicate early with the facts, impact, uncertainty, and recommended next steps. Explain how you avoided surprises, tailored the message to stakeholders, and kept updating them until the risk or issue was resolved.',
  'How do you collaborate in a remote team?': 'Make work visible through written context, explicit ownership, and recorded decisions; use synchronous time for ambiguity and relationship-building. Be deliberate about time zones, response expectations, and including people who are not in the meeting.',
  'Tell me about a time you showed ownership.': 'Choose a problem you noticed before it was assigned to you. Explain how you defined the outcome, involved the right people, drove execution through ambiguity, and measured the result without overstepping ownership boundaries.',
  'Describe a time you made a mistake.': 'Pick a real, contained mistake. State what happened and its impact, explain how you fixed it and communicated it, then identify the process or safeguard that prevented a recurrence.',
  'Tell me about a difficult decision you made.': 'Describe the decision criteria, the options and trade-offs, the people you consulted, and why action was needed despite uncertainty. Close with the result and what you would change with hindsight.',
  'Tell me about a time you missed a deadline.': 'Own the miss without excuses, explain the early signals you did or did not act on, and describe how you communicated, replanned, and protected the highest-value work. Show the planning change you made afterward.',
  'Describe a time you handled ambiguity.': 'Show how you turned ambiguity into a sequence of decisions: clarify the desired outcome, identify assumptions and risks, run a small experiment or gather evidence, and align stakeholders on the next milestone.',
  'Tell me about a time you improved a process.': 'Explain the original friction with evidence, the smallest change you tested, how you got adoption, and the measurable effect on time, quality, cost, or reliability. Include how you kept the improvement from creating new overhead.',
  'Describe a time you disagreed with a decision.': 'Explain the decision fairly, state your concern with evidence, and show how you raised it through the right channel. Once a decision was made, demonstrate commitment unless new facts created a material risk.',
  'Tell me about a time you took initiative.': 'Use an example where you saw an opportunity or risk, proposed a bounded solution, gained the needed alignment, and delivered an outcome. The initiative should be connected to customer or team value, not simply extra activity.',
  'How do you prioritize competing work?': 'Clarify impact, urgency, effort, dependencies, and reversibility with stakeholders. Make trade-offs visible, protect critical work, break large work into milestones, and revisit priorities when new information changes the decision.',
  'Tell me about a time you managed risk.': 'Identify the risk early, assess likelihood and impact, propose mitigation and contingency plans, and name an owner and trigger for escalation. Show how monitoring and communication prevented a surprise.',
}

const TOPIC_PRIMERS: Record<string, string> = {
  HTML: 'HTML supplies the document’s meaning and structure. Prefer native elements first, then add only the attributes needed to connect controls, describe state, or support responsive delivery.',
  CSS: 'CSS is a cascade-based layout system. Robust styles keep specificity low, make layout constraints explicit, and let components adapt to their available space instead of a fixed device list.',
  'Next.js': 'Next.js lets a route choose a server-first rendering and caching strategy while preserving React’s component model. Keep client boundaries small and make cache invalidation part of every mutation design.',
  RxJS: 'RxJS models asynchronous values as composable streams. The important design choice is the source lifetime and concurrency rule: cancel, merge, queue, or ignore competing work deliberately.',
  'web performance': 'Web performance is measured at the user level. Protect the critical rendering path, reduce main-thread work, and validate improvements against field data rather than bundle size alone.',
  'web accessibility': 'Accessible interfaces use semantic HTML, predictable keyboard behavior, visible focus, and clear feedback. Build those requirements into the component contract from the start.',
  'Node.js': 'Node.js is a JavaScript runtime built on V8 that excels at I/O-bound services because one process can coordinate many non-blocking operations. Keep CPU-heavy work off the event-loop thread or move it to workers.',
  Express: 'Express is a minimal Node.js HTTP framework. Compose routes from small middleware functions, validate untrusted input at the boundary, and send errors to one consistent error handler.',
  Java: 'Java is a statically typed, JVM-based language with a mature standard library, strong tooling, and managed memory. Its type system and concurrency primitives suit long-lived, large-scale services.',
  'Spring Boot': 'Spring Boot builds production Java services from convention, dependency injection, and auto-configuration. Keep controllers thin, put business rules in services, and make configuration and error handling explicit.',
  Python: 'Python emphasizes readable, expressive code and has a broad ecosystem for web services, automation, and data work. Use explicit environments, type hints where valuable, and tests to preserve maintainability as a project grows.',
  'REST API design': 'A REST API exposes stable resource-oriented contracts over HTTP. Use HTTP semantics consistently, validate every request, make errors actionable, and design evolution and idempotency before clients depend on the endpoint.',
  GraphQL: 'GraphQL lets clients request a typed graph of data from one endpoint. A good schema models product concepts rather than database tables, and its resolvers must control authorization, cost, and N+1 queries.',
  SQL: 'SQL is a declarative language for querying and changing relational data. Correctness starts with joins, constraints, and transactions; performance comes from inspecting real query plans and indexing the access pattern.',
  PostgreSQL: 'PostgreSQL is a feature-rich relational database with strong transactions, MVCC concurrency, extensible types, and mature indexing. Use constraints to protect invariants and `EXPLAIN ANALYZE` to tune observed slow queries.',
  MongoDB: 'MongoDB stores flexible BSON documents and is most effective when documents mirror the data retrieved together. Model for access patterns, index every important query, and use transactions only where cross-document consistency is required.',
  Redis: 'Redis is an in-memory data store used for caching, coordination, queues, and fast data structures. Treat it as a capacity-bounded dependency: define expiry, invalidation, persistence, and a safe fallback when it is unavailable.',
  Git: 'Git records immutable snapshots and lets teams integrate work through branches and commits. Clear, small commits and a protected integration branch make history reviewable and recovery safe.',
  Docker: 'Docker packages an application and its runtime dependencies into an image that runs as an isolated container. Build small, reproducible images, inject configuration at runtime, and run processes with the least privilege required.',
  Kubernetes: 'Kubernetes reconciles declared workload state across a cluster. Deployments manage replica rollout, Services provide stable discovery, and probes plus resource limits let the scheduler and traffic layer make safe decisions.',
  AWS: 'AWS provides managed infrastructure primitives for compute, storage, networking, and observability. Design around failure domains, least-privilege IAM, managed services where they fit, and measurable cost ownership.',
  Azure: 'Azure provides cloud compute, storage, networking, identity, and managed application services. Use Entra ID and managed identities for access, place workloads in deliberate network boundaries, and monitor service-level outcomes.',
  'CI/CD': 'CI/CD automates integration, verification, and delivery so every change is reproducible. A safe pipeline runs fast checks first, protects secrets, produces an immutable artifact, and supports observable rollout and rollback.',
  'GitHub Actions': 'GitHub Actions automates workflows from repository events using jobs, steps, runners, and actions. Pin trusted actions, grant minimal token permissions, cache safely, and keep deploy credentials out of workflow code.',
  microservices: 'Microservices split a system into independently deployable services around business capabilities. They earn their complexity only when team or scaling boundaries justify distributed operations, observability, and data ownership.',
  'distributed systems': 'Distributed systems coordinate work across independent machines where messages can be delayed, duplicated, or lost. Design for partial failure with timeouts, idempotency, retries, and explicit consistency guarantees.',
  'API design': 'Good API design makes the common path obvious and predictable while preserving room to evolve. Consistent naming, validation, error shapes, pagination, authentication, and versioning protect both clients and maintainers.',
  'design patterns': 'Design patterns describe recurring collaboration structures, not rules to apply by name. Use one only when it makes responsibilities, extension points, or dependencies clearer than straightforward composition.',
  'JavaScript fundamentals': 'JavaScript values have well-defined types, scope rules, and coercion behaviour. Explain the exact runtime rule first, then use a short expression to demonstrate the result.',
  'functions and scope': 'Functions close over the lexical environment in which they are created. This makes callbacks and encapsulation powerful, but it also means that `this`, mutation, and captured values must be handled deliberately.',
  'async JavaScript': 'JavaScript runs synchronous work on a call stack and schedules asynchronous continuations through the event loop. Promise reactions run as microtasks, ahead of the next task, so ordering and cancellation must be designed explicitly.',
  prototypes: 'Objects delegate property lookup through a prototype chain. Classes provide friendlier syntax, but inheritance, property ownership, and `this` still follow the underlying prototype model.',
  'modern JavaScript': 'Modern JavaScript adds declarative syntax for modules, collections, object access, and function arguments. Use these features to improve clarity without hiding data ownership or creating accidental copies.',
  'the DOM': 'The DOM is a live tree managed by the browser. Event propagation, safe text insertion, and batching visual updates are the core ideas behind predictable browser-side code.',
  'JavaScript performance': 'Performance work begins with a measurement: profile the slow interaction, identify the hottest work, and remove or defer it. Avoid optimizing from intuition, especially when it increases complexity or memory use.',
  'web security': 'Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries.',
  'JavaScript patterns': 'Patterns should make dependencies and behaviour easier to reason about. Prefer small composable modules and explicit interfaces; introduce a pattern only when it removes real duplication or coupling.',
  'JavaScript coding': 'For a coding answer, state the input contract and complexity before implementation. Handle empty input and mutation rules, then use a few focused examples to validate the solution.',
  'React fundamentals': 'React renders a UI description from props and state, then reconciles it with the previous tree. Predictable data flow, stable identity, and rendering without side effects are the foundations of reliable components.',
  'React hooks': 'Hooks let function components use state, effects, and reusable stateful logic. Call them unconditionally at the top level, keep dependencies accurate, and clean up subscriptions or timers created by effects.',
  'React state': 'Keep state close to the components that need it and store the minimum source of truth. Derive values during render where possible, update immutably, and model pending, successful, and failed async states distinctly.',
  'React performance': 'React performance improvements should follow profiling. Preserve stable component identity, virtualize large collections, split slow code, and memoize only where measurements show repeated expensive work.',
  'React Router': 'A router maps location to nested UI. Good routing keeps URL state shareable, loads data at route boundaries, handles missing and unauthorized routes, and delays feature code until it is needed.',
  'React Context': 'Context is dependency injection for values shared down a component tree. It is excellent for relatively stable cross-cutting values; split frequently changing values or use a store to avoid broad re-renders.',
  Redux: 'Redux centralizes state transitions as explicit actions reduced into immutable state. Keep reducers pure, derive views with selectors, and isolate I/O in middleware or async workflows.',
  'advanced React patterns': 'Advanced React APIs solve composition and integration problems: rendering outside the tree, recovering from errors, exposing imperative bridges, or sharing behaviour. Choose the smallest abstraction that keeps ownership clear.',
  'React architecture': 'A scalable React codebase groups code by feature, gives UI a clear data boundary, and keeps business rules independent from framework details. Tests should focus on visible behaviour and critical integration paths.',
  'React coding': 'In a React exercise, identify state, events, async boundaries, and accessibility needs before writing JSX. Build the smallest working interaction first, then address loading, errors, and component reuse.',
  'Angular fundamentals': 'Angular combines declarative templates, dependency injection, and change detection. Explain which part owns data, which part renders it, and how an update is propagated through the view.',
  'Angular components': 'Components own a template and coordinate a focused piece of UI. Use inputs for data in, outputs for events out, and lifecycle hooks only when the component actually needs to synchronize with something outside rendering.',
  'Angular services': 'Services separate reusable behaviour, data access, and shared state from components. Define a narrow API, inject dependencies rather than constructing them, and keep HTTP and error handling consistent.',
  'Angular DI': 'Angular dependency injection resolves tokens through a hierarchy of injectors. Provider scope determines instance lifetime, while tokens and provider types let applications replace implementations cleanly.',
  'RxJS in Angular': 'Observables represent streams that can emit multiple values over time. Select the flattening operator from the desired concurrency rule, handle errors in the stream, and ensure subscriptions have a clear lifetime.',
  'Angular routing': 'Angular Router composes a route tree into router outlets. Route configuration should declare access control, data requirements, redirects, and lazy boundaries close to the feature they protect.',
  'Angular state': 'Angular state should have one clear owner and predictable update paths. A local signal or service is often sufficient; introduce a global store when multiple independent features need coordinated, observable transitions.',
  'Angular signals': 'Signals hold synchronous reactive state; computed signals derive values and effects bridge reactive state to imperative work. Keep derivations pure and avoid effects that silently write more application state.',
  'Angular performance': 'Angular performance comes from minimizing change-detection work and JavaScript delivered to the browser. Use stable list tracking, simple templates, lazy features, and measured profiling before adding complexity.',
  'Angular architecture': 'Large Angular applications benefit from feature boundaries, a small core layer, and reusable UI or data libraries. Keep framework wiring thin so domain rules, APIs, and tests remain easy to evolve.',
  'TypeScript fundamentals': 'TypeScript adds a static type system to JavaScript. Explain the compile-time guarantee, distinguish it from runtime validation, and use narrow, readable types instead of escaping to `any`.',
  'TypeScript object types': 'Interfaces and type aliases describe object shapes and composition. Model the domain precisely, keep public contracts stable, and prefer utility types when they clarify an existing type.',
  'TypeScript generics': 'Generics preserve relationships between input and output types. Constrain a type parameter only when the implementation needs a capability, and choose names that reveal the relationship.',
  'TypeScript functions': 'Function types describe parameters, return values, and narrowing behaviour. Overloads and type predicates should make call sites safer without obscuring the implementation.',
  'TypeScript architecture': 'TypeScript is most useful when type boundaries mirror runtime boundaries. Validate external data, share contracts intentionally, and keep compiler settings strict enough to catch real defects.',
  'system design foundations': 'A strong system-design answer starts with requirements and scale, then proposes a small end-to-end architecture. Name the trade-offs, failure modes, and measurements that determine whether it works.',
  'frontend performance design': 'Performance design protects the critical rendering path and measures user-visible outcomes. Deliver less JavaScript, prioritize useful content, and verify changes with field and lab metrics.',
  'frontend data design': 'Frontend data systems balance freshness, latency, consistency, and simplicity. Define cache keys and invalidation rules, model loading and error states, and avoid making the UI depend on timing assumptions.',
  'real-time frontend design': 'Real-time UI needs a connection strategy, an event protocol, ordering rules, and a reconnection story. Treat messages as untrusted inputs and make duplicate or delayed events safe to process.',
  'frontend architecture design': 'Frontend architecture should give teams independent, safe delivery without fragmenting the user experience. Make boundaries explicit and design observability, accessibility, and rollout controls from the start.',
  'behavioral introduction': 'Use a concise present-past-future structure: state what you do now, select only relevant experience, and connect it to the role. Be specific without reciting the entire resume.',
  'behavioral collaboration': 'Answer collaboration questions with STAR: set the context, explain your responsibility, describe the actions you personally took, and quantify the result. Show empathy and ownership rather than assigning blame.',
  'behavioral ownership': 'Ownership examples show how you noticed a problem, made a decision, involved the right people, and delivered a result. Be candid about constraints and what you would improve next time.',
  'behavioral leadership': 'Leadership is not limited to management: demonstrate direction-setting, alignment, coaching, and accountability. Use an example where your actions changed the outcome for people or the business.',
  'behavioral culture': 'Culture questions test self-awareness and judgment. Give an honest, constructive answer that explains how you work, how you respond to setbacks, and what environment lets you contribute well.',
}

const EXAMPLES: Record<string, string> = {
  Git: '```bash\ngit switch feature/search\ngit fetch origin\ngit rebase origin/main\n# resolve and test conflicts if prompted\ngit push --force-with-lease\n```\n\nRebasing a private feature branch onto the current main branch keeps its commits linear; `--force-with-lease` avoids overwriting work pushed by someone else.',
  Docker: '```dockerfile\nFROM node:22-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:22-alpine\nUSER node\nWORKDIR /app\nCOPY --from=build --chown=node:node /app/dist ./dist\nCMD ["node", "dist/server.js"]\n```\n\nA multi-stage build keeps build tooling out of the final non-root runtime image.',
  HTML: '```html\n<label for="email">Email address</label>\n<input id="email" name="email" type="email" autocomplete="email" />\n```\n\nThe explicit label gives the input an accessible name and makes the label itself clickable.',
  CSS: '```css\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));\n  gap: 1rem;\n}\n```\n\nThis grid responds to available container width without relying on device-specific breakpoints.',
  'Next.js': '```tsx\n// app/products/[id]/page.tsx\nexport default async function ProductPage({ params }: { params: { id: string } }) {\n  const product = await getProduct(params.id)\n  return <h1>{product.name}</h1>\n}\n```\n\nA Server Component can fetch data close to the route without shipping that data-access code to the browser.',
  RxJS: '```ts\nconst results$ = query$.pipe(\n  debounceTime(250),\n  distinctUntilChanged(),\n  switchMap(query => api.search(query))\n)\n```\n\n`switchMap` ensures an older search result cannot overwrite a newer query.',
  'web performance': '```html\n<link rel="preload" as="image" href="/hero.webp" fetchpriority="high" />\n<img src="/hero.webp" width="1200" height="675" alt="Product dashboard" />\n```\n\nPreloading the verified LCP image and reserving its dimensions can improve loading and prevent layout shift.',
  'web accessibility': '```html\n<button type="button" aria-expanded="false" aria-controls="filters">\n  Show filters\n</button>\n<section id="filters" hidden>…</section>\n```\n\nThe native button supplies keyboard behavior; `aria-expanded` communicates the visible state.',
  'JavaScript fundamentals': '```js\nconst input = 0\nconsole.log(Boolean(input)) // false\nconsole.log(input === false) // false: no coercion\n```\n\nUse strict equality when you do not explicitly want coercion.',
  'functions and scope': '```js\nfunction makeCounter() {\n  let count = 0\n  return () => ++count\n}\nconst next = makeCounter()\nnext() // 1\nnext() // 2\n```\n\n`next` retains access to `count`; that retained lexical environment is a closure.',
  'async JavaScript': '```js\nconsole.log("start")\nPromise.resolve().then(() => console.log("microtask"))\nsetTimeout(() => console.log("task"), 0)\nconsole.log("end")\n// start, end, microtask, task\n```\n\nPromise handlers use the microtask queue, which runs before the next timer task.',
  prototypes: '```js\nfunction User(name) { this.name = name }\nUser.prototype.greet = function () { return `Hi, ${this.name}` }\nconst ada = new User("Ada")\nada.greet() // "Hi, Ada"\n```\n\nThe method is shared through `User.prototype`, not copied into every instance.',
  'modern JavaScript': '```js\nconst user = { name: "Ada", settings: { theme: "dark" } }\nconst { name, settings: { theme } } = user\nconst label = `${name}: ${theme}`\n```\n\nDestructuring reads values without changing the original object.',
  'the DOM': '```js\ndocument.querySelector("#list").addEventListener("click", event => {\n  const button = event.target.closest("button[data-id]")\n  if (button) removeItem(button.dataset.id)\n})\n```\n\nOne delegated listener can handle buttons added later because clicks bubble to the list.',
  'JavaScript performance': '```js\nfunction debounce(fn, delay) {\n  let id\n  return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), delay) }\n}\nconst search = debounce(query => fetch(`/api/search?q=${query}`), 250)\n```\n\nDebouncing waits for input to settle and avoids a request for every keystroke.',
  'web security': '```js\nconst message = document.createElement("p")\nmessage.textContent = untrustedComment // never assign untrusted HTML\ndocument.body.append(message)\n```\n\n`textContent` treats the value as text, preventing it from becoming executable markup.',
  'JavaScript patterns': '```js\nfunction createApiClient(fetcher) {\n  return { getUser: id => fetcher(`/users/${id}`) }\n}\nconst api = createApiClient(fetch)\n```\n\nInjecting `fetcher` keeps the client small and makes it easy to test with a fake.',
  'JavaScript coding': '```js\nfunction groupBy(items, key) {\n  return items.reduce((groups, item) => {\n    const value = item[key]\n    ;(groups[value] ??= []).push(item)\n    return groups\n  }, {})\n}\n```\n\nThis is a linear-time grouping solution and does not mutate the input array.',
  'React fundamentals': '```jsx\nfunction Greeting({ name }) {\n  return <h1>Hello, {name}</h1>\n}\n// <Greeting name="Ada" />\n```\n\nA React component is a function of its props and state that returns UI.',
  'React hooks': '```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0)\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>\n}\n```\n\nThe functional update reads the latest state, which is safe when updates are queued.',
  'React state': '```jsx\nsetTodos(current => current.map(todo =>\n  todo.id === id ? { ...todo, done: !todo.done } : todo\n))\n```\n\nCreate new objects for changed values so React can detect the update by identity.',
  'React performance': '```jsx\nconst visibleRows = useMemo(\n  () => rows.filter(row => row.visible),\n  [rows]\n)\n```\n\nMemoize only after profiling shows this calculation is expensive or causes avoidable child work.',
  'React Router': '```jsx\n<Route path="projects/:projectId" element={<Project />} />\nfunction Project() {\n  const { projectId } = useParams()\n  return <h1>Project {projectId}</h1>\n}\n```\n\nThe URL parameter is input to the route component and should be validated before use.',
  'React Context': '```jsx\nconst ThemeContext = createContext("light")\nfunction Button() {\n  const theme = useContext(ThemeContext)\n  return <button className={theme}>Save</button>\n}\n```\n\nContext avoids passing a stable shared value through every intermediate component.',
  Redux: '```js\nconst todosSlice = createSlice({\n  name: "todos", initialState: [],\n  reducers: { added: (state, action) => { state.push(action.payload) } }\n})\n```\n\nRedux Toolkit uses Immer, so this reducer syntax produces an immutable update.',
  'advanced React patterns': '```jsx\nfunction Modal({ children }) {\n  return createPortal(children, document.body)\n}\n```\n\nA portal changes where DOM is mounted while preserving React context and event behaviour.',
  'React architecture': '```jsx\nfunction UserPage({ userId, api }) {\n  const user = useUser(userId, api)\n  return <UserProfile user={user} />\n}\n```\n\nKeep data access in a hook or boundary and make the display component easy to reuse and test.',
  'React coding': '```jsx\nfunction SearchBox({ onSearch }) {\n  const [query, setQuery] = useState("")\n  return <input value={query} onChange={e => {\n    setQuery(e.target.value); onSearch(e.target.value)\n  }} />\n}\n```\n\nStart with a controlled, accessible interaction; add debounce, loading, and errors around it.',
  'Angular fundamentals': '```ts\n@Component({ selector: "app-greeting", template: `<h1>Hello {{ name }}</h1>` })\nexport class GreetingComponent { name = "Ada" }\n```\n\nInterpolation binds a component value into the template.',
  'Angular components': '```ts\n@Component({ selector: "app-save", template: `<button (click)="saved.emit()">Save</button>` })\nexport class SaveComponent { @Output() saved = new EventEmitter<void>() }\n```\n\nThe parent supplies data through inputs and reacts to child events through outputs.',
  'Angular services': '```ts\n@Injectable({ providedIn: "root" })\nexport class UserService {\n  constructor(private http: HttpClient) {}\n  get(id: string) { return this.http.get<User>(`/api/users/${id}`) }\n}\n```\n\nA root provider creates one application-wide service instance by default.',
  'Angular DI': '```ts\nexport const API_URL = new InjectionToken<string>("api-url")\nbootstrapApplication(AppComponent, { providers: [{ provide: API_URL, useValue: "/api" }] })\n```\n\nAn injection token is a typed key for a dependency that is not a class.',
  'RxJS in Angular': '```ts\nresults$ = this.query.valueChanges.pipe(\n  debounceTime(250), distinctUntilChanged(),\n  switchMap(query => this.api.search(query))\n)\n```\n\n`switchMap` cancels the previous inner request when a newer query arrives.',
  'Angular routing': '```ts\nconst routes: Routes = [\n  { path: "projects/:id", component: ProjectComponent },\n  { path: "", pathMatch: "full", redirectTo: "projects/1" }\n]\n```\n\nRoute parameters describe resource identity; redirects make a clear default URL.',
  'Angular state': '```ts\n@Injectable({ providedIn: "root" })\nexport class CartStore {\n  readonly items = signal<CartItem[]>([])\n  add(item: CartItem) { this.items.update(items => [...items, item]) }\n}\n```\n\nA small feature store makes state ownership and updates explicit without a global store.',
  'Angular signals': '```ts\nconst count = signal(0)\nconst doubled = computed(() => count() * 2)\ncount.update(value => value + 1)\n```\n\nSignals are read by calling them; computed values automatically track the signals they read.',
  'Angular performance': '```html\n@for (user of users; track user.id) {\n  <app-user-row [user]="user" />\n}\n```\n\nTracking by a stable id lets Angular preserve DOM nodes when a list changes.',
  'Angular architecture': '```ts\n// projects/data-access/project-api.service.ts\n// projects/feature-list/project-list.component.ts\n// shared/ui/empty-state.component.ts\n```\n\nOrganizing by feature and responsibility prevents unrelated code from becoming coupled through a large shared folder.',
  'TypeScript fundamentals': '```ts\nfunction formatId(id: string | number) {\n  return typeof id === "string" ? id.trim() : id.toString()\n}\n```\n\nThe `typeof` check narrows the union, so each branch gets the operations valid for that type.',
  'TypeScript object types': '```ts\ntype User = { id: string; name: string; readonly role?: "admin" | "member" }\ntype UserPreview = Pick<User, "id" | "name">\n```\n\n`Pick` derives a focused view without duplicating the source model.',
  'TypeScript generics': '```ts\nfunction first<T>(items: readonly T[]): T | undefined {\n  return items[0]\n}\nconst user = first([{ id: "u1" }]) // { id: string } | undefined\n```\n\n`T` preserves the item type from the caller through the return value.',
  'TypeScript functions': '```ts\nfunction isError(value: unknown): value is Error {\n  return value instanceof Error\n}\ntry { throw new Error("Network failed") } catch (error) {\n  if (isError(error)) console.error(error.message)\n}\n```\n\nA type predicate safely narrows an `unknown` value after a runtime check.',
  'TypeScript architecture': '```ts\nconst ConfigSchema = z.object({ API_URL: z.string().url() })\nconst config = ConfigSchema.parse(import.meta.env)\n```\n\nTypes describe expected values; runtime validation protects the boundary where data enters the application.',
  'system design foundations': '```text\nBrowser → CDN → Web app → API gateway → services\n                 ↘ analytics / error monitoring\n```\n\nStart with the request path, then add only the components required by the clarified requirements.',
  'frontend performance design': '```js\nconst ProductGallery = lazy(() => import("./ProductGallery"))\n// render it behind <Suspense> after the primary product information\n```\n\nThis defers non-critical code so the primary content can become interactive sooner.',
  'frontend data design': '```ts\nconst key = ["product", productId]\nconst product = await cache.getOrFetch(key, () => api.getProduct(productId))\n```\n\nA stable cache key identifies the resource; invalidation happens after mutations that affect it.',
  'real-time frontend design': '```ts\nif (event.sequence > lastSequence) {\n  apply(event)\n  lastSequence = event.sequence\n}\n```\n\nA monotonic sequence number lets the client ignore duplicate or out-of-order events.',
  'frontend architecture design': '```text\nfeatures/checkout/      # user-facing workflow\nshared/ui/              # accessible primitives\nplatform/api/           # transport and auth boundary\n```\n\nFeature ownership stays clear while shared code is limited to genuinely reusable contracts.',
  'behavioral introduction': '```text\nPresent: I lead frontend delivery for checkout.\nPast: I improved conversion by simplifying a slow payment flow.\nFuture: This role lets me apply that product and performance experience at larger scale.\n```\n\nKeep the answer to roughly one or two minutes and adapt the final sentence to the role.',
  'behavioral collaboration': '```text\nSituation: API and UI teams disagreed on the error contract.\nTask: Ship without hiding actionable failures.\nAction: I proposed examples, facilitated a short decision meeting, and documented the contract.\nResult: We shipped on time and reduced support tickets by 30%.\n```\n\nUse concrete actions and results; do not frame teammates as the problem.',
  'behavioral ownership': '```text\nSituation: A release was at risk because a dependency changed late.\nAction: I surfaced the risk, proposed a fallback, and coordinated a scoped release.\nResult: We met the date without compromising the critical workflow.\n```\n\nOwnership means making the next safe action clear, not silently taking every task yourself.',
  'behavioral leadership': '```text\nI set a clear quality bar, paired with two engineers on the approach,\nand used a lightweight review checklist. The team later adopted it for all releases.\n```\n\nExplain how you created alignment and enabled others, not just what you personally delivered.',
  'behavioral culture': '```text\nI do my best work in a candid, low-ego environment: people challenge ideas\ndirectly, share context early, and follow through on commitments.\n```\n\nMake your answer specific and positive; avoid presenting a preference as a criticism of past teams.',
}

const TRACKS: TrackConfig[] = [
  {
    id: 'react',
    label: 'React',
    urlSegment: 'react-interview-questions',
    count: 100,
    subcategories: [
      { slug: 'basics', label: 'React Basics', topic: 'React fundamentals' },
      { slug: 'hooks', label: 'Hooks', topic: 'React hooks' },
      { slug: 'state-management', label: 'State Management', topic: 'React state' },
      { slug: 'performance', label: 'Performance Optimization', topic: 'React performance' },
      { slug: 'react-router', label: 'React Router', topic: 'React Router' },
      { slug: 'context-api', label: 'Context API', topic: 'React Context' },
      { slug: 'redux', label: 'Redux', topic: 'Redux' },
      { slug: 'advanced', label: 'Advanced React', topic: 'advanced React patterns' },
      { slug: 'architecture', label: 'React Architecture', topic: 'React architecture' },
      { slug: 'coding-challenges', label: 'React Coding Challenges', topic: 'React coding' },
    ],
  },
  {
    id: 'angular',
    label: 'Angular',
    urlSegment: 'angular-interview-questions',
    count: 100,
    subcategories: [
      { slug: 'basics', label: 'Angular Basics', topic: 'Angular fundamentals' },
      { slug: 'components', label: 'Components', topic: 'Angular components' },
      { slug: 'services', label: 'Services', topic: 'Angular services' },
      { slug: 'dependency-injection', label: 'Dependency Injection', topic: 'Angular DI' },
      { slug: 'rxjs', label: 'RxJS', topic: 'RxJS in Angular' },
      { slug: 'routing', label: 'Routing', topic: 'Angular routing' },
      { slug: 'state-management', label: 'State Management', topic: 'Angular state' },
      { slug: 'signals', label: 'Angular Signals', topic: 'Angular signals' },
      { slug: 'performance', label: 'Performance', topic: 'Angular performance' },
      { slug: 'architecture', label: 'Angular Architecture', topic: 'Angular architecture' },
    ],
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    urlSegment: 'javascript-interview-questions',
    count: 100,
    subcategories: [
      { slug: 'basics', label: 'JavaScript Basics', topic: 'JavaScript fundamentals' },
      { slug: 'functions', label: 'Functions & Scope', topic: 'functions and scope' },
      { slug: 'async', label: 'Async JavaScript', topic: 'async JavaScript' },
      { slug: 'prototypes', label: 'Prototypes & OOP', topic: 'prototypes' },
      { slug: 'es6', label: 'ES6+ Features', topic: 'modern JavaScript' },
      { slug: 'dom', label: 'DOM & Browser APIs', topic: 'the DOM' },
      { slug: 'performance', label: 'Performance', topic: 'JavaScript performance' },
      { slug: 'security', label: 'Security', topic: 'web security' },
      { slug: 'patterns', label: 'Design Patterns', topic: 'JavaScript patterns' },
      { slug: 'coding-challenges', label: 'Coding Challenges', topic: 'JavaScript coding' },
    ],
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    urlSegment: 'typescript-interview-questions',
    count: 50,
    subcategories: [
      { slug: 'basics', label: 'TypeScript Basics', topic: 'TypeScript fundamentals' },
      { slug: 'interfaces', label: 'Interfaces & Object Types', topic: 'TypeScript object types' },
      { slug: 'generics', label: 'Generics', topic: 'TypeScript generics' },
      { slug: 'functions', label: 'Functions & Narrowing', topic: 'TypeScript functions' },
      { slug: 'architecture', label: 'Project Architecture', topic: 'TypeScript architecture' },
    ],
  },
  {
    id: 'system-design',
    label: 'Frontend System Design',
    urlSegment: 'frontend-system-design',
    count: 50,
    subcategories: [
      { slug: 'requirements', label: 'Requirements & Estimation', topic: 'system design foundations' },
      { slug: 'performance', label: 'Performance & Delivery', topic: 'frontend performance design' },
      { slug: 'data', label: 'Data & Caching', topic: 'frontend data design' },
      { slug: 'realtime', label: 'Real-time Experiences', topic: 'real-time frontend design' },
      { slug: 'architecture', label: 'Architecture & Operations', topic: 'frontend architecture design' },
    ],
  },
  {
    id: 'hr',
    label: 'HR Interview Questions',
    urlSegment: 'hr-interview-questions',
    count: 50,
    subcategories: [
      { slug: 'introduction', label: 'Introduction & Motivation', topic: 'behavioral introduction' },
      { slug: 'collaboration', label: 'Collaboration', topic: 'behavioral collaboration' },
      { slug: 'ownership', label: 'Ownership & Judgment', topic: 'behavioral ownership' },
      { slug: 'leadership', label: 'Leadership', topic: 'behavioral leadership' },
      { slug: 'culture', label: 'Culture & Self-awareness', topic: 'behavioral culture' },
    ],
  },
  {
    id: 'frontend', label: 'Frontend', urlSegment: 'frontend-interview-questions', count: 80,
    subcategories: [
      { slug: 'html', label: 'HTML', topic: 'HTML' }, { slug: 'css', label: 'CSS', topic: 'CSS' },
      { slug: 'next-js', label: 'Next.js', topic: 'Next.js' }, { slug: 'redux', label: 'Redux', topic: 'Redux' },
      { slug: 'rxjs', label: 'RxJS', topic: 'RxJS' }, { slug: 'performance', label: 'Web Performance', topic: 'web performance' },
      { slug: 'security', label: 'Web Security', topic: 'web security' }, { slug: 'accessibility', label: 'Accessibility', topic: 'web accessibility' },
    ],
  },
  {
    id: 'backend', label: 'Backend', urlSegment: 'backend-interview-questions', count: 70,
    subcategories: [
      { slug: 'node-js', label: 'Node.js', topic: 'Node.js' }, { slug: 'express', label: 'Express', topic: 'Express' },
      { slug: 'java', label: 'Java', topic: 'Java' }, { slug: 'spring-boot', label: 'Spring Boot', topic: 'Spring Boot' },
      { slug: 'python', label: 'Python', topic: 'Python' }, { slug: 'rest-api', label: 'REST API', topic: 'REST API design' },
      { slug: 'graphql', label: 'GraphQL', topic: 'GraphQL' },
    ],
  },
  {
    id: 'database', label: 'Database', urlSegment: 'database-interview-questions', count: 40,
    subcategories: [
      { slug: 'sql', label: 'SQL', topic: 'SQL' }, { slug: 'postgresql', label: 'PostgreSQL', topic: 'PostgreSQL' },
      { slug: 'mongodb', label: 'MongoDB', topic: 'MongoDB' }, { slug: 'redis', label: 'Redis', topic: 'Redis' },
    ],
  },
  {
    id: 'devops', label: 'DevOps & Cloud', urlSegment: 'devops-cloud-interview-questions', count: 70,
    subcategories: [
      { slug: 'git', label: 'Git', topic: 'Git' }, { slug: 'docker', label: 'Docker', topic: 'Docker' },
      { slug: 'kubernetes', label: 'Kubernetes', topic: 'Kubernetes' }, { slug: 'aws', label: 'AWS', topic: 'AWS' },
      { slug: 'azure', label: 'Azure', topic: 'Azure' }, { slug: 'ci-cd', label: 'CI/CD', topic: 'CI/CD' },
      { slug: 'github-actions', label: 'GitHub Actions', topic: 'GitHub Actions' },
    ],
  },
  {
    id: 'architecture', label: 'Architecture', urlSegment: 'architecture-interview-questions', count: 40,
    subcategories: [
      { slug: 'microservices', label: 'Microservices', topic: 'microservices' },
      { slug: 'distributed-systems', label: 'Distributed Systems', topic: 'distributed systems' },
      { slug: 'api-design', label: 'API Design', topic: 'API design' },
      { slug: 'design-patterns', label: 'Design Patterns', topic: 'design patterns' },
    ],
  },
]

function loadOverrides(): Map<string, QuestionRecord> {
  const dir = path.join(CONTENT, 'questions', 'overrides')
  const map = new Map<string, QuestionRecord>()
  if (!fs.existsSync(dir)) return map
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.yaml') && !file.endsWith('.yml')) continue
    const raw = fs.readFileSync(path.join(dir, file), 'utf8')
    const parsed = OverrideSchema.parse(YAML.parse(raw))
    parsed.body = appendCopyableExample(
      parsed.body,
      parsed.title,
      `${parsed.track}:${parsed.subcategory}`,
      parsed.trackLabel,
      parsed.answerExcerpt,
    )
    const link = `/${parsed.trackPath}/${parsed.subcategory}/${parsed.slug}`
    map.set(`${parsed.track}:${parsed.subcategory}:${parsed.slug}`, { ...parsed, link })
  }
  return map
}

function templateBody(
  title: string,
  topic: string,
  difficulty: string,
  trackLabel: string,
): { body: string; excerpt: string } {
  const primer = TOPIC_PRIMERS[topic] ??
    `${topic} interview answers should make the system boundary, the default behaviour, and the important trade-offs explicit. Ground the explanation in a concrete use case rather than listing terminology.`
  const answer = CURATED_ANSWERS[title] ?? primer
  const isBehavioral = topic.startsWith('behavioral ')
  const explanation = isBehavioral
    ? behavioralTeachingBody(title, topic, answer, difficulty)
    : technicalTeachingBody(title, topic, trackLabel, answer, primer, difficulty)
  const excerpt = answer
  const body = `## Answer

${explanation}

${copyableExample(title, topic, trackLabel, answer)}
`
  return { body, excerpt }
}

function appendCopyableExample(
  body: string,
  title: string,
  topic: string,
  trackLabel: string,
  answer: string,
): string {
  if (body.includes('## Copyable example')) return body
  return `${body.trim()}\n\n${copyableExample(title, topic, trackLabel, answer)}\n`
}

function copyableExample(
  title: string,
  topic: string,
  trackLabel: string,
  answer: string,
): string {
  const question = title.replace(/`/g, '')
  const rule = answer.replace(/`/g, '').replace(/\s+/g, ' ')
  const id = `${trackLabel}-${question}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  const q = JSON.stringify(question)
  const r = JSON.stringify(rule)

  if (trackLabel === 'JavaScript') {
    return languageExample('js', question, id, rule)
  }

  if (trackLabel === 'React') {
    return reactQuestionExample(question, topic)
  }

  if (trackLabel === 'Angular') {
    const topicExample = topicLanguageExample(topic, question, id)
    if (topicExample) return topicExample
    return angularTopicExample(question, topic, id, rule)
  }

  if (trackLabel === 'TypeScript') {
    const topicExample = topicLanguageExample(topic, question, id)
    if (topicExample) return topicExample
    return typescriptTopicExample(question, topic, id, rule)
  }

  if (['Frontend', 'Backend', 'Database', 'DevOps & Cloud'].includes(trackLabel)) {
    const topicExample = topicLanguageExample(topic, question, id)
    if (topicExample) return topicExample
  }

  if (trackLabel === 'Backend' && /Node\.js|Express|REST API/i.test(topic)) {
    return languageExample('js', question, id, rule)
  }

  if (trackLabel === 'Backend' && /GraphQL/i.test(topic)) {
    return `## Copyable example

\`\`\`graphql
# ${question}
query InterviewExample {
  __typename
}
\`\`\`

Use this GraphQL operation as the starting point, then add the fields, arguments, variables, or mutation behavior discussed in the answer.`
  }

  if (trackLabel === 'Database' && /MongoDB/i.test(topic)) {
    return `## Copyable example

\`\`\`javascript
// ${question}
db.interview_examples.updateOne(
  { _id: ${JSON.stringify(id)} },
  { $set: { question: ${q}, rule: ${r} } },
  { upsert: true },
)

db.interview_examples.findOne({ _id: ${JSON.stringify(id)} })
\`\`\`

Run this in mongosh and adapt the document shape, query, index, or update operation to the behavior described in the answer.`
  }

  if (trackLabel === 'Database' && /Redis/i.test(topic)) {
    return `## Copyable example

\`\`\`bash
# ${question}
redis-cli SET ${id}:rule ${JSON.stringify(rule)} EX 300
redis-cli GET ${id}:rule
redis-cli TTL ${id}:rule
\`\`\`

This Redis CLI example is copyable and makes expiry observable; adapt the command and data structure to the exact operation discussed in the answer.`
  }

  if (topic.startsWith('behavioral ') || trackLabel === 'HR Interview Questions') {
    return `## Copyable example

\`\`\`text
Question: ${question}
Situation: [Give only the context needed to understand the stakes.]
Task: [State the outcome you personally owned.]
Action: [Explain 2–3 decisions you made and why.]
Result: [Give the measurable or observable outcome.]
Lesson: [Say what you learned or changed afterward.]
\`\`\`

Copy this STAR outline and replace every bracketed line with evidence from your own experience.`
  }

  if (/system design|architecture|microservices|distributed systems/i.test(`${topic} ${trackLabel}`)) {
    return `## Copyable example

\`\`\`text
# ${question}
Requirement: define the user-visible outcome and scale
Boundary: identify the component that owns the behavior
Decision: ${rule}
Failure case: describe timeout, retry, partial failure, or rollback behavior
Verification: name the test, log, metric, or user signal that proves it works
Example ID: ${id}
\`\`\`

This is a copy-ready design-answer skeleton. Replace the requirement and failure case with the constraints given by the interviewer.`
  }

  if (/SQL|PostgreSQL|database/i.test(`${topic} ${trackLabel}`)) {
    const sqlRule = rule.replace(/'/g, "''")
    return `## Copyable example

\`\`\`sql
-- ${question}
-- Adapt the schema and query to the problem being discussed.
WITH interview_example(question_id, core_rule) AS (
  VALUES ('${id}', '${sqlRule}')
)
SELECT question_id, core_rule
FROM interview_example;
\`\`\`

The CTE makes the exact rule for this question executable and easy to extend with sample tables, indexes, transactions, or query-plan checks.`
  }

  if (/Python/i.test(`${topic} ${trackLabel}`)) {
    return `## Copyable example

\`\`\`python
# ${question}
example = {
    "id": ${JSON.stringify(id)},
    "rule": ${r},
    "checks": ["happy path", "invalid input", "relevant failure path"],
}

def explain(item: dict) -> str:
    return f"{item['id']}: {item['rule']}"

print(explain(example))
\`\`\`

Keep the rule beside the checks while adapting this scaffold into a focused Python demonstration or test.`
  }

  if (/Java|Spring Boot/i.test(`${topic} ${trackLabel}`)) {
    return `## Copyable example

\`\`\`java
// ${question}
record InterviewExample(String id, String rule, String[] checks) {}

var example = new InterviewExample(
    ${JSON.stringify(id)},
    ${r},
    new String[] { "happy path", "invalid input", "relevant failure path" }
);

System.out.println(example.rule());
\`\`\`

Use the record as a starting point for a focused Java unit test or Spring integration example for this exact question.`
  }

  if (/Docker/i.test(topic)) {
    return `## Copyable example

\`\`\`dockerfile
# ${question}
# Rule: ${rule}
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
USER node
CMD ["node", "server.js"]
\`\`\`

Copy this Dockerfile as a baseline, then change the instruction directly related to the question and verify the resulting image or container behavior.`
  }

  if (/Kubernetes/i.test(topic)) {
    return `## Copyable example

\`\`\`yaml
# ${question}
apiVersion: v1
kind: ConfigMap
metadata:
  name: ${id.slice(0, 50)}
data:
  core-rule: ${JSON.stringify(rule)}
  verification: "test the happy path and one relevant failure path"
\`\`\`

This valid manifest provides a copyable place to record and adapt the Kubernetes behavior discussed in the answer.`
  }

  if (/Git|CI\/CD|GitHub Actions|AWS|Azure/i.test(topic)) {
    return `## Copyable example

\`\`\`bash
# ${question}
QUESTION_ID=${JSON.stringify(id)}
CORE_RULE=${JSON.stringify(rule)}
printf '%s\\n' "$QUESTION_ID" "$CORE_RULE"
# Add the command from the answer, then verify its exit status and output.
\`\`\`

The shell scaffold is safe to copy and keeps the question-specific rule visible beside the command being tested.`
  }

  return `## Copyable example

\`\`\`ts
// ${question}
const interviewExample = {
  id: ${JSON.stringify(id)},
  rule: ${r},
  checks: ["happy path", "invalid input", "relevant failure path"],
} as const

function explainExample(example: typeof interviewExample) {
  return \`${'${example.id}'}: ${'${example.rule}'}\`
}

console.log(explainExample(interviewExample))
\`\`\`

Copy this TypeScript scaffold and replace the verification array with the concrete inputs and expected outputs described by the question.`
}

function topicLanguageExample(topic: string, question: string, id: string): string | undefined {
  const source = EXAMPLES[topic]
  if (!source) return undefined
  const match = source.match(/```([^\n]*)\n([\s\S]*?)```/)
  if (!match) return undefined

  const [, language, originalCode] = match
  const comment = ['html', 'xml'].includes(language)
    ? `<!-- ${question} | ${id} -->`
    : ['css'].includes(language)
      ? `/* ${question} | ${id} */`
      : ['sql'].includes(language)
        ? `-- ${question} | ${id}`
        : ['bash', 'sh', 'shell', 'dockerfile', 'yaml', 'yml', 'python'].includes(language)
          ? `# ${question} | ${id}`
        : `// ${question} | ${id}`
  const explanation = source.slice(match.index! + match[0].length).trim()

  return `## Copyable example

\`\`\`${language}
${comment}
${originalCode.trim()}
\`\`\`

${explanation}`
}

function reactQuestionExample(question: string, topic: string): string {
  const examples: Record<string, string> = {
    'What is React and what problems does it solve?': 'function App() { const [name, setName] = useState("Ada"); return <main><input value={name} onChange={e => setName(e.target.value)} /><Greeting name={name} /></main> }',
    'What is the Virtual DOM?': 'const before = <h1>Hello</h1>\nconst after = <h1>Hello, Ada</h1> // React reconciles these element trees',
    'What is reconciliation in React?': 'function Row({ item }) { return <li>{item.name}</li> }\nconst list = items.map(item => <Row key={item.id} item={item} />)',
    'What is JSX?': 'const name = "Ada"\nconst heading = <h1 className="title">Hello, {name}</h1>',
    'What is the difference between props and state?': 'function Counter({ step }) {\n  const [count, setCount] = useState(0)\n  return <button onClick={() => setCount(c => c + step)}>{count}</button>\n}',
    'What causes a React component to re-render?': 'function Parent() {\n  const [count, setCount] = useState(0)\n  return <button onClick={() => setCount(c => c + 1)}><Child count={count} /></button>\n}',
    'What are keys and why are they important?': 'const rows = users.map(user => <UserRow key={user.id} user={user} />)',
    'What is a controlled component?': 'function NameField() {\n  const [name, setName] = useState("")\n  return <input value={name} onChange={e => setName(e.target.value)} />\n}',
    'What is an uncontrolled component?': 'function Form() {\n  const inputRef = useRef(null)\n  return <form onSubmit={() => console.log(inputRef.current.value)}><input ref={inputRef} /></form>\n}',
    'What is React Strict Mode?': 'createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>)',
    'What are the Rules of Hooks?': 'function Profile() {\n  const [user, setUser] = useState(null) // top level, never inside a condition\n  useEffect(() => { loadUser().then(setUser) }, [])\n  return user && <h1>{user.name}</h1>\n}',
    'Explain the useState Hook.': 'const [count, setCount] = useState(0)\nsetCount(current => current + 1)',
    'Explain the useEffect Hook.': 'useEffect(() => {\n  const controller = new AbortController()\n  fetch(url, { signal: controller.signal })\n  return () => controller.abort()\n}, [url])',
    'Explain the useEffect Hook': 'useEffect(() => {\n  const controller = new AbortController()\n  fetch(url, { signal: controller.signal })\n  return () => controller.abort()\n}, [url])',
    'What is the difference between useEffect and useLayoutEffect?': 'useLayoutEffect(() => {\n  const { height } = ref.current.getBoundingClientRect()\n  setTooltipY(height) // measured before paint, avoiding a visible jump\n}, [])',
    'When should you use useMemo?': 'const sortedRows = useMemo(() => expensiveSort(rows, sortBy), [rows, sortBy])',
    'When should you use useCallback?': 'const handleSave = useCallback(() => save(documentId), [documentId])\nreturn <MemoizedToolbar onSave={handleSave} />',
    'What is useRef used for?': 'const inputRef = useRef(null)\nreturn <><input ref={inputRef} /><button onClick={() => inputRef.current.focus()}>Focus</button></>',
    'How do you build a custom Hook?': 'function useOnlineStatus() {\n  const [online, setOnline] = useState(navigator.onLine)\n  useEffect(() => { addEventListener("online", () => setOnline(true)) }, [])\n  return online\n}',
    'How do stale closures happen in Hooks?': 'useEffect(() => {\n  const id = setInterval(() => setCount(c => c + 1), 1000)\n  return () => clearInterval(id)\n}, [])',
    'How do you avoid an infinite effect loop?': 'const options = useMemo(() => ({ roomId }), [roomId])\nuseEffect(() => connect(options), [options])',
    'Where should state live in a React application?': 'function CartPage() {\n  const [items, setItems] = useState([])\n  return <><Cart items={items} /><AddItem onAdd={item => setItems(x => [...x, item])} /></>\n}',
    'What is lifting state up?': 'function Temperature() {\n  const [celsius, setCelsius] = useState(0)\n  return <><Celsius value={celsius} onChange={setCelsius} /><Fahrenheit value={celsius * 9 / 5 + 32} /></>\n}',
    'What is derived state and why should you avoid storing it?': 'const [first, setFirst] = useState("")\nconst [last, setLast] = useState("")\nconst fullName = `${first} ${last}` // derive during render',
    'How do you update nested state immutably?': 'setUser(user => ({ ...user, address: { ...user.address, city: "Pune" } }))',
    'What is state colocation?': 'function SearchBox() {\n  const [query, setQuery] = useState("") // only SearchBox needs it\n  return <input value={query} onChange={e => setQuery(e.target.value)} />\n}',
    'When is Context appropriate for state?': 'const ThemeContext = createContext("light")\n<ThemeContext.Provider value="dark"><App /></ThemeContext.Provider>',
    'When should you use a client-state library?': 'const useCart = create(set => ({ items: [], add: item => set(s => ({ items: [...s.items, item] })) }))',
    'How do you model async request state?': 'const [request, setRequest] = useState({ status: "idle", data: null, error: null })',
    'What is optimistic UI?': 'const optimisticTodos = useOptimistic(todos, (state, todo) => [...state, { ...todo, pending: true }])',
    'How do you prevent race conditions in state updates?': 'useEffect(() => {\n  const controller = new AbortController()\n  fetch(`/users/${id}`, { signal: controller.signal }).then(r => r.json()).then(setUser)\n  return () => controller.abort()\n}, [id])',
    'How do you diagnose unnecessary React re-renders?': 'function Row(props) { console.count(`Row ${props.id} render`); return <div>{props.name}</div> }',
    'What does React.memo do?': 'const UserRow = memo(function UserRow({ user }) { return <div>{user.name}</div> })',
    'What are the limits of useMemo and useCallback?': 'const total = useMemo(() => calculateTotal(items), [items]) // optimization, not correctness',
    'How do you virtualize a large list?': '<FixedSizeList height={500} itemCount={items.length} itemSize={40}>{({ index, style }) => <div style={style}>{items[index].name}</div>}</FixedSizeList>',
    'What is code splitting with lazy and Suspense?': 'const Settings = lazy(() => import("./Settings"))\n<Suspense fallback={<Spinner />}><Settings /></Suspense>',
    'How do you optimize Context consumers?': 'const ThemeContext = createContext(null)\nconst UserContext = createContext(null) // split unrelated update frequencies',
    'How do stable keys improve rendering?': '{todos.map(todo => <TodoRow key={todo.id} todo={todo} />)}',
    'What is concurrent rendering?': 'const [isPending, startTransition] = useTransition()\nstartTransition(() => setQuery(nextQuery))',
    'How do you optimize expensive calculations?': 'const result = useMemo(() => runExpensiveAlgorithm(input), [input])',
    'How do you profile a React app?': '<Profiler id="SearchResults" onRender={(id, phase, duration) => log(duration)}><SearchResults /></Profiler>',
    'What is client-side routing?': '<BrowserRouter><Routes><Route path="/products/:id" element={<Product />} /></Routes></BrowserRouter>',
    'How do nested routes work in React Router?': '<Route path="projects" element={<ProjectsLayout />}><Route path=":id" element={<Project />} /></Route>',
    'What is an outlet?': 'function DashboardLayout() { return <><DashboardNav /><main><Outlet /></main></> }',
    'How do route parameters work?': 'function Product() { const { productId } = useParams(); return <h1>{productId}</h1> }',
    'How do you protect a route?': 'function ProtectedRoute() { const user = useUser(); return user ? <Outlet /> : <Navigate to="/login" replace /> }',
    'How do you navigate programmatically?': 'const navigate = useNavigate()\nawait saveForm()\nnavigate("/success", { replace: true })',
    'What are loaders and actions?': 'export async function loader({ params }) { return fetch(`/api/projects/${params.id}`) }\nexport async function action({ request }) { return save(await request.formData()) }',
    'How do you handle a 404 route?': '<Routes><Route path="*" element={<NotFound />} /></Routes>',
    'How do you preserve query parameters?': 'const [params, setParams] = useSearchParams()\nsetParams(previous => { previous.set("page", "2"); return previous })',
    'How do you split route bundles?': 'const Reports = lazy(() => import("./routes/Reports"))\n<Route path="reports" element={<Suspense fallback={<Spinner />}><Reports /></Suspense>} />',
  }
  const snippet = examples[question]
  if (!snippet) return reactAdvancedExample(question, topic)
  return `## Copyable example\n\n\`\`\`jsx\n// ${question}\n// Section: ${topic}\n${snippet}\n\`\`\`\n\nThis example demonstrates the React behavior discussed in the answer and can be adapted directly in a component or route.`
}

function reactAdvancedExample(question: string, topic: string): string {
  const snippets: Record<string, string> = {
    'What problem does the Context API solve?': 'const Locale = createContext("en")\n<Locale.Provider value="fr"><DeepTree /></Locale.Provider>',
    'How do you create and consume Context?': 'const Theme = createContext(null)\nfunction Button() { const theme = useContext(Theme); return <button className={theme}>Save</button> }',
    'How does Context affect re-renders?': 'const value = useMemo(() => ({ user, logout }), [user, logout])\n<AuthContext.Provider value={value}><App /></AuthContext.Provider>',
    'How do you avoid Context performance problems?': 'const UserContext = createContext(null)\nconst ActionsContext = createContext(null) // split data from actions',
    'When should Context not replace a state manager?': 'const selectedTodo = useStore(state => state.todosById[id]) // selector-based subscription',
    'How do you test a component that consumes Context?': 'render(<ThemeContext.Provider value="dark"><Toolbar /></ThemeContext.Provider>)\nexpect(screen.getByRole("button")).toHaveClass("dark")',
    'How do you compose multiple providers?': 'function AppProviders({ children }) { return <AuthProvider><ThemeProvider>{children}</ThemeProvider></AuthProvider> }',
    'How do you give Context a safe default?': 'const AuthContext = createContext(null)\nfunction useAuth() { const v = useContext(AuthContext); if (!v) throw new Error("AuthProvider missing"); return v }',
    'How do you update Context from a child?': 'const CounterContext = createContext(null)\nfunction AddButton() { const { increment } = useContext(CounterContext); return <button onClick={increment}>+</button> }',
    'How do you split a large Context?': 'const ProfileContext = createContext(null)\nconst NotificationsContext = createContext(null)\nconst PreferencesContext = createContext(null)',
    'What are the core Redux principles?': 'const store = configureStore({ reducer: { todos: todosReducer } })\nstore.dispatch(todoAdded({ id: "1", text: "Prepare" }))',
    'What are actions, reducers, and the store?': 'const reducer = (state = 0, action) => action.type === "increment" ? state + 1 : state\nconst store = createStore(reducer); store.dispatch({ type: "increment" })',
    'Why must Redux reducers be pure?': 'const addTodo = (state, action) => ({ ...state, todos: [...state.todos, action.payload] })',
    'What is Redux Toolkit?': 'const counter = createSlice({ name: "counter", initialState: 0, reducers: { increment: state => state + 1 } })',
    'What is a selector?': 'const selectCompleted = createSelector([state => state.todos], todos => todos.filter(todo => todo.done))',
    'How do you handle async logic with Redux?': 'const loadUser = createAsyncThunk("users/load", id => fetch(`/api/users/${id}`).then(r => r.json()))',
    'What is middleware?': 'const logger = store => next => action => { console.log(action.type); return next(action) }',
    'What is normalized state?': 'const initialState = { ids: ["u1"], entities: { u1: { id: "u1", name: "Ada" } } }',
    'How do you avoid unnecessary Redux re-renders?': 'const total = useSelector(state => state.cart.total) // subscribe only to the required scalar',
    'When is Redux not a good fit?': 'function LocalDialog() { const [open, setOpen] = useState(false); return <Dialog open={open} onClose={() => setOpen(false)} /> }',
    'What are error boundaries?': 'class Boundary extends React.Component { state = { failed: false }; static getDerivedStateFromError() { return { failed: true } } render() { return this.state.failed ? <Fallback /> : this.props.children } }',
    'What are portals?': 'function Modal({ children }) { return createPortal(<div role="dialog">{children}</div>, document.body) }',
    'What is a render prop?': '<Mouse>{({ x, y }) => <p>{x}, {y}</p>}</Mouse>',
    'What is a higher-order component?': 'const withLoading = Component => props => props.loading ? <Spinner /> : <Component {...props} />',
    'What are compound components?': 'function Tabs({ children }) { const [active, setActive] = useState(0); return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider> }',
    'What is forwardRef?': 'const TextInput = forwardRef((props, ref) => <input ref={ref} {...props} />)',
    'What is useImperativeHandle?': 'useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }), [])',
    'What is hydration?': 'hydrateRoot(document.getElementById("root"), <App />)',
    'What is server-side rendering?': 'const html = renderToString(<ProductPage product={product} />)',
    'What is React Server Components?': 'export default async function Page() { const products = await db.product.findMany(); return <ProductList products={products} /> }',
    'How do you organize a scalable React project?': 'export { CheckoutPage } from "./features/checkout"\nexport { Button } from "./shared/ui/Button"',
    'How do you separate presentational and container concerns?': 'function UserContainer() { const user = useUser(); return <UserView user={user} /> }\nfunction UserView({ user }) { return <h1>{user.name}</h1> }',
    'How do you design reusable components?': 'function Button({ variant = "primary", children, ...props }) { return <button className={`btn btn-${variant}`} {...props}>{children}</button> }',
    'How do you handle feature flags?': 'return flags.newCheckout ? <NewCheckout /> : <LegacyCheckout />',
    'How do you define API boundaries in React?': 'const usersApi = { get: id => http.get(`/users/${id}`).then(UserSchema.parse) }\nfunction useUser(id) { return useQuery({ queryKey: ["user", id], queryFn: () => usersApi.get(id) }) }',
    'How do you make React code testable?': 'render(<SaveButton api={{ save: vi.fn().mockResolvedValue({ ok: true }) }} />)\nawait user.click(screen.getByRole("button", { name: /save/i }))',
    'How do you manage forms at scale?': 'const form = useForm({ resolver: zodResolver(UserSchema), defaultValues: { email: "" } })\n<form onSubmit={form.handleSubmit(save)}><input {...form.register("email")} /></form>',
    'How do you handle global errors?': '<ErrorBoundary fallback={<CrashPage />}><RouterProvider router={router} /></ErrorBoundary>',
    'How do you design a design-system component?': 'const Button = forwardRef(({ tone = "primary", ...props }, ref) => <button ref={ref} data-tone={tone} {...props} />)',
    'How do you migrate a legacy React application?': 'createRoot(document.getElementById("new-profile-root")).render(<ProfileApp userId={legacyUserId} />)',
    'Build a searchable, sortable React list.': 'const visible = useMemo(() => items.filter(x => x.name.includes(query)).toSorted((a, b) => a[sortKey].localeCompare(b[sortKey])), [items, query, sortKey])',
    'Build a debounced search input.': 'useEffect(() => { const id = setTimeout(() => onSearch(query), 300); return () => clearTimeout(id) }, [query, onSearch])',
    'Build a reusable modal component.': 'function Modal({ title, children, onClose }) { return createPortal(<div role="dialog" aria-modal="true" aria-label={title}><button onClick={onClose}>Close</button>{children}</div>, document.body) }',
    'Build a paginated data table.': 'const pageRows = rows.slice(page * pageSize, (page + 1) * pageSize)\nreturn <table><tbody>{pageRows.map(row => <Row key={row.id} row={row} />)}</tbody></table>',
    'Build a multi-step form.': 'const [step, setStep] = useState(0)\nreturn <form>{steps[step]}<button type="button" onClick={() => setStep(s => s + 1)}>Next</button></form>',
    'Build a toast notification system.': 'const [toasts, setToasts] = useState([])\nconst dismiss = id => setToasts(items => items.filter(item => item.id !== id))',
    'Build a custom useFetch Hook.': 'function useFetch(url) { const [state, setState] = useState({ loading: true }); useEffect(() => { const c = new AbortController(); fetch(url, { signal: c.signal }).then(r => r.json()).then(data => setState({ loading: false, data })); return () => c.abort() }, [url]); return state }',
    'Build a virtualized list.': '<FixedSizeList height={400} itemCount={items.length} itemSize={36}>{({ index, style }) => <div style={style}>{items[index].name}</div>}</FixedSizeList>',
    'Build an accessible tabs component.': '<div role="tablist">{tabs.map((tab, i) => <button role="tab" aria-selected={i === active} onKeyDown={handleArrowKeys}>{tab.label}</button>)}</div>',
    'Build an optimistic todo list.': 'const [optimisticTodos, addOptimistic] = useOptimistic(todos, (state, todo) => [...state, { ...todo, pending: true }])',
  }
  const snippet = snippets[question]
  if (!snippet) throw new Error(`Missing concept-specific React example for "${question}" (${topic})`)
  return `## Copyable example\n\n\`\`\`jsx\n// ${question}\n${snippet}\n\`\`\`\n\nThis JSX example is scoped to the ${topic} concept described in the answer.`
}

function angularTopicExample(question: string, topic: string, id: string, rule: string): string {
  const snippets: Record<string, string> = {
    'Angular fundamentals': '@Component({ selector: "app-profile", standalone: true, template: `<h1>{{ name }}</h1>` })\nexport class ProfileComponent { name = "Ada" }',
    'Angular components': '@Component({ selector: "app-counter", template: `<button (click)="changed.emit(count + 1)">{{ count }}</button>` })\nexport class CounterComponent { @Input() count = 0; @Output() changed = new EventEmitter<number>() }',
    'Angular services': '@Injectable({ providedIn: "root" })\nexport class UsersService { constructor(private http: HttpClient) {} get(id: string) { return this.http.get<User>(`/api/users/${id}`) } }',
    'Angular DI': 'export const API_URL = new InjectionToken<string>("API_URL")\nbootstrapApplication(AppComponent, { providers: [{ provide: API_URL, useValue: "/api" }] })',
    'RxJS in Angular': 'readonly results$ = this.query.valueChanges.pipe(debounceTime(250), distinctUntilChanged(), switchMap(query => this.api.search(query)))',
    'Angular routing': 'export const routes: Routes = [{ path: "projects/:id", loadComponent: () => import("./project.component").then(m => m.ProjectComponent) }]',
    'Angular state': 'readonly items = signal<CartItem[]>([])\nreadonly total = computed(() => this.items().reduce((sum, item) => sum + item.price, 0))',
    'Angular signals': 'readonly count = signal(0)\nreadonly doubled = computed(() => this.count() * 2)\nincrement() { this.count.update(value => value + 1) }',
    'Angular performance': '@Component({ changeDetection: ChangeDetectionStrategy.OnPush, template: `@for (user of users; track user.id) { <app-user [user]="user" /> }` })\nexport class UserList { @Input() users: User[] = [] }',
    'Angular architecture': '// feature boundary\nexport const PROJECT_ROUTES: Routes = [{ path: "", component: ProjectListComponent }]\n@Injectable() export class ProjectRepository {}',
  }
  const normalizedTopic = topic === 'angular:signals'
    ? 'Angular signals'
    : topic === 'angular:rxjs'
      ? 'RxJS in Angular'
      : topic
  const snippet = snippets[normalizedTopic]
  if (!snippet) throw new Error(`Missing Angular topic example for ${topic}: ${question}`)
  return `## Copyable example\n\n\`\`\`typescript\n// ${question}\n// ${rule}\n${snippet}\n\`\`\`\n\nThis Angular snippet uses the APIs and patterns from the ${normalizedTopic} section rather than a shared fallback component.`
}

function typescriptTopicExample(question: string, topic: string, id: string, rule: string): string {
  const snippets: Record<string, string> = {
    'TypeScript fundamentals': 'function format(value: string | number): string { return typeof value === "string" ? value.trim() : value.toFixed(0) }',
    'TypeScript object types': 'interface User { readonly id: string; name: string; role?: "admin" | "member" }\ntype UserPreview = Pick<User, "id" | "name">',
    'TypeScript generics': 'function first<T>(items: readonly T[]): T | undefined { return items[0] }\nconst user = first([{ id: "u1" }])',
    'TypeScript functions': 'function isError(value: unknown): value is Error { return value instanceof Error }\nfunction assertString(value: unknown): asserts value is string { if (typeof value !== "string") throw new TypeError() }',
    'TypeScript architecture': 'const ConfigSchema = z.object({ API_URL: z.string().url() })\ntype Config = z.infer<typeof ConfigSchema>\nconst config: Config = ConfigSchema.parse(import.meta.env)',
  }
  const snippet = snippets[topic]
  if (!snippet) throw new Error(`Missing TypeScript topic example for ${topic}: ${question}`)
  return `## Copyable example\n\n\`\`\`typescript\n// ${question}\n// ${rule}\n${snippet}\n\`\`\`\n\nThis example is selected from the ${topic} topic and uses TypeScript-specific syntax.`
}

function languageExample(
  language: 'js' | 'jsx' | 'angular' | 'ts',
  question: string,
  id: string,
  rule: string,
): string {
  const q = JSON.stringify(question)
  const r = JSON.stringify(rule)

  if (language === 'js') {
    const snippet = /async|promise|await|fetch|event loop|callback/i.test(question)
      ? `// ${question}\nasync function runExample(task) {\n  try {\n    const value = await task()\n    return { ok: true, value }\n  } catch (error) {\n    return { ok: false, error: String(error) }\n  }\n}\n\nrunExample(async () => ${r}).then(console.log)`
      : /prototype|class|inheritance|instanceof|new /i.test(question)
        ? `// ${question}\nfunction ConceptExample(value) {\n  this.value = value\n}\n\nConceptExample.prototype.explain = function () {\n  return this.value\n}\n\nconst example = new ConceptExample(${r})\nconsole.log(example.explain())`
        : /dom|event|attribute|worker|rendering|innerhtml|textcontent/i.test(question)
          ? `// ${question}\nconst output = document.createElement("pre")\noutput.dataset.example = ${JSON.stringify(id)}\noutput.textContent = ${r}\ndocument.body.append(output)\n\nconsole.assert(output.textContent.length > 0)`
          : /array|flatten|group|duplicate|clone|memoize|debounce|throttl|emitter/i.test(question)
            ? `// ${question}\nfunction demonstrate(values, transform) {\n  return values.map((value, index) => transform(value, index))\n}\n\nconst result = demonstrate([1, 2, 3], value => ({ value, rule: ${r} }))\nconsole.log(result)`
            : `// ${question}\nconst example = {\n  id: ${JSON.stringify(id)},\n  input: 0,\n  rule: ${r},\n  evaluate(value) {\n    return { value, type: typeof value, truthy: Boolean(value) }\n  },\n}\n\nconsole.log(example.evaluate(example.input))`

    return `## Copyable example\n\n\`\`\`js\n${snippet}\n\`\`\`\n\nRun this JavaScript example in a browser console or Node.js and change the input to explore the rule from this question.`
  }

  if (language === 'jsx') {
    const hook = /effect|subscription|timer|fetch/i.test(question)
      ? `useEffect(() => {\n    document.title = title\n    return () => { document.title = "Interview example" }\n  }, [title])`
      : `const [visible, setVisible] = useState(true)`
    return `## Copyable example

\`\`\`jsx
// ${question}
import { useEffect, useState } from "react"

export function Example() {
  const title = ${q}
  ${hook}

  return (
    <section data-example=${JSON.stringify(id)}>
      <h2>{title}</h2>
      <p>${r}</p>
      ${/effect|subscription|timer|fetch/i.test(question) ? '' : '<button onClick={() => setVisible(value => !value)}>Toggle</button>\n      {visible && <output>{title}</output>}' }
    </section>
  )
}
\`\`\`

This is JSX for the React track and can be pasted into a React component file for experimentation.`
  }

  if (language === 'angular') {
    return `## Copyable example

\`\`\`typescript
// ${question}
import { Component, computed, signal } from "@angular/core"

@Component({
  selector: "app-${id.slice(0, 35)}",
  standalone: true,
  template: \`<h2>{{ title }}</h2><p>{{ explanation() }}</p>\`,
})
export class ExampleComponent {
  readonly title = ${q}
  private readonly rule = signal(${r})
  readonly explanation = computed(() => this.rule())
}
\`\`\`

This Angular example uses valid component, signal, and template syntax instead of a React or generic TypeScript fallback.`
  }

  return `## Copyable example

\`\`\`typescript
// ${question}
type InterviewExample<TInput, TResult> = {
  readonly id: string
  readonly rule: string
  run(input: TInput): TResult
}

const example: InterviewExample<string, { input: string; rule: string }> = {
  id: ${JSON.stringify(id)},
  rule: ${r},
  run(input) {
    return { input, rule: this.rule }
  },
}

console.log(example.run(${q}))
\`\`\`

This example uses TypeScript-specific generics, readonly fields, and inferred method types.`
}

function technicalTeachingBody(
  title: string,
  topic: string,
  trackLabel: string,
  answer: string,
  primer: string,
  difficulty: string,
): string {
  const subject = title.replace(/`/g, '').replace(/[?.!]$/, '')
  const scenario = scenarioFor(title, topic, trackLabel)
  const comparison = /difference|compare|versus|\bvs\b/i.test(title)
  const implementation = /^(how|build|implement|design|write|create)/i.test(title)
  const decisionGuidance = comparison
    ? `Do not stop after listing definitions. Compare the alternatives along the dimensions that change an engineering decision: ownership, lifetime, failure behaviour, performance cost, and the conditions under which each option is the safer choice.`
    : implementation
      ? `A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly.`
      : `Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour.`

  return `${answer}

## Why this matters

The important idea behind **${subject}** is not the terminology alone; it is the engineering decision the concept enables. ${primer} In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

${decisionGuidance} For a ${difficulty}-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: ${answer} Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **${subject}**, not from a memorized checklist.

## Worked example

${scenario} In this ${trackLabel} example, the team needs to make a decision specifically about **${subject}**. They begin with the rule above—${answer} Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: ${answer} Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.`
}

function behavioralTeachingBody(
  title: string,
  topic: string,
  answer: string,
  difficulty: string,
): string {
  const subject = title.replace(/[?.!]$/, '').toLowerCase()
  const scenario = behavioralScenarioFor(title)

  return `${answer}

## What the interviewer is assessing

This question is testing evidence, judgment, and self-awareness—not whether you know a perfect phrase. The interviewer wants to understand how you behaved when the situation was real, what part you personally owned, and whether your actions produced a useful result. Your answer should therefore stay centered on **${subject}**. A story about a different competency may sound polished but will not answer the question.

Choose one recent example with enough tension to require a decision. Give only the context needed to understand the stakes, then spend most of the answer on your actions. Use “I” for your contribution and “we” for the team result. Honest constraints and a thoughtful lesson are stronger than presenting yourself as someone who never makes mistakes.

## How to structure the answer

Use STAR as an editing tool. In the **Situation**, establish the project, people, and risk in two or three sentences. In the **Task**, state what you were accountable for. The **Action** should be the largest section: explain what you noticed, the alternatives you considered, how you communicated, and why you chose that path. In the **Result**, quantify the outcome when possible and explain what changed afterward.

For this ${difficulty}-level question, include the reasoning behind at least one decision. Senior answers should also show how you improved the system or enabled other people, rather than describing only individual execution.

## Sample answer

${scenario}

Notice that the sample is specific to **${subject}**: it contains a clear problem, personal actions, and an outcome. Replace its details with your real experience. Never invent numbers you cannot defend; a concrete qualitative result, such as unblocking a launch or changing a team process, is better than a fabricated percentage.

## Common mistakes

Do not spend most of the response explaining background. Avoid blaming a colleague, claiming there was no disagreement, or saying only that the team solved the problem. Those choices hide the evidence the interviewer needs. Similarly, do not recite a general philosophy without a real event unless the question explicitly asks for a preference.

Keep the first version between one and two minutes. Pause after the result so the interviewer can choose the follow-up. Be ready to explain what you would do differently, what feedback you received, and how you know the outcome was successful.

## Interview-ready summary

The core guidance is: ${answer} Prepare the story as five short notes—context, responsibility, two or three actions, result, and lesson—rather than memorizing a script. That keeps the delivery natural while ensuring every sentence helps answer the actual question.`
}

function scenarioFor(title: string, topic: string, trackLabel: string): string {
  const contexts = [
    'Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly.',
    'Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers.',
    'Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects.',
    'Imagine an API used by both a browser client and a background worker, each with different latency and failure patterns.',
    'Consider a deployment pipeline where a small configuration error can affect many users and rollback must be predictable.',
    'Suppose an analytics screen must process a larger data set while remaining understandable, accessible, and observable.',
  ]
  const seed = [...`${title}:${topic}:${trackLabel}`].reduce((total, char) => total + char.charCodeAt(0), 0)
  return contexts[seed % contexts.length]
}

function behavioralScenarioFor(title: string): string {
  if (/conflict|disagreement|working styles/i.test(title)) {
    return 'Situation: Two engineers disagreed about changing an API contract shortly before release. Task: I owned the client integration and needed a decision that protected the deadline and error handling. Action: I wrote down both proposals with example payloads, separated launch requirements from later improvements, and facilitated a short review with the API owner. I acknowledged the valid concern in the alternative and proposed a backward-compatible field for the first release. Result: We shipped on schedule, recorded the follow-up work, and adopted contract examples in future design reviews.'
  }
  if (/mistake|failure|missed a deadline/i.test(title)) {
    return 'Situation: I underestimated an integration because I had not confirmed an external dependency. Task: I was responsible for the delivery date and for communicating the risk. Action: I raised the issue as soon as I verified it, reduced the release to a safe core path, paired with the dependency owner, and added an integration checkpoint to the plan. Result: The critical workflow shipped one day later with no customer data issues, and the new checkpoint prevented the same planning gap on later projects.'
  }
  if (/led|leadership|delegated|mentor|helped a teammate/i.test(title)) {
    return 'Situation: A team was delivering a high-risk feature while two engineers were new to the codebase. Task: I needed to create direction without becoming the bottleneck. Action: I split the work around clear interfaces, matched ownership to each person’s growth goal, held short design checkpoints, and used reviews to explain principles rather than rewrite solutions. Result: The feature launched successfully, both engineers independently owned later changes, and the team reused the interface checklist on subsequent projects.'
  }
  if (/prioritize|ambiguity|difficult decision|risk/i.test(title)) {
    return 'Situation: A release had three competing requests but capacity for only one before a customer deadline. Task: I was accountable for recommending scope. Action: I clarified the user impact, reversibility, and dependency risk of each option, shared the trade-off table with stakeholders, and proposed the smallest end-to-end workflow with a rollback plan. Result: The team aligned on scope in one meeting, delivered the critical journey, and scheduled the lower-impact requests with evidence rather than opinion.'
  }
  return 'Situation: My team needed to improve an important customer workflow with limited time and incomplete information. Task: I owned a clear outcome and alignment with the people affected. Action: I gathered the missing evidence, stated my assumptions, proposed a small next step, asked for direct feedback, and communicated progress until the work was complete. Result: We delivered the agreed outcome, documented what we learned, and changed the team’s process so the next similar decision was faster and clearer.'
}

function assertContentQuality(questions: QuestionRecord[]) {
  const owners = new Map<string, QuestionRecord>()
  const codeOwners = new Map<string, QuestionRecord>()
  const placeholderPhrases = [
    'Suppose a team is making a production decision about',
    'Choose the approach from the requirement and constraints, not from habit',
    'The right implementation depends on the system boundary and its constraints',
  ]

  for (const question of questions) {
    const plainText = question.body
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/[#*_`>|-]/g, ' ')
    const wordCount = plainText.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu)?.length ?? 0
    if (wordCount < 300) {
      throw new Error(`Answer for "${question.title}" has ${wordCount} words; minimum is 300`)
    }

    const placeholder = placeholderPhrases.find((phrase) => question.body.includes(phrase))
    if (placeholder) {
      throw new Error(`Placeholder content found in "${question.title}": ${placeholder}`)
    }

    const copyableSections = question.body.match(/## Copyable example\s+[\s\S]*?(?=\n## |$)/g) ?? []
    if (copyableSections.length !== 1) {
      throw new Error(
        `Answer for "${question.title}" has ${copyableSections.length} copyable examples; expected exactly 1`,
      )
    }
    const copyable = copyableSections[0]
    if (!/```[a-z-]*\n[\s\S]+?```/.test(copyable)) {
      throw new Error(`Copyable example for "${question.title}" does not contain a fenced block`)
    }
    const normalizedCode = copyable.replace(/\s+/g, ' ').trim().toLowerCase()
    const codeOwner = codeOwners.get(normalizedCode)
    if (codeOwner) {
      throw new Error(
        `Duplicate copyable example found in "${codeOwner.title}" and "${question.title}"`,
      )
    }
    codeOwners.set(normalizedCode, question)

    const example = question.body.match(
      /## (?:Worked example|Sample answer|Code Examples?|Example)\s+([\s\S]*?)(?=\n## |$)/,
    )?.[1]
    if (!example) continue

    const normalized = example.replace(/\s+/g, ' ').trim().toLowerCase()
    const existing = owners.get(normalized)
    if (existing) {
      throw new Error(
        `Duplicate example found in "${existing.title}" and "${question.title}"`,
      )
    }
    owners.set(normalized, question)
  }
}

function buildFrontmatter(q: QuestionRecord, prev?: QuestionRecord, next?: QuestionRecord) {
  const rt = readingTime(q.body)
  const link = q.link
  const canonical = `${SITE_URL}${link}`
  const lines = [
    '---',
    // A custom `layout: question` would make VitePress render an empty <question>
    // element unless a layout component with that name is registered.
    `layout: doc`,
    `question: true`,
    `title: ${JSON.stringify(q.title)}`,
    `questionTitle: ${JSON.stringify(q.title)}`,
    `description: ${JSON.stringify(q.description)}`,
    `difficulty: ${q.difficulty}`,
    `experienceLevel: ${q.experienceLevel}`,
    `tags: [${q.tags.map((t) => JSON.stringify(t)).join(', ')}]`,
    `updated: ${q.updated}`,
    `readingMinutes: ${Math.max(1, Math.ceil(rt.minutes))}`,
    `answerExcerpt: ${JSON.stringify(q.answerExcerpt)}`,
    `outline: deep`,
    `canonical: ${JSON.stringify(canonical)}`,
    'breadcrumbs:',
    `  - label: Home`,
    `    link: /`,
    `  - label: ${JSON.stringify(q.trackLabel)}`,
    `    link: /${q.trackPath}/`,
    `  - label: ${JSON.stringify(q.subcategoryLabel)}`,
    `    link: /${q.trackPath}/${q.subcategory}/`,
    `  - label: ${JSON.stringify(q.title)}`,
  ]
  if (prev) {
    lines.push('prev:', `  text: ${JSON.stringify(prev.title)}`, `  link: ${JSON.stringify(prev.link)}`)
  }
  if (next) {
    lines.push('next:', `  text: ${JSON.stringify(next.title)}`, `  link: ${JSON.stringify(next.link)}`)
  }
  lines.push('---', '')
  return lines.join('\n')
}

function generateTrack(track: TrackConfig, overrides: Map<string, QuestionRecord>) {
  const trackOverrides = [...overrides.values()].filter((o) => o.track === track.id)
  const questions: QuestionRecord[] = []

  for (let i = 0; i < track.count; i++) {
    const sub = track.subcategories[i % track.subcategories.length]
    const n = Math.floor(i / track.subcategories.length) + 1
    const slug = `${sub.slug}-question-${n}`
    const title = QUESTION_TITLES[track.id][sub.slug][n - 1]
    const difficulty = (['easy', 'medium', 'hard'] as const)[i % 3]
    const experienceLevel = (['junior', 'mid', 'senior'] as const)[i % 3]
    const { body, excerpt } = templateBody(title, sub.topic, difficulty, track.label)
    questions.push({
      slug,
      title,
      track: track.id,
      subcategory: sub.slug,
      subcategoryLabel: sub.label,
      trackLabel: track.label,
      trackPath: track.urlSegment,
      difficulty,
      experienceLevel,
      tags: [track.id, sub.slug],
      updated: '2026-10-06',
      description: `Learn ${title} with answers, examples, and real interview scenarios for ${track.label} interviews.`,
      answerExcerpt: excerpt,
      body,
      link: `/${track.urlSegment}/${sub.slug}/${slug}`,
    })
  }

  for (const o of trackOverrides) {
    const idx = questions.findIndex(
      (q) => q.subcategory === o.subcategory && q.slug === `${o.subcategory}-question-1`,
    )
    const record: QuestionRecord = {
      ...o,
      link: `/${track.urlSegment}/${o.subcategory}/${o.slug}`,
    }
    if (idx >= 0) questions[idx] = record
    else questions.push(record)
  }

  if (questions.length > track.count) {
    questions.length = track.count
  }

  const trackDir = path.join(DOCS, track.urlSegment)
  for (const sub of track.subcategories) {
    const subDir = path.join(trackDir, sub.slug)
    if (fs.existsSync(subDir)) {
      for (const file of fs.readdirSync(subDir)) {
        if (file.endsWith('.md') && file !== 'index.md') {
          fs.unlinkSync(path.join(subDir, file))
        }
      }
    }
  }

  for (let i = 0; i < questions.length; i++) {
    const prev = i > 0 ? questions[i - 1] : undefined
    const next = i < questions.length - 1 ? questions[i + 1] : undefined
    const q = questions[i]
    const outDir = path.join(DOCS, track.urlSegment, q.subcategory)
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(
      path.join(outDir, `${q.slug}.md`),
      `${buildFrontmatter(q, prev, next)}# ${q.title}\n\n${q.body}`,
    )
  }

  return questions
}

function writeTrackIndex(track: TrackConfig) {
  const dir = path.join(DOCS, track.urlSegment)
  fs.mkdirSync(dir, { recursive: true })
  const trackTitle = track.label.endsWith('Interview Questions')
    ? track.label
    : `${track.label} Interview Questions`
  const subs = track.subcategories
    .map(
      (s) =>
        `- [${s.label}](/${track.urlSegment}/${s.slug}/) — start with the first question in this track.`,
    )
    .join('\n')
  const content = `---
title: ${trackTitle}
description: ${track.count}+ ${track.label} interview questions with answers, code examples, and follow-ups.
---

# ${trackTitle}

Prepare for ${track.label} interviews with curated questions organized by topic.

## Subcategories

${subs}

## Premium packs

<AdSlot id="premium-track" provider="premium" />

`
  fs.writeFileSync(path.join(dir, 'index.md'), content)

  for (const sub of track.subcategories) {
    const subDir = path.join(dir, sub.slug)
    fs.mkdirSync(subDir, { recursive: true })
    const preferred = [
      'virtual-dom.md',
      'use-effect.md',
      'angular-signals.md',
      'subject-vs-behaviorsubject.md',
    ]
    const files = fs
      .readdirSync(subDir)
      .filter((f) => f.endsWith('.md') && f !== 'index.md')
    const first =
      preferred.find((p) => files.includes(p)) ??
      files.sort()[0]
    const link = first
      ? `/${track.urlSegment}/${sub.slug}/${first.replace(/\.md$/, '')}`
      : `/${track.urlSegment}/`
    fs.writeFileSync(
      path.join(subDir, 'index.md'),
      `---
title: ${sub.label}
description: ${track.label} ${sub.label} interview questions and answers.
---

# ${sub.label}

Browse questions in this section. [Start here](${link}).
`,
    )
  }
}

function buildSidebars(allQuestions: QuestionRecord[]) {
  const sidebars: Record<string, Array<{ text: string; link?: string; collapsed?: boolean; items?: unknown[] }>> = {}

  for (const track of TRACKS) {
    const key = `/${track.urlSegment}/`
    const groups = track.subcategories.map((sub) => {
      const items = allQuestions
        .filter((q) => q.trackPath === track.urlSegment && q.subcategory === sub.slug)
        .slice(0, 12)
        .map((q) => ({ text: q.title, link: q.link }))
      return {
        text: sub.label,
        collapsed: true,
        items: [
          { text: `All ${sub.label}`, link: `/${track.urlSegment}/${sub.slug}/` },
          ...items,
        ],
      }
    })
    sidebars[key] = [{ text: 'Overview', link: key }, ...groups]
  }

  return sidebars
}

function main() {
  const overrides = loadOverrides()
  const allQuestions: QuestionRecord[] = []

  for (const track of TRACKS) {
    const qs = generateTrack(track, overrides)
    allQuestions.push(...qs)
    writeTrackIndex(track)
  }

  assertContentQuality(allQuestions)

  const sidebars = buildSidebars(allQuestions)
  const latest = [...allQuestions]
    .sort((a, b) => b.updated.localeCompare(a.updated))
    .slice(0, 12)
    .map((q) => ({
      title: q.title,
      link: q.link,
      track: q.trackLabel,
      updated: q.updated,
    }))

  const manifest = {
    latest,
    sidebars,
    questionCount: allQuestions.length,
  }

  fs.mkdirSync(path.join(DOCS, '.vitepress'), { recursive: true })
  fs.writeFileSync(
    path.join(DOCS, '.vitepress', 'manifest.json'),
    JSON.stringify(manifest, null, 2),
  )
  fs.writeFileSync(
    path.join(CONTENT, 'manifest.json'),
    JSON.stringify(manifest, null, 2),
  )

  console.log(`Generated ${allQuestions.length} questions.`)
}

main()
