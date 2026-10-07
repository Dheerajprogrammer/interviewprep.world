---
layout: doc
question: true
title: "What are keys and why are they important?"
questionTitle: "What are keys and why are they important?"
description: "Learn What are keys and why are they important? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keys give sibling elements stable identity across list updates. Use an ID from the data, not an array index when items can be inserted, removed, or reordered, so React preserves the correct DOM and component state."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What are keys and why are they important?"
prev:
  text: "Build a toast notification system."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-6"
next:
  text: "What is `useRef` used for?"
  link: "/react-interview-questions/hooks/hooks-question-7"
---
# What are keys and why are they important?

## Answer

Keys give sibling elements stable identity across list updates. Use an ID from the data, not an array index when items can be inserted, removed, or reordered, so React preserves the correct DOM and component state.

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
