---
layout: doc
question: true
title: "What is code splitting with `lazy` and `Suspense`?"
questionTitle: "What is code splitting with `lazy` and `Suspense`?"
description: "Learn What is code splitting with `lazy` and `Suspense`? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "React.lazy loads a component module on demand, while Suspense renders a fallback until it is available. Split at route or optional-feature boundaries and provide loading and error UI that does not hide critical content."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "What is code splitting with `lazy` and `Suspense`?"
prev:
  text: "What is state colocation?"
  link: "/react-interview-questions/state-management/state-management-question-5"
next:
  text: "How do you protect a route?"
  link: "/react-interview-questions/react-router/react-router-question-5"
---
# What is code splitting with `lazy` and `Suspense`?

## Answer

React.lazy loads a component module on demand, while Suspense renders a fallback until it is available. Split at route or optional-feature boundaries and provide loading and error UI that does not hide critical content.

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
