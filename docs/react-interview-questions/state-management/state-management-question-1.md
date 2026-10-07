---
layout: doc
question: true
title: "Where should state live in a React application?"
questionTitle: "Where should state live in a React application?"
description: "Learn Where should state live in a React application? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keep state in the lowest common owner that needs to coordinate it. Local component state is the default; lift it only when siblings need the same source of truth, and use a shared store only when ownership crosses meaningful feature boundaries."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "Where should state live in a React application?"
prev:
  text: "Explain the useEffect Hook"
  link: "/react-interview-questions/hooks/use-effect"
next:
  text: "How do you diagnose unnecessary React re-renders?"
  link: "/react-interview-questions/performance/performance-question-1"
---
# Where should state live in a React application?

## Answer

Keep state in the lowest common owner that needs to coordinate it. Local component state is the default; lift it only when siblings need the same source of truth, and use a shared store only when ownership crosses meaningful feature boundaries.

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
