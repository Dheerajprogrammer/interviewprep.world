---
layout: doc
question: true
title: "What is the difference between `useEffect` and `useLayoutEffect`?"
questionTitle: "What is the difference between `useEffect` and `useLayoutEffect`?"
description: "Learn What is the difference between `useEffect` and `useLayoutEffect`? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`useEffect` runs after the browser paints, while `useLayoutEffect` runs after DOM changes but before paint. Use layout effects only when reading layout or synchronously preventing visual flicker; they can delay rendering."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "What is the difference between `useEffect` and `useLayoutEffect`?"
prev:
  text: "What is JSX?"
  link: "/react-interview-questions/basics/basics-question-4"
next:
  text: "How do you update nested state immutably?"
  link: "/react-interview-questions/state-management/state-management-question-4"
---
# What is the difference between `useEffect` and `useLayoutEffect`?

## Answer

`useEffect` runs after the browser paints, while `useLayoutEffect` runs after DOM changes but before paint. Use layout effects only when reading layout or synchronously preventing visual flicker; they can delay rendering.

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
