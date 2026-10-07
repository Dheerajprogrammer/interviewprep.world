---
layout: doc
question: true
title: "What do `debounceTime` and `distinctUntilChanged` do?"
questionTitle: "What do `debounceTime` and `distinctUntilChanged` do?"
description: "Learn What do `debounceTime` and `distinctUntilChanged` do? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`debounceTime` waits for a quiet interval before emitting; `distinctUntilChanged` suppresses consecutive equal values. They are commonly paired to avoid unnecessary search, validation, or autosave work."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "What do `debounceTime` and `distinctUntilChanged` do?"
prev:
  text: "What is `@Optional`?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-7"
next:
  text: "How do you create child routes?"
  link: "/angular-interview-questions/routing/routing-question-7"
---
# What do `debounceTime` and `distinctUntilChanged` do?

## Answer

`debounceTime` waits for a quiet interval before emitting; `distinctUntilChanged` suppresses consecutive equal values. They are commonly paired to avoid unnecessary search, validation, or autosave work.

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
