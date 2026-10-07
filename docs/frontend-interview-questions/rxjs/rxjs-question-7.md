---
layout: doc
question: true
title: "How do you unsubscribe safely?"
questionTitle: "How do you unsubscribe safely?"
description: "Learn How do you unsubscribe safely? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use Angular-managed lifetimes such as the async pipe or `takeUntilDestroyed`, and clean up manual subscriptions in the owner’s destruction path. Finite Observables such as HttpClient requests complete automatically."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "How do you unsubscribe safely?"
prev:
  text: "What is middleware?"
  link: "/frontend-interview-questions/redux/redux-question-7"
next:
  text: "How do you measure web performance?"
  link: "/frontend-interview-questions/performance/performance-question-7"
---
# How do you unsubscribe safely?

## Answer

Use Angular-managed lifetimes such as the async pipe or `takeUntilDestroyed`, and clean up manual subscriptions in the owner’s destruction path. Finite Observables such as HttpClient requests complete automatically.

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
