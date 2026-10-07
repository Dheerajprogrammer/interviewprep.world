---
layout: doc
question: true
title: "What is a cold versus hot Observable?"
questionTitle: "What is a cold versus hot Observable?"
description: "Learn What is a cold versus hot Observable? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A cold Observable creates its producer for each subscriber, such as an HTTP request. A hot Observable shares a producer independent of subscribers, such as a DOM event or Subject."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "What is a cold versus hot Observable?"
prev:
  text: "How do you avoid unnecessary Redux re-renders?"
  link: "/frontend-interview-questions/redux/redux-question-9"
next:
  text: "How do you use a performance budget?"
  link: "/frontend-interview-questions/performance/performance-question-9"
---
# What is a cold versus hot Observable?

## Answer

A cold Observable creates its producer for each subscriber, such as an HTTP request. A hot Observable shares a producer independent of subscribers, such as a DOM event or Subject.

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
