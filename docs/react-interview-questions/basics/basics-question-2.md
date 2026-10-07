---
layout: doc
question: true
title: "What is the Virtual DOM?"
questionTitle: "What is the Virtual DOM?"
description: "Learn What is the Virtual DOM? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The Virtual DOM is React’s in-memory representation of the desired UI tree. After state changes, React compares the new tree with the previous one and applies the necessary DOM updates; it is an implementation detail, not a guarantee that every update is cheap."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is the Virtual DOM?"
prev:
  text: "Build a searchable, sortable React list."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-1"
next:
  text: "Explain the `useState` Hook."
  link: "/react-interview-questions/hooks/hooks-question-2"
---
# What is the Virtual DOM?

## Answer

The Virtual DOM is React’s in-memory representation of the desired UI tree. After state changes, React compares the new tree with the previous one and applies the necessary DOM updates; it is an implementation detail, not a guarantee that every update is cheap.

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
