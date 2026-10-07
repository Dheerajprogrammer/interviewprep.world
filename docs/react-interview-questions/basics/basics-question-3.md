---
layout: doc
question: true
title: "What is reconciliation in React?"
questionTitle: "What is reconciliation in React?"
description: "Learn What is reconciliation in React? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Reconciliation is React’s process for comparing successive element trees to decide what to preserve, update, create, or remove. Component type and stable keys establish identity, so changing either can reset a component’s state."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is reconciliation in React?"
prev:
  text: "Build a debounced search input."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-2"
next:
  text: "Explain the `useEffect` Hook."
  link: "/react-interview-questions/hooks/hooks-question-3"
---
# What is reconciliation in React?

## Answer

Reconciliation is React’s process for comparing successive element trees to decide what to preserve, update, create, or remove. Component type and stable keys establish identity, so changing either can reset a component’s state.

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
