---
layout: doc
question: true
title: "What is a computed signal?"
questionTitle: "What is a computed signal?"
description: "Learn What is a computed signal? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A computed signal derives a value from other signals and recalculates lazily only when a dependency changes. Its derivation should be pure and should not write state or perform external effects."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "What is a computed signal?"
prev:
  text: "Why should reducers be pure?"
  link: "/angular-interview-questions/state-management/state-management-question-5"
next:
  text: "How do pure pipes improve performance?"
  link: "/angular-interview-questions/performance/performance-question-5"
---
# What is a computed signal?

## Answer

A computed signal derives a value from other signals and recalculates lazily only when a dependency changes. Its derivation should be pure and should not write state or perform external effects.

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
