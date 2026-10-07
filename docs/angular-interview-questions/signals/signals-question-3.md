---
layout: doc
question: true
title: "How do signals work with OnPush?"
questionTitle: "How do signals work with OnPush?"
description: "Learn How do signals work with OnPush? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "When an OnPush template reads a signal, Angular records that dependency and marks the component for checking when the signal changes. This gives targeted updates without manually calling change detection for ordinary signal state."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "How do signals work with OnPush?"
prev:
  text: "What is NgRx?"
  link: "/angular-interview-questions/state-management/state-management-question-3"
next:
  text: "How do you track list items efficiently?"
  link: "/angular-interview-questions/performance/performance-question-3"
---
# How do signals work with OnPush?

## Answer

When an OnPush template reads a signal, Angular records that dependency and marks the component for checking when the signal changes. This gives targeted updates without manually calling change detection for ordinary signal state.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
