---
layout: doc
question: true
title: "What is lazy loading?"
questionTitle: "What is lazy loading?"
description: "Learn What is lazy loading? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Lazy loading defers a route or feature bundle until navigation requires it. It reduces initial JavaScript, but loading UI and error handling must make the transition clear and reliable."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "What is lazy loading?"
prev:
  text: "What is a ReplaySubject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-5"
next:
  text: "Why should reducers be pure?"
  link: "/angular-interview-questions/state-management/state-management-question-5"
---
# What is lazy loading?

## Answer

Lazy loading defers a route or feature bundle until navigation requires it. It reduces initial JavaScript, but loading UI and error handling must make the transition clear and reliable.

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
