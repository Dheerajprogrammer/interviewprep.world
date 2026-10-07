---
layout: doc
question: true
title: "What is concurrent rendering?"
questionTitle: "What is concurrent rendering?"
description: "Learn What is concurrent rendering? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Concurrent rendering lets React prepare a render interruptibly and prioritize urgent updates such as input over non-urgent work. Rendering may be restarted, so render functions must be pure and effects remain the place for external side effects."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "What is concurrent rendering?"
prev:
  text: "How do you model async request state?"
  link: "/react-interview-questions/state-management/state-management-question-8"
next:
  text: "How do you handle a 404 route?"
  link: "/react-interview-questions/react-router/react-router-question-8"
---
# What is concurrent rendering?

## Answer

Concurrent rendering lets React prepare a render interruptibly and prioritize urgent updates such as input over non-urgent work. Rendering may be restarted, so render functions must be pure and effects remain the place for external side effects.

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
