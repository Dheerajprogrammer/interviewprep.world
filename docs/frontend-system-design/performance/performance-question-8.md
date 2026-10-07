---
layout: doc
question: true
title: "How do you cache static assets?"
questionTitle: "How do you cache static assets?"
description: "Learn How do you cache static assets? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Fingerprint immutable assets in filenames and serve them with long-lived immutable cache headers through a CDN; serve HTML with a shorter policy so deployments can point users to the new asset graph."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/performance/performance-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Performance & Delivery"
    link: /frontend-system-design/performance/
  - label: "How do you cache static assets?"
prev:
  text: "How do you communicate trade-offs?"
  link: "/frontend-system-design/requirements/requirements-question-8"
next:
  text: "How do you design offline support?"
  link: "/frontend-system-design/data/data-question-8"
---
# How do you cache static assets?

## Answer

Fingerprint immutable assets in filenames and serve them with long-lived immutable cache headers through a CDN; serve HTML with a shorter policy so deployments can point users to the new asset graph.

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
