---
layout: doc
question: true
title: "What is derived state and why should you avoid storing it?"
questionTitle: "What is derived state and why should you avoid storing it?"
description: "Learn What is derived state and why should you avoid storing it? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Derived state can be calculated from props or existing state, such as a filtered list or total. Storing it creates multiple sources of truth that can drift, so calculate it during render or memoize it only when measurement justifies it."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "What is derived state and why should you avoid storing it?"
prev:
  text: "Explain the `useEffect` Hook."
  link: "/react-interview-questions/hooks/hooks-question-3"
next:
  text: "What are the limits of `useMemo` and `useCallback`?"
  link: "/react-interview-questions/performance/performance-question-3"
---
# What is derived state and why should you avoid storing it?

## Answer

Derived state can be calculated from props or existing state, such as a filtered list or total. Storing it creates multiple sources of truth that can drift, so calculate it during render or memoize it only when measurement justifies it.

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
