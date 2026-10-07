---
layout: doc
question: true
title: "What is React Strict Mode?"
questionTitle: "What is React Strict Mode?"
description: "Learn What is React Strict Mode? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Strict Mode is a development-only wrapper that surfaces unsafe side effects and deprecated patterns. React may intentionally re-render or re-run effects to reveal code that is not resilient to mounting, cleanup, and replay."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is React Strict Mode?"
prev:
  text: "Build an accessible tabs component."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-9"
next:
  text: "How do you avoid an infinite effect loop?"
  link: "/react-interview-questions/hooks/hooks-question-10"
---
# What is React Strict Mode?

## Answer

Strict Mode is a development-only wrapper that surfaces unsafe side effects and deprecated patterns. React may intentionally re-render or re-run effects to reveal code that is not resilient to mounting, cleanup, and replay.

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
