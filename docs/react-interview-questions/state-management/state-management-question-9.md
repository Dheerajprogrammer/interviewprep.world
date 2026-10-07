---
layout: doc
question: true
title: "What is optimistic UI?"
questionTitle: "What is optimistic UI?"
description: "Learn What is optimistic UI? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Optimistic UI updates the interface before a server mutation completes, then confirms or rolls back based on the response. It feels fast but requires a rollback strategy, idempotent operations, and careful handling of concurrent changes."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "What is optimistic UI?"
prev:
  text: "How do stale closures happen in Hooks?"
  link: "/react-interview-questions/hooks/hooks-question-9"
next:
  text: "How do you optimize expensive calculations?"
  link: "/react-interview-questions/performance/performance-question-9"
---
# What is optimistic UI?

## Answer

Optimistic UI updates the interface before a server mutation completes, then confirms or rolls back based on the response. It feels fast but requires a rollback strategy, idempotent operations, and careful handling of concurrent changes.

## Example

```jsx
setTodos(current => current.map(todo =>
  todo.id === id ? { ...todo, done: !todo.done } : todo
))
```

Create new objects for changed values so React can detect the update by identity.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
