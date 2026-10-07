---
layout: doc
question: true
title: "What is a Subject?"
questionTitle: "What is a Subject?"
description: "Learn What is a Subject? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Subject is both an Observable and an observer, so code can subscribe to it and push values with `next`. It is useful as a bridge for imperative events but should not become an uncontrolled global event bus."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "What is a Subject?"
prev:
  text: "What are provider scopes?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-3"
next:
  text: "What are route parameters and query parameters?"
  link: "/angular-interview-questions/routing/routing-question-3"
---
# What is a Subject?

## Answer

A Subject is both an Observable and an observer, so code can subscribe to it and push values with `next`. It is useful as a bridge for imperative events but should not become an uncontrolled global event bus.

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
