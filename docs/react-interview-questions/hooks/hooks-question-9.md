---
layout: doc
question: true
title: "How do stale closures happen in Hooks?"
questionTitle: "How do stale closures happen in Hooks?"
description: "Learn How do stale closures happen in Hooks? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A callback or effect closes over values from the render that created it, so it can use an outdated value when dependencies are omitted or work runs later. Include dependencies, use functional updates, or store a deliberate latest value in a ref."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "How do stale closures happen in Hooks?"
prev:
  text: "What is an uncontrolled component?"
  link: "/react-interview-questions/basics/basics-question-9"
next:
  text: "What is optimistic UI?"
  link: "/react-interview-questions/state-management/state-management-question-9"
---
# How do stale closures happen in Hooks?

## Answer

A callback or effect closes over values from the render that created it, so it can use an outdated value when dependencies are omitted or work runs later. Include dependencies, use functional updates, or store a deliberate latest value in a ref.

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
