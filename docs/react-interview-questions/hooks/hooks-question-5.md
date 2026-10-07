---
layout: doc
question: true
title: "When should you use `useMemo`?"
questionTitle: "When should you use `useMemo`?"
description: "Learn When should you use `useMemo`? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `useMemo` after profiling shows a calculation is expensive or a stable reference prevents meaningful child work. It is a performance hint, not a correctness tool, and its dependencies must include every value used by the calculation."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "When should you use `useMemo`?"
prev:
  text: "What is the difference between props and state?"
  link: "/react-interview-questions/basics/basics-question-5"
next:
  text: "What is state colocation?"
  link: "/react-interview-questions/state-management/state-management-question-5"
---
# When should you use `useMemo`?

## Answer

Use `useMemo` after profiling shows a calculation is expensive or a stable reference prevents meaningful child work. It is a performance hint, not a correctness tool, and its dependencies must include every value used by the calculation.

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
