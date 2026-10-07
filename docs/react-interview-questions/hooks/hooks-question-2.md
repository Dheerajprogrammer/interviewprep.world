---
layout: doc
question: true
title: "Explain the `useState` Hook."
questionTitle: "Explain the `useState` Hook."
description: "Learn Explain the `useState` Hook. with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`useState` adds local state to a function component and returns the current value plus a setter. Use the functional setter form when the next value depends on the previous value, and replace objects or arrays instead of mutating them."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "Explain the `useState` Hook."
prev:
  text: "What is the Virtual DOM?"
  link: "/react-interview-questions/basics/basics-question-2"
next:
  text: "What is lifting state up?"
  link: "/react-interview-questions/state-management/state-management-question-2"
---
# Explain the `useState` Hook.

## Answer

`useState` adds local state to a function component and returns the current value plus a setter. Use the functional setter form when the next value depends on the previous value, and replace objects or arrays instead of mutating them.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
