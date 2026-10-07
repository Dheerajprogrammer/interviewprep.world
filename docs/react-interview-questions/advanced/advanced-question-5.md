---
layout: doc
question: true
title: "What are compound components?"
questionTitle: "What are compound components?"
description: "Learn What are compound components? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Compound components share implicit state through context while exposing coordinated child components, such as Tabs and TabPanel. They give callers flexible markup while the parent manages interaction rules."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What are compound components?"
prev:
  text: "What is a selector?"
  link: "/react-interview-questions/redux/redux-question-5"
next:
  text: "How do you define API boundaries in React?"
  link: "/react-interview-questions/architecture/architecture-question-5"
---
# What are compound components?

## Answer

Compound components share implicit state through context while exposing coordinated child components, such as Tabs and TabPanel. They give callers flexible markup while the parent manages interaction rules.

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
