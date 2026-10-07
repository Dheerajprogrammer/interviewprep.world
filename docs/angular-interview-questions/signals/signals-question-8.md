---
layout: doc
question: true
title: "What are signal inputs?"
questionTitle: "What are signal inputs?"
description: "Learn What are signal inputs? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Signal inputs expose a component input as a signal, so derived values can react to input changes without lifecycle-hook bookkeeping. They still follow the same parent-to-child ownership rule as ordinary inputs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "What are signal inputs?"
prev:
  text: "What is entity state normalization?"
  link: "/angular-interview-questions/state-management/state-management-question-8"
next:
  text: "What is zone.js and what role does it play?"
  link: "/angular-interview-questions/performance/performance-question-8"
---
# What are signal inputs?

## Answer

Signal inputs expose a component input as a signal, so derived values can react to input changes without lifecycle-hook bookkeeping. They still follow the same parent-to-child ownership rule as ordinary inputs.

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
