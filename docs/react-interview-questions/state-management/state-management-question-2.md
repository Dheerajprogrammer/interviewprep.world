---
layout: doc
question: true
title: "What is lifting state up?"
questionTitle: "What is lifting state up?"
description: "Learn What is lifting state up? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Lifting state up moves shared state to the nearest common parent and passes values down with props while children notify changes with callbacks. It prevents siblings from maintaining inconsistent copies of the same data."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "What is lifting state up?"
prev:
  text: "Explain the `useState` Hook."
  link: "/react-interview-questions/hooks/hooks-question-2"
next:
  text: "What does `React.memo` do?"
  link: "/react-interview-questions/performance/performance-question-2"
---
# What is lifting state up?

## Answer

Lifting state up moves shared state to the nearest common parent and passes values down with props while children notify changes with callbacks. It prevents siblings from maintaining inconsistent copies of the same data.

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
