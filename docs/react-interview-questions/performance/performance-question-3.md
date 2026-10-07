---
layout: doc
question: true
title: "What are the limits of `useMemo` and `useCallback`?"
questionTitle: "What are the limits of `useMemo` and `useCallback`?"
description: "Learn What are the limits of `useMemo` and `useCallback`? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "They retain values and add dependency bookkeeping, so they can increase memory and complexity. They do not stop parent renders or make an expensive calculation cheap; use them only where profiling shows stable identity or cached work matters."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "What are the limits of `useMemo` and `useCallback`?"
prev:
  text: "What is derived state and why should you avoid storing it?"
  link: "/react-interview-questions/state-management/state-management-question-3"
next:
  text: "What is an outlet?"
  link: "/react-interview-questions/react-router/react-router-question-3"
---
# What are the limits of `useMemo` and `useCallback`?

## Answer

They retain values and add dependency bookkeeping, so they can increase memory and complexity. They do not stop parent renders or make an expensive calculation cheap; use them only where profiling shows stable identity or cached work matters.

## Example

```jsx
const visibleRows = useMemo(
  () => rows.filter(row => row.visible),
  [rows]
)
```

Memoize only after profiling shows this calculation is expensive or causes avoidable child work.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
