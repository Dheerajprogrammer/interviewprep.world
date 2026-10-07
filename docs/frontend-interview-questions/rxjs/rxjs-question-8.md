---
layout: doc
question: true
title: "How do you handle errors in an RxJS stream?"
questionTitle: "How do you handle errors in an RxJS stream?"
description: "Learn How do you handle errors in an RxJS stream? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Handle expected errors inside the pipeline with `catchError`, return an appropriate fallback or rethrow, and keep error state visible to the UI. An unhandled error terminates the subscription, so decide whether the stream should recover."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "How do you handle errors in an RxJS stream?"
prev:
  text: "What is normalized state?"
  link: "/frontend-interview-questions/redux/redux-question-8"
next:
  text: "What causes long tasks on the main thread?"
  link: "/frontend-interview-questions/performance/performance-question-8"
---
# How do you handle errors in an RxJS stream?

## Answer

Handle expected errors inside the pipeline with `catchError`, return an appropriate fallback or rethrow, and keep error state visible to the UI. An unhandled error terminates the subscription, so decide whether the stream should recover.

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
