---
layout: doc
question: true
title: "How do switchMap, mergeMap, concatMap, and exhaustMap differ?"
questionTitle: "How do switchMap, mergeMap, concatMap, and exhaustMap differ?"
description: "Learn How do switchMap, mergeMap, concatMap, and exhaustMap differ? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`switchMap` cancels the previous inner work, `mergeMap` runs work concurrently, `concatMap` queues work in order, and `exhaustMap` ignores new triggers while work is active. Choose the operator from the business concurrency rule."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "How do switchMap, mergeMap, concatMap, and exhaustMap differ?"
prev:
  text: "What is a selector?"
  link: "/frontend-interview-questions/redux/redux-question-5"
next:
  text: "What is the critical rendering path?"
  link: "/frontend-interview-questions/performance/performance-question-5"
---
# How do switchMap, mergeMap, concatMap, and exhaustMap differ?

## Answer

`switchMap` cancels the previous inner work, `mergeMap` runs work concurrently, `concatMap` queues work in order, and `exhaustMap` ignores new triggers while work is active. Choose the operator from the business concurrency rule.

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
