---
layout: doc
question: true
title: "How do you handle low-end devices?"
questionTitle: "How do you handle low-end devices?"
description: "Learn How do you handle low-end devices? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Design for constrained CPU, memory, and network: ship less JavaScript, avoid expensive hydration and animation, use progressive enhancement, and test on representative devices rather than only desktop throttling."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/performance/performance-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Performance & Delivery"
    link: /frontend-system-design/performance/
  - label: "How do you handle low-end devices?"
prev:
  text: "How do you handle progressive delivery?"
  link: "/frontend-system-design/requirements/requirements-question-9"
next:
  text: "How do you handle API errors?"
  link: "/frontend-system-design/data/data-question-9"
---
# How do you handle low-end devices?

## Answer

Design for constrained CPU, memory, and network: ship less JavaScript, avoid expensive hydration and animation, use progressive enhancement, and test on representative devices rather than only desktop throttling.

## Example

```js
const ProductGallery = lazy(() => import("./ProductGallery"))
// render it behind <Suspense> after the primary product information
```

This defers non-critical code so the primary content can become interactive sooner.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
