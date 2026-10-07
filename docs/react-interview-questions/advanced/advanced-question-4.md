---
layout: doc
question: true
title: "What is a higher-order component?"
questionTitle: "What is a higher-order component?"
description: "Learn What is a higher-order component? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A higher-order component takes a component and returns an enhanced component. It was a common logic-reuse pattern; custom Hooks are usually simpler for function components, but HOCs remain useful for cross-cutting wrappers."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What is a higher-order component?"
prev:
  text: "What is Redux Toolkit?"
  link: "/react-interview-questions/redux/redux-question-4"
next:
  text: "How do you handle feature flags?"
  link: "/react-interview-questions/architecture/architecture-question-4"
---
# What is a higher-order component?

## Answer

A higher-order component takes a component and returns an enhanced component. It was a common logic-reuse pattern; custom Hooks are usually simpler for function components, but HOCs remain useful for cross-cutting wrappers.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
