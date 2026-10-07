---
layout: doc
question: true
title: "How do you diagnose unnecessary React re-renders?"
questionTitle: "How do you diagnose unnecessary React re-renders?"
description: "Learn How do you diagnose unnecessary React re-renders? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use the React DevTools Profiler to identify what rendered, how long it took, and why it rendered. Then inspect state placement, changing prop identities, and context updates before adding memoization."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "How do you diagnose unnecessary React re-renders?"
prev:
  text: "Where should state live in a React application?"
  link: "/react-interview-questions/state-management/state-management-question-1"
next:
  text: "What is client-side routing?"
  link: "/react-interview-questions/react-router/react-router-question-1"
---
# How do you diagnose unnecessary React re-renders?

## Answer

Use the React DevTools Profiler to identify what rendered, how long it took, and why it rendered. Then inspect state placement, changing prop identities, and context updates before adding memoization.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
