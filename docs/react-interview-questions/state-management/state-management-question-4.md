---
layout: doc
question: true
title: "How do you update nested state immutably?"
questionTitle: "How do you update nested state immutably?"
description: "Learn How do you update nested state immutably? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Create new objects or arrays along the path that changes while reusing untouched branches. This preserves reference equality for unchanged data and lets React and memoized selectors detect what actually changed."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "How do you update nested state immutably?"
prev:
  text: "What is the difference between `useEffect` and `useLayoutEffect`?"
  link: "/react-interview-questions/hooks/hooks-question-4"
next:
  text: "How do you virtualize a large list?"
  link: "/react-interview-questions/performance/performance-question-4"
---
# How do you update nested state immutably?

## Answer

Create new objects or arrays along the path that changes while reusing untouched branches. This preserves reference equality for unchanged data and lets React and memoized selectors detect what actually changed.

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
