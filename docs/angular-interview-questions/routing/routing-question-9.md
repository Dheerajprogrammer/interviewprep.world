---
layout: doc
question: true
title: "How do you handle a not-found route?"
questionTitle: "How do you handle a not-found route?"
description: "Learn How do you handle a not-found route? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Place a wildcard `**` route last and render a helpful not-found page or redirect intentionally. Do not hide missing resources behind a generic success page, because it complicates navigation and diagnostics."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "How do you handle a not-found route?"
prev:
  text: "What is the `async` pipe?"
  link: "/angular-interview-questions/rxjs/rxjs-question-9"
next:
  text: "How do signals fit state management?"
  link: "/angular-interview-questions/state-management/state-management-question-9"
---
# How do you handle a not-found route?

## Answer

Place a wildcard `**` route last and render a helpful not-found page or redirect intentionally. Do not hide missing resources behind a generic success page, because it complicates navigation and diagnostics.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
