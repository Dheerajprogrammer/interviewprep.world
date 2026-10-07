---
layout: doc
question: true
title: "How do you virtualize a large list?"
questionTitle: "How do you virtualize a large list?"
description: "Learn How do you virtualize a large list? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Render only the rows visible in the viewport plus a small overscan buffer, and represent the rest with spacer size. Use a virtualization library when rows have variable height or accessibility and scrolling details would otherwise be error-prone."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "How do you virtualize a large list?"
prev:
  text: "How do you update nested state immutably?"
  link: "/react-interview-questions/state-management/state-management-question-4"
next:
  text: "How do route parameters work?"
  link: "/react-interview-questions/react-router/react-router-question-4"
---
# How do you virtualize a large list?

## Answer

Render only the rows visible in the viewport plus a small overscan buffer, and represent the rest with spacer size. Use a virtualization library when rows have variable height or accessibility and scrolling details would otherwise be error-prone.

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
