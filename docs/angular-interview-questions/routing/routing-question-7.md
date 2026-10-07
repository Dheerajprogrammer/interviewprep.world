---
layout: doc
question: true
title: "How do you create child routes?"
questionTitle: "How do you create child routes?"
description: "Learn How do you create child routes? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Declare a `children` array under a parent route and place a router outlet in the parent component. Child routes inherit the parent path and can share layout, guards, or providers."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "How do you create child routes?"
prev:
  text: "What do `debounceTime` and `distinctUntilChanged` do?"
  link: "/angular-interview-questions/rxjs/rxjs-question-7"
next:
  text: "How do you model loading and error state?"
  link: "/angular-interview-questions/state-management/state-management-question-7"
---
# How do you create child routes?

## Answer

Declare a `children` array under a parent route and place a router outlet in the parent component. Child routes inherit the parent path and can share layout, guards, or providers.

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
