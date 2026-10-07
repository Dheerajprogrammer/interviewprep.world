---
layout: doc
question: true
title: "How do you update a writable signal?"
questionTitle: "How do you update a writable signal?"
description: "Learn How do you update a writable signal? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `set` to replace the value or `update` to calculate the next value from the current one. For object or array state, return a new value instead of mutating a nested value invisibly."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "How do you update a writable signal?"
prev:
  text: "What are actions, reducers, selectors, and effects?"
  link: "/angular-interview-questions/state-management/state-management-question-4"
next:
  text: "How do you avoid expensive template expressions?"
  link: "/angular-interview-questions/performance/performance-question-4"
---
# How do you update a writable signal?

## Answer

Use `set` to replace the value or `update` to calculate the next value from the current one. For object or array state, return a new value instead of mutating a nested value invisibly.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
