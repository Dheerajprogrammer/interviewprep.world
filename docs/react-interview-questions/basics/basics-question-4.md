---
layout: doc
question: true
title: "What is JSX?"
questionTitle: "What is JSX?"
description: "Learn What is JSX? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "JSX is syntax that lets JavaScript describe UI with element-like markup. A build step transforms it into React element creation calls, so expressions use JavaScript rules and values must be escaped or rendered safely."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is JSX?"
prev:
  text: "Build a reusable modal component."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-3"
next:
  text: "What is the difference between `useEffect` and `useLayoutEffect`?"
  link: "/react-interview-questions/hooks/hooks-question-4"
---
# What is JSX?

## Answer

JSX is syntax that lets JavaScript describe UI with element-like markup. A build step transforms it into React element creation calls, so expressions use JavaScript rules and values must be escaped or rendered safely.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
