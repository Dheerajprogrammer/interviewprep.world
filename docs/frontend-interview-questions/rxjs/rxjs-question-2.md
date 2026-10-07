---
layout: doc
question: true
title: "How does an Observable differ from a Promise?"
questionTitle: "How does an Observable differ from a Promise?"
description: "Learn How does an Observable differ from a Promise? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Promise resolves once and begins immediately, while an Observable can emit zero or many values, is usually lazy, and supports cancellation through unsubscription. Observables are a better fit for events, streams, and composed asynchronous flows."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "How does an Observable differ from a Promise?"
prev:
  text: "What are actions, reducers, and the store?"
  link: "/frontend-interview-questions/redux/redux-question-2"
next:
  text: "How do you reduce Largest Contentful Paint?"
  link: "/frontend-interview-questions/performance/performance-question-2"
---
# How does an Observable differ from a Promise?

## Answer

A Promise resolves once and begins immediately, while an Observable can emit zero or many values, is usually lazy, and supports cancellation through unsubscription. Observables are a better fit for events, streams, and composed asynchronous flows.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
