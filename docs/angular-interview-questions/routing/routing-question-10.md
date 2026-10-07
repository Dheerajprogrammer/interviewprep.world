---
layout: doc
question: true
title: "How do you preload lazy modules?"
questionTitle: "How do you preload lazy modules?"
description: "Learn How do you preload lazy modules? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Configure a preloading strategy to fetch selected lazy routes after the initial route becomes stable. Preload likely next destinations, but measure network cost and avoid competing with critical user work."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "How do you preload lazy modules?"
prev:
  text: "How do you handle errors in RxJS?"
  link: "/angular-interview-questions/rxjs/rxjs-question-10"
next:
  text: "When should you avoid a global store?"
  link: "/angular-interview-questions/state-management/state-management-question-10"
---
# How do you preload lazy modules?

## Answer

Configure a preloading strategy to fetch selected lazy routes after the initial route becomes stable. Preload likely next destinations, but measure network cost and avoid competing with critical user work.

## Example

```ts
const routes: Routes = [
  { path: "projects/:id", component: ProjectComponent },
  { path: "", pathMatch: "full", redirectTo: "projects/1" }
]
```

Route parameters describe resource identity; redirects make a clear default URL.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
