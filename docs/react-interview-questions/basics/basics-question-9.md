---
layout: doc
question: true
title: "What is an uncontrolled component?"
questionTitle: "What is an uncontrolled component?"
description: "Learn What is an uncontrolled component? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An uncontrolled form control stores its current value in the DOM, usually accessed through a ref at submission time. It can be simpler for isolated inputs or integrations, but makes live validation and synchronized UI state harder."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is an uncontrolled component?"
prev:
  text: "Build a virtualized list."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-8"
next:
  text: "How do stale closures happen in Hooks?"
  link: "/react-interview-questions/hooks/hooks-question-9"
---
# What is an uncontrolled component?

## Answer

An uncontrolled form control stores its current value in the DOM, usually accessed through a ref at submission time. It can be simpler for isolated inputs or integrations, but makes live validation and synchronized UI state harder.

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
