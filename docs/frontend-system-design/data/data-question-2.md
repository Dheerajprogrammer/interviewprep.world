---
layout: doc
question: true
title: "How do you design a client-side cache?"
questionTitle: "How do you design a client-side cache?"
description: "Learn How do you design a client-side cache? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: medium
experienceLevel: mid
tags: ["system-design", "data"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Key entries by all inputs that affect the result, store freshness metadata, deduplicate in-flight requests, and define invalidation after mutations. Keep cache scope and eviction bounded so data does not become stale or consume unbounded memory."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/data/data-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Data & Caching"
    link: /frontend-system-design/data/
  - label: "How do you design a client-side cache?"
prev:
  text: "How do you optimize initial page load?"
  link: "/frontend-system-design/performance/performance-question-2"
next:
  text: "How do WebSockets compare with SSE?"
  link: "/frontend-system-design/realtime/realtime-question-2"
---
# How do you design a client-side cache?

## Answer

Key entries by all inputs that affect the result, store freshness metadata, deduplicate in-flight requests, and define invalidation after mutations. Keep cache scope and eviction bounded so data does not become stale or consume unbounded memory.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
