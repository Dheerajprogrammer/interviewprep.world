---
layout: doc
question: true
title: "What is React Server Components?"
questionTitle: "What is React Server Components?"
description: "Learn What is React Server Components? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Advanced React APIs solve composition and integration problems: rendering outside the tree, recovering from errors, exposing imperative bridges, or sharing behaviour. Choose the smallest abstraction that keeps ownership clear."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What is React Server Components?"
prev:
  text: "When is Redux not a good fit?"
  link: "/react-interview-questions/redux/redux-question-10"
next:
  text: "How do you migrate a legacy React application?"
  link: "/react-interview-questions/architecture/architecture-question-10"
---
# What is React Server Components?

## Answer

Advanced React APIs solve composition and integration problems: rendering outside the tree, recovering from errors, exposing imperative bridges, or sharing behaviour. Choose the smallest abstraction that keeps ownership clear.

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
