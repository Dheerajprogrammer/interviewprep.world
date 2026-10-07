---
layout: doc
question: true
title: "What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`?"
questionTitle: "What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`?"
description: "Learn What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`switchMap` cancels stale inner work, `mergeMap` runs work concurrently, `concatMap` queues it in order, and `exhaustMap` ignores triggers while one operation runs. Select the operator from the required concurrency behavior."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`?"
prev:
  text: "How does hierarchical DI work?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-6"
next:
  text: "What are resolvers?"
  link: "/angular-interview-questions/routing/routing-question-6"
---
# What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`?

## Answer

`switchMap` cancels stale inner work, `mergeMap` runs work concurrently, `concatMap` queues it in order, and `exhaustMap` ignores triggers while one operation runs. Select the operator from the required concurrency behavior.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
