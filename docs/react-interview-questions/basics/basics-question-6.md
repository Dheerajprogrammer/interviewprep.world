---
layout: doc
question: true
title: "What causes a React component to re-render?"
questionTitle: "What causes a React component to re-render?"
description: "Learn What causes a React component to re-render? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A component re-renders when its own state changes, its parent renders, or a consumed context changes. Rendering calculates a new UI description; React may then skip DOM work if the output is equivalent."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What causes a React component to re-render?"
prev:
  text: "Build a multi-step form."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-5"
next:
  text: "When should you use `useCallback`?"
  link: "/react-interview-questions/hooks/hooks-question-6"
---
# What causes a React component to re-render?

## Answer

A component re-renders when its own state changes, its parent renders, or a consumed context changes. Rendering calculates a new UI description; React may then skip DOM work if the output is equivalent.

## Example

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}
// <Greeting name="Ada" />
```

A React component is a function of its props and state that returns UI.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
