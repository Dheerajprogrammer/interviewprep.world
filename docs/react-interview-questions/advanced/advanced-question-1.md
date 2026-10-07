---
layout: doc
question: true
title: "What are error boundaries?"
questionTitle: "What are error boundaries?"
description: "Learn What are error boundaries? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Error boundaries catch rendering errors in their descendant tree and render a fallback UI. They do not catch event-handler, async, or server-rendering errors, which need their own handling."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What are error boundaries?"
prev:
  text: "What are the core Redux principles?"
  link: "/react-interview-questions/redux/redux-question-1"
next:
  text: "How do you organize a scalable React project?"
  link: "/react-interview-questions/architecture/architecture-question-1"
---
# What are error boundaries?

## Answer

Error boundaries catch rendering errors in their descendant tree and render a fallback UI. They do not catch event-handler, async, or server-rendering errors, which need their own handling.

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
