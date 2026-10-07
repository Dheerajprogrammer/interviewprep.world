---
layout: doc
question: true
title: "How do you prevent layout shift?"
questionTitle: "How do you prevent layout shift?"
description: "Learn How do you prevent layout shift? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Reserve dimensions for images, embeds, ads, and async content; avoid inserting content above existing content; and use transform animations. Track CLS in field data because third-party and font behavior often causes real shifts."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/performance/performance-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Performance & Delivery"
    link: /frontend-system-design/performance/
  - label: "How do you prevent layout shift?"
prev:
  text: "How do you identify critical user journeys?"
  link: "/frontend-system-design/requirements/requirements-question-5"
next:
  text: "How do you handle optimistic updates?"
  link: "/frontend-system-design/data/data-question-5"
---
# How do you prevent layout shift?

## Answer

Reserve dimensions for images, embeds, ads, and async content; avoid inserting content above existing content; and use transform animations. Track CLS in field data because third-party and font behavior often causes real shifts.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
