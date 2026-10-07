---
layout: doc
question: true
title: "What is a render prop?"
questionTitle: "What is a render prop?"
description: "Learn What is a render prop? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A render prop is a function prop a component calls to let the caller control rendering while the component shares behavior or state. Custom Hooks usually provide the same logic-sharing benefit with less nesting today."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What is a render prop?"
prev:
  text: "Why must Redux reducers be pure?"
  link: "/react-interview-questions/redux/redux-question-3"
next:
  text: "How do you design reusable components?"
  link: "/react-interview-questions/architecture/architecture-question-3"
---
# What is a render prop?

## Answer

A render prop is a function prop a component calls to let the caller control rendering while the component shares behavior or state. Custom Hooks usually provide the same logic-sharing benefit with less nesting today.

## Example

```jsx
function Modal({ children }) {
  return createPortal(children, document.body)
}
```

A portal changes where DOM is mounted while preserving React context and event behaviour.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
