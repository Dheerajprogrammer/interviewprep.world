---
layout: doc
question: true
title: "How do you manage pagination?"
questionTitle: "How do you manage pagination?"
description: "Learn How do you manage pagination? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "data"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use stable ordering and a cursor for changing datasets, keep page state in the URL when it should be shareable, reset pages after filter changes, and report total counts only when their cost and accuracy justify it."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/data/data-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Data & Caching"
    link: /frontend-system-design/data/
  - label: "How do you manage pagination?"
prev:
  text: "How do you design list virtualization?"
  link: "/frontend-system-design/performance/performance-question-6"
next:
  text: "How do you order real-time events?"
  link: "/frontend-system-design/realtime/realtime-question-6"
---
# How do you manage pagination?

## Answer

Use stable ordering and a cursor for changing datasets, keep page state in the URL when it should be shareable, reset pages after filter changes, and report total counts only when their cost and accuracy justify it.

## Example

```ts
const key = ["product", productId]
const product = await cache.getOrFetch(key, () => api.getProduct(productId))
```

A stable cache key identifies the resource; invalidation happens after mutations that affect it.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
