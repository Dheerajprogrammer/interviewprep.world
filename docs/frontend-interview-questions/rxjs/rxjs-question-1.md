---
layout: doc
question: true
title: "What is an Observable?"
questionTitle: "What is an Observable?"
description: "Learn What is an Observable? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An Observable represents a lazy sequence of zero or more values over time. Subscribers receive values, completion, or errors and can unsubscribe, which makes Observables suitable for UI events, HTTP, and reactive state."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "What is an Observable?"
prev:
  text: "What are the core Redux principles?"
  link: "/frontend-interview-questions/redux/redux-question-1"
next:
  text: "What are Core Web Vitals?"
  link: "/frontend-interview-questions/performance/performance-question-1"
---
# What is an Observable?

## Answer

An Observable represents a lazy sequence of zero or more values over time. Subscribers receive values, completion, or errors and can unsubscribe, which makes Observables suitable for UI events, HTTP, and reactive state.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
