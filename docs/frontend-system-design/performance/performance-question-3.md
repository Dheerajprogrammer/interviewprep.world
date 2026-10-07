---
layout: doc
question: true
title: "How do you design image delivery at scale?"
questionTitle: "How do you design image delivery at scale?"
description: "Learn How do you design image delivery at scale? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Store originals once, generate responsive sizes and modern formats at an image CDN, select candidates with `srcset`, reserve layout space, and prioritize only images visible in the critical path."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/performance/performance-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Performance & Delivery"
    link: /frontend-system-design/performance/
  - label: "How do you design image delivery at scale?"
prev:
  text: "What non-functional requirements matter for frontend systems?"
  link: "/frontend-system-design/requirements/requirements-question-3"
next:
  text: "How do you handle stale data?"
  link: "/frontend-system-design/data/data-question-3"
---
# How do you design image delivery at scale?

## Answer

Store originals once, generate responsive sizes and modern formats at an image CDN, select candidates with `srcset`, reserve layout space, and prioritize only images visible in the critical path.

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
