---
layout: doc
question: true
title: "What are portals?"
questionTitle: "What are portals?"
description: "Learn What are portals? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Portals render children into a different DOM container while keeping them in the same React tree. They are useful for modals and overlays; manage focus and accessibility because visual DOM position changes."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What are portals?"
prev:
  text: "What are actions, reducers, and the store?"
  link: "/react-interview-questions/redux/redux-question-2"
next:
  text: "How do you separate presentational and container concerns?"
  link: "/react-interview-questions/architecture/architecture-question-2"
---
# What are portals?

## Answer

Portals render children into a different DOM container while keeping them in the same React tree. They are useful for modals and overlays; manage focus and accessibility because visual DOM position changes.

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
