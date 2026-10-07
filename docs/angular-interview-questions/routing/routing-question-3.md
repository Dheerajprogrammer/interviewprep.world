---
layout: doc
question: true
title: "What are route parameters and query parameters?"
questionTitle: "What are route parameters and query parameters?"
description: "Learn What are route parameters and query parameters? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Route parameters identify a resource in the path, such as `/projects/42`; query parameters modify a view, such as filtering or pagination. Validate both because URLs are untrusted external input."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "What are route parameters and query parameters?"
prev:
  text: "What is a Subject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-3"
next:
  text: "What is NgRx?"
  link: "/angular-interview-questions/state-management/state-management-question-3"
---
# What are route parameters and query parameters?

## Answer

Route parameters identify a resource in the path, such as `/projects/42`; query parameters modify a view, such as filtering or pagination. Validate both because URLs are untrusted external input.

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
