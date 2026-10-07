---
layout: doc
question: true
title: "How do stable keys improve rendering?"
questionTitle: "How do stable keys improve rendering?"
description: "Learn How do stable keys improve rendering? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Stable keys let React match list items across renders, preserving the right DOM, component state, and focus when data is inserted, deleted, or reordered. Keys must identify the item, not its current position."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "How do stable keys improve rendering?"
prev:
  text: "When should you use a client-state library?"
  link: "/react-interview-questions/state-management/state-management-question-7"
next:
  text: "What are loaders and actions?"
  link: "/react-interview-questions/react-router/react-router-question-7"
---
# How do stable keys improve rendering?

## Answer

Stable keys let React match list items across renders, preserving the right DOM, component state, and focus when data is inserted, deleted, or reordered. Keys must identify the item, not its current position.

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
