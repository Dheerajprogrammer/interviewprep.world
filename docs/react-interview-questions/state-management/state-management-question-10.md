---
layout: doc
question: true
title: "How do you prevent race conditions in state updates?"
questionTitle: "How do you prevent race conditions in state updates?"
description: "Learn How do you prevent race conditions in state updates? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use functional state updates for queued local changes, cancel or ignore obsolete requests with AbortController or request IDs, and ensure only the response for the current input may update state. Define conflict behavior rather than relying on response order."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "How do you prevent race conditions in state updates?"
prev:
  text: "How do you avoid an infinite effect loop?"
  link: "/react-interview-questions/hooks/hooks-question-10"
next:
  text: "How do you profile a React app?"
  link: "/react-interview-questions/performance/performance-question-10"
---
# How do you prevent race conditions in state updates?

## Answer

Use functional state updates for queued local changes, cancel or ignore obsolete requests with AbortController or request IDs, and ensure only the response for the current input may update state. Define conflict behavior rather than relying on response order.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
