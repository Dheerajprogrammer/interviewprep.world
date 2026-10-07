---
layout: doc
question: true
title: "What does `React.memo` do?"
questionTitle: "What does `React.memo` do?"
description: "Learn What does `React.memo` do? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "React.memo can skip rendering a component when its props are shallowly equal to the previous props. It helps only when parent renders are frequent and the skipped component work is meaningful; changing object or function props defeats the default comparison."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "What does `React.memo` do?"
prev:
  text: "What is lifting state up?"
  link: "/react-interview-questions/state-management/state-management-question-2"
next:
  text: "How do nested routes work in React Router?"
  link: "/react-interview-questions/react-router/react-router-question-2"
---
# What does `React.memo` do?

## Answer

React.memo can skip rendering a component when its props are shallowly equal to the previous props. It helps only when parent renders are frequent and the skipped component work is meaningful; changing object or function props defeats the default comparison.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
