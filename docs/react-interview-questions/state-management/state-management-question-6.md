---
layout: doc
question: true
title: "When is Context appropriate for state?"
questionTitle: "When is Context appropriate for state?"
description: "Learn When is Context appropriate for state? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Context is appropriate for stable cross-cutting values such as theme, locale, authenticated identity, or a service dependency. Split frequently changing values or use a store because every consuming component re-renders when a provider value changes."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "When is Context appropriate for state?"
prev:
  text: "When should you use `useCallback`?"
  link: "/react-interview-questions/hooks/hooks-question-6"
next:
  text: "How do you optimize Context consumers?"
  link: "/react-interview-questions/performance/performance-question-6"
---
# When is Context appropriate for state?

## Answer

Context is appropriate for stable cross-cutting values such as theme, locale, authenticated identity, or a service dependency. Split frequently changing values or use a store because every consuming component re-renders when a provider value changes.

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
