---
layout: doc
question: true
title: "How do you prevent duplicate network requests?"
questionTitle: "How do you prevent duplicate network requests?"
description: "Learn How do you prevent duplicate network requests? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "data"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Deduplicate requests with a shared cache key or in-flight promise, cancel obsolete work on input changes, and make server mutations idempotent. Avoid relying only on UI disabling because retries and multiple tabs still happen."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/data/data-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Data & Caching"
    link: /frontend-system-design/data/
  - label: "How do you prevent duplicate network requests?"
prev:
  text: "How do you measure Core Web Vitals?"
  link: "/frontend-system-design/performance/performance-question-7"
next:
  text: "How do you prevent notification overload?"
  link: "/frontend-system-design/realtime/realtime-question-7"
---
# How do you prevent duplicate network requests?

## Answer

Deduplicate requests with a shared cache key or in-flight promise, cancel obsolete work on input changes, and make server mutations idempotent. Avoid relying only on UI disabling because retries and multiple tabs still happen.

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
