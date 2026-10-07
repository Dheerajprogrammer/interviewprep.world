---
layout: doc
question: true
title: "Explain the `useEffect` Hook."
questionTitle: "Explain the `useEffect` Hook."
description: "Learn Explain the `useEffect` Hook. with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`useEffect` synchronizes a component with something outside React, such as a subscription, timer, or network request. Its cleanup runs before a dependency change and on unmount, so setup and cleanup must be safe to repeat."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "Explain the `useEffect` Hook."
prev:
  text: "What is reconciliation in React?"
  link: "/react-interview-questions/basics/basics-question-3"
next:
  text: "What is derived state and why should you avoid storing it?"
  link: "/react-interview-questions/state-management/state-management-question-3"
---
# Explain the `useEffect` Hook.

## Answer

`useEffect` synchronizes a component with something outside React, such as a subscription, timer, or network request. Its cleanup runs before a dependency change and on unmount, so setup and cleanup must be safe to repeat.

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
