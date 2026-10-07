---
layout: doc
question: true
title: "How do you design infinite scrolling?"
questionTitle: "How do you design infinite scrolling?"
description: "Learn How do you design infinite scrolling? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "data"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use cursor-based pagination, request the next page near the viewport boundary, prevent duplicate concurrent loads, preserve scroll position, and offer a reachable footer or alternative pagination for accessibility and control."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/data/data-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Data & Caching"
    link: /frontend-system-design/data/
  - label: "How do you design infinite scrolling?"
prev:
  text: "How do you implement code splitting?"
  link: "/frontend-system-design/performance/performance-question-4"
next:
  text: "How do you reconcile real-time updates?"
  link: "/frontend-system-design/realtime/realtime-question-4"
---
# How do you design infinite scrolling?

## Answer

Use cursor-based pagination, request the next page near the viewport boundary, prevent duplicate concurrent loads, preserve scroll position, and offer a reachable footer or alternative pagination for accessibility and control.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
