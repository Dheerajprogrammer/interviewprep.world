---
layout: doc
question: true
title: "When should you use an effect?"
questionTitle: "When should you use an effect?"
description: "Learn When should you use an effect? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use an effect to synchronize reactive state with an imperative boundary such as logging, local storage, a chart library, or a DOM API. Do not use it to derive application state that belongs in `computed`."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "When should you use an effect?"
prev:
  text: "How do selectors improve performance?"
  link: "/angular-interview-questions/state-management/state-management-question-6"
next:
  text: "How do you lazy load a feature?"
  link: "/angular-interview-questions/performance/performance-question-6"
---
# When should you use an effect?

## Answer

Use an effect to synchronize reactive state with an imperative boundary such as logging, local storage, a chart library, or a DOM API. Do not use it to derive application state that belongs in `computed`.

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
