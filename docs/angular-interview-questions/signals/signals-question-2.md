---
layout: doc
question: true
title: "What is the difference between `signal`, `computed`, and `effect`?"
questionTitle: "What is the difference between `signal`, `computed`, and `effect`?"
description: "Learn What is the difference between `signal`, `computed`, and `effect`? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A writable `signal` stores state, `computed` derives a cached value from signals, and `effect` runs imperative side work when its dependencies change. Keep derived business values in computed signals and reserve effects for integration."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "What is the difference between `signal`, `computed`, and `effect`?"
prev:
  text: "When is a service with RxJS enough?"
  link: "/angular-interview-questions/state-management/state-management-question-2"
next:
  text: "What does `OnPush` change detection do?"
  link: "/angular-interview-questions/performance/performance-question-2"
---
# What is the difference between `signal`, `computed`, and `effect`?

## Answer

A writable `signal` stores state, `computed` derives a cached value from signals, and `effect` runs imperative side work when its dependencies change. Keep derived business values in computed signals and reserve effects for integration.

## Example

```ts
const count = signal(0)
const doubled = computed(() => count() * 2)
count.update(value => value + 1)
```

Signals are read by calling them; computed values automatically track the signals they read.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
