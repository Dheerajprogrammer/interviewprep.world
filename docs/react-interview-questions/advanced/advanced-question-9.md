---
layout: doc
question: true
title: "What is server-side rendering?"
questionTitle: "What is server-side rendering?"
description: "Learn What is server-side rendering? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Server-side rendering produces HTML on the server for an initial request, improving first content and SEO in suitable cases. The client still downloads JavaScript to hydrate interactive components."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What is server-side rendering?"
prev:
  text: "How do you avoid unnecessary Redux re-renders?"
  link: "/react-interview-questions/redux/redux-question-9"
next:
  text: "How do you design a design-system component?"
  link: "/react-interview-questions/architecture/architecture-question-9"
---
# What is server-side rendering?

## Answer

Server-side rendering produces HTML on the server for an initial request, improving first content and SEO in suitable cases. The client still downloads JavaScript to hydrate interactive components.

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
