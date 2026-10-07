---
layout: doc
question: true
title: "What is the difference between an Observable and a Promise?"
questionTitle: "What is the difference between an Observable and a Promise?"
description: "Learn What is the difference between an Observable and a Promise? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Promise produces one eventual result and begins immediately; an Observable can produce many values, usually begins on subscription, and supports cancellation through unsubscription. Choose the abstraction that matches the cardinality and lifetime."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "What is the difference between an Observable and a Promise?"
prev:
  text: "What is an injector?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-2"
next:
  text: "What is a router outlet?"
  link: "/angular-interview-questions/routing/routing-question-2"
---
# What is the difference between an Observable and a Promise?

## Answer

A Promise produces one eventual result and begins immediately; an Observable can produce many values, usually begins on subscription, and supports cancellation through unsubscription. Choose the abstraction that matches the cardinality and lifetime.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
