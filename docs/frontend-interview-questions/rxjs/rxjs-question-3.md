---
layout: doc
question: true
title: "What is a Subject?"
questionTitle: "What is a Subject?"
description: "Learn What is a Subject? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Subject is both an Observable and an observer, so code can subscribe to it and push values with `next`. It is useful as a bridge for imperative events but should not become an uncontrolled global event bus."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "What is a Subject?"
prev:
  text: "Why must Redux reducers be pure?"
  link: "/frontend-interview-questions/redux/redux-question-3"
next:
  text: "How do you avoid Cumulative Layout Shift?"
  link: "/frontend-interview-questions/performance/performance-question-3"
---
# What is a Subject?

## Answer

A Subject is both an Observable and an observer, so code can subscribe to it and push values with `next`. It is useful as a bridge for imperative events but should not become an uncontrolled global event bus.

## Example

```ts
const results$ = query$.pipe(
  debounceTime(250),
  distinctUntilChanged(),
  switchMap(query => api.search(query))
)
```

`switchMap` ensures an older search result cannot overwrite a newer query.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
