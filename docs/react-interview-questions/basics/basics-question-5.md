---
layout: doc
question: true
title: "What is the difference between props and state?"
questionTitle: "What is the difference between props and state?"
description: "Learn What is the difference between props and state? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Props are inputs supplied by a parent and should be treated as read-only; state is data owned and updated by the component. A component renders from both, but only state changes through its setter or reducer."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is the difference between props and state?"
prev:
  text: "Build a paginated data table."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-4"
next:
  text: "When should you use `useMemo`?"
  link: "/react-interview-questions/hooks/hooks-question-5"
---
# What is the difference between props and state?

## Answer

Props are inputs supplied by a parent and should be treated as read-only; state is data owned and updated by the component. A component renders from both, but only state changes through its setter or reducer.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
