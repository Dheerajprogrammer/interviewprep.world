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
}

const TOPIC_PRIMERS: Record<string, string> = {
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
]

function loadOverrides(): Map<string, QuestionRecord> {
  const dir = path.join(CONTENT, 'questions', 'overrides')
  const map = new Map<string, QuestionRecord>()
  if (!fs.existsSync(dir)) return map
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.yaml') && !file.endsWith('.yml')) continue
    const raw = fs.readFileSync(path.join(dir, file), 'utf8')
    const parsed = OverrideSchema.parse(YAML.parse(raw))
    const link = `/${parsed.trackPath}/${parsed.subcategory}/${parsed.slug}`
    map.set(`${parsed.track}:${parsed.subcategory}:${parsed.slug}`, { ...parsed, link })
  }
  return map
}

function templateBody(
  title: string,
  topic: string,
  difficulty: string,
  index: number,
): { body: string; excerpt: string } {
  const primer = TOPIC_PRIMERS[topic]
  const example = EXAMPLES[topic]
  const excerpt = `${title} is a practical ${topic} interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs.`
  const body = `## Answer

${primer}

For **${title}**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

${example}

## How to structure your answer

1. Define the concept in one or two sentences.
2. Explain when you would use it and when you would choose an alternative.
3. Walk through a small example, including an edge case.
4. Close with how you would test or measure the result.

## Common mistakes

- Repeating a definition without connecting it to real code.
- Treating an optimization or abstraction as a default rather than a trade-off.
- Omitting lifecycle, error, cleanup, accessibility, or testing considerations when they apply.

## Follow-up prompts

- What failure mode would you expect if this were implemented incorrectly?
- How would you test this behaviour?
- What changes when the feature must scale to a larger application or team?

## Interview tip

For this ${difficulty}-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
`
  return { body, excerpt }
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
    const { body, excerpt } = templateBody(title, sub.topic, difficulty, n)
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
