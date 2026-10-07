---
layout: doc
question: true
title: "How do you handle errors in RxJS?"
questionTitle: "How do you handle errors in RxJS?"
description: "Learn How do you handle errors in RxJS? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `catchError` near the operation that can recover, map expected failures to a meaningful state or fallback, and rethrow unexpected errors for centralized handling. An unhandled error terminates that subscription."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "How do you handle errors in RxJS?"
prev:
  text: "How do you mock a dependency in a test?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-10"
next:
  text: "How do you preload lazy modules?"
  link: "/angular-interview-questions/routing/routing-question-10"
---
# How do you handle errors in RxJS?

## Answer

Use `catchError` near the operation that can recover, map expected failures to a meaningful state or fallback, and rethrow unexpected errors for centralized handling. An unhandled error terminates that subscription.

## Example

```ts
results$ = this.query.valueChanges.pipe(
  debounceTime(250), distinctUntilChanged(),
  switchMap(query => this.api.search(query))
)
```

`switchMap` cancels the previous inner request when a newer query arrives.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
