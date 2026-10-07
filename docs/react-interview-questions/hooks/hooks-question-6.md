---
layout: doc
question: true
title: "When should you use `useCallback`?"
questionTitle: "When should you use `useCallback`?"
description: "Learn When should you use `useCallback`? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `useCallback` when a stable function identity matters, such as a memoized child, an effect dependency, or subscription API. Do not wrap every handler; it adds complexity and does not prevent a component from rendering."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "When should you use `useCallback`?"
prev:
  text: "What causes a React component to re-render?"
  link: "/react-interview-questions/basics/basics-question-6"
next:
  text: "When is Context appropriate for state?"
  link: "/react-interview-questions/state-management/state-management-question-6"
---
# When should you use `useCallback`?

## Answer

Use `useCallback` when a stable function identity matters, such as a memoized child, an effect dependency, or subscription API. Do not wrap every handler; it adds complexity and does not prevent a component from rendering.

## Example

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

The functional update reads the latest state, which is safe when updates are queued.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
