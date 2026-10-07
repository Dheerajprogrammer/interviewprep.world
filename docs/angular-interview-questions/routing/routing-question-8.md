---
layout: doc
question: true
title: "How do you redirect routes?"
questionTitle: "How do you redirect routes?"
description: "Learn How do you redirect routes? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a route with `redirectTo` and the correct `pathMatch` to map one URL to another. Keep redirects explicit and avoid broad prefix redirects that accidentally catch legitimate child paths."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "How do you redirect routes?"
prev:
  text: "How do you unsubscribe safely?"
  link: "/angular-interview-questions/rxjs/rxjs-question-8"
next:
  text: "What is entity state normalization?"
  link: "/angular-interview-questions/state-management/state-management-question-8"
---
# How do you redirect routes?

## Answer

Use a route with `redirectTo` and the correct `pathMatch` to map one URL to another. Keep redirects explicit and avoid broad prefix redirects that accidentally catch legitimate child paths.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
