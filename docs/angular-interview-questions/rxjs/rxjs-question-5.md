---
layout: doc
question: true
title: "What is a ReplaySubject?"
questionTitle: "What is a ReplaySubject?"
description: "Learn What is a ReplaySubject? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A ReplaySubject remembers a configured number of prior values and replays them to new subscribers. It is useful for bounded history or late subscribers, but its buffer size and lifetime must be controlled to avoid memory growth."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "What is a ReplaySubject?"
prev:
  text: "What are multi-providers?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-5"
next:
  text: "What is lazy loading?"
  link: "/angular-interview-questions/routing/routing-question-5"
---
# What is a ReplaySubject?

## Answer

A ReplaySubject remembers a configured number of prior values and replays them to new subscribers. It is useful for bounded history or late subscribers, but its buffer size and lifetime must be controlled to avoid memory growth.

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
