---
layout: doc
question: true
title: "How do you optimize expensive calculations?"
questionTitle: "How do you optimize expensive calculations?"
description: "Learn How do you optimize expensive calculations? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "First measure the cost, then reduce the amount of work, move it off the critical interaction path, cache results for repeated inputs, or precompute at a boundary. Memoization is usually secondary to choosing a better algorithm or data shape."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "How do you optimize expensive calculations?"
prev:
  text: "What is optimistic UI?"
  link: "/react-interview-questions/state-management/state-management-question-9"
next:
  text: "How do you preserve query parameters?"
  link: "/react-interview-questions/react-router/react-router-question-9"
---
# How do you optimize expensive calculations?

## Answer

First measure the cost, then reduce the amount of work, move it off the critical interaction path, cache results for repeated inputs, or precompute at a boundary. Memoization is usually secondary to choosing a better algorithm or data shape.

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
