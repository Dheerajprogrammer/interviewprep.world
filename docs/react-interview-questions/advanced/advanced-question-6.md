---
layout: doc
question: true
title: "What is `forwardRef`?"
questionTitle: "What is `forwardRef`?"
description: "Learn What is `forwardRef`? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "forwardRef lets a component pass a ref it receives to a descendant DOM node or imperative handle. Use it sparingly for focus, measurement, or integration; prefer declarative props for ordinary behavior."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What is `forwardRef`?"
prev:
  text: "How do you handle async logic with Redux?"
  link: "/react-interview-questions/redux/redux-question-6"
next:
  text: "How do you make React code testable?"
  link: "/react-interview-questions/architecture/architecture-question-6"
---
# What is `forwardRef`?

## Answer

forwardRef lets a component pass a ref it receives to a descendant DOM node or imperative handle. Use it sparingly for focus, measurement, or integration; prefer declarative props for ordinary behavior.

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
