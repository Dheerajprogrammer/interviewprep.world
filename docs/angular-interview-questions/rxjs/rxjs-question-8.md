---
layout: doc
question: true
title: "How do you unsubscribe safely?"
questionTitle: "How do you unsubscribe safely?"
description: "Learn How do you unsubscribe safely? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use Angular-managed lifetimes such as the async pipe or `takeUntilDestroyed`, and clean up manual subscriptions in the owner’s destruction path. Finite Observables such as HttpClient requests complete automatically."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "How do you unsubscribe safely?"
prev:
  text: "What is `@Self` and `@SkipSelf`?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-8"
next:
  text: "How do you redirect routes?"
  link: "/angular-interview-questions/routing/routing-question-8"
---
# How do you unsubscribe safely?

## Answer

Use Angular-managed lifetimes such as the async pipe or `takeUntilDestroyed`, and clean up manual subscriptions in the owner’s destruction path. Finite Observables such as HttpClient requests complete automatically.

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
