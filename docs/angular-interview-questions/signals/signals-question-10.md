---
layout: doc
question: true
title: "When should you use a signal instead of an Observable?"
questionTitle: "When should you use a signal instead of an Observable?"
description: "Learn When should you use a signal instead of an Observable? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a signal for synchronous state read by templates and an Observable for asynchronous streams, cancellation, composition, or multiple values over time. They interoperate, so choose the abstraction that matches the boundary rather than forcing one everywhere."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "When should you use a signal instead of an Observable?"
prev:
  text: "When should you avoid a global store?"
  link: "/angular-interview-questions/state-management/state-management-question-10"
next:
  text: "How do you prevent memory leaks in Angular?"
  link: "/angular-interview-questions/performance/performance-question-10"
---
# When should you use a signal instead of an Observable?

## Answer

Use a signal for synchronous state read by templates and an Observable for asynchronous streams, cancellation, composition, or multiple values over time. They interoperate, so choose the abstraction that matches the boundary rather than forcing one everywhere.

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
