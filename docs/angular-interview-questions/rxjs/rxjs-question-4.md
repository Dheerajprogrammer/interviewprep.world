---
layout: doc
question: true
title: "What is the difference between Subject and BehaviorSubject?"
questionTitle: "What is the difference between Subject and BehaviorSubject?"
description: "Learn What is the difference between Subject and BehaviorSubject? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Subject sends only future values to a new subscriber; a BehaviorSubject requires an initial value and immediately sends its current value. Use BehaviorSubject for current state, not for events with no meaningful initial value."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "What is the difference between Subject and BehaviorSubject?"
prev:
  text: "What is an injection token?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-4"
next:
  text: "What are route guards?"
  link: "/angular-interview-questions/routing/routing-question-4"
---
# What is the difference between Subject and BehaviorSubject?

## Answer

A Subject sends only future values to a new subscriber; a BehaviorSubject requires an initial value and immediately sends its current value. Use BehaviorSubject for current state, not for events with no meaningful initial value.

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
