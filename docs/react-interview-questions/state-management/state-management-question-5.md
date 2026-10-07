---
layout: doc
question: true
title: "What is state colocation?"
questionTitle: "What is state colocation?"
description: "Learn What is state colocation? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "State colocation keeps state near the component that owns and uses it instead of putting it in a global store by default. It reduces unnecessary coupling and limits how much of the tree updates when that state changes."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "What is state colocation?"
prev:
  text: "When should you use `useMemo`?"
  link: "/react-interview-questions/hooks/hooks-question-5"
next:
  text: "What is code splitting with `lazy` and `Suspense`?"
  link: "/react-interview-questions/performance/performance-question-5"
---
# What is state colocation?

## Answer

State colocation keeps state near the component that owns and uses it instead of putting it in a global store by default. It reduces unnecessary coupling and limits how much of the tree updates when that state changes.

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
