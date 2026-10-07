---
layout: doc
question: true
title: "How do you model async request state?"
questionTitle: "How do you model async request state?"
description: "Learn How do you model async request state? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Model at least pending, success data, and failure explicitly, and decide how stale data, retries, cancellation, and concurrent requests behave. A server-state library can centralize caching and invalidation for remote data."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "How do you model async request state?"
prev:
  text: "How do you build a custom Hook?"
  link: "/react-interview-questions/hooks/hooks-question-8"
next:
  text: "What is concurrent rendering?"
  link: "/react-interview-questions/performance/performance-question-8"
---
# How do you model async request state?

## Answer

Model at least pending, success data, and failure explicitly, and decide how stale data, retries, cancellation, and concurrent requests behave. A server-state library can centralize caching and invalidation for remote data.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
