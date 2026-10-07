---
layout: doc
question: true
title: "What is `useRef` used for?"
questionTitle: "What is `useRef` used for?"
description: "Learn What is `useRef` used for? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "useRef stores a mutable value that persists across renders without causing a re-render, commonly for DOM nodes, timer IDs, or the latest value used by an external callback. It should not replace state that affects visible UI."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "What is `useRef` used for?"
prev:
  text: "What are keys and why are they important?"
  link: "/react-interview-questions/basics/basics-question-7"
next:
  text: "When should you use a client-state library?"
  link: "/react-interview-questions/state-management/state-management-question-7"
---
# What is `useRef` used for?

## Answer

useRef stores a mutable value that persists across renders without causing a re-render, commonly for DOM nodes, timer IDs, or the latest value used by an external callback. It should not replace state that affects visible UI.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
