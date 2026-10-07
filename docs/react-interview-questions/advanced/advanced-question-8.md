---
layout: doc
question: true
title: "What is hydration?"
questionTitle: "What is hydration?"
description: "Learn What is hydration? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Hydration attaches React behavior to HTML rendered on the server. The client render must match the server output; mismatches can cause warnings, discarded markup, or subtle UI bugs."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What is hydration?"
prev:
  text: "What is normalized state?"
  link: "/react-interview-questions/redux/redux-question-8"
next:
  text: "How do you handle global errors?"
  link: "/react-interview-questions/architecture/architecture-question-8"
---
# What is hydration?

## Answer

Hydration attaches React behavior to HTML rendered on the server. The client render must match the server output; mismatches can cause warnings, discarded markup, or subtle UI bugs.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
