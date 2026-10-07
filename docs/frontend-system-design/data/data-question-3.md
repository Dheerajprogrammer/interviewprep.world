---
layout: doc
question: true
title: "How do you handle stale data?"
questionTitle: "How do you handle stale data?"
description: "Learn How do you handle stale data? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "data"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/data/data-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Data & Caching"
    link: /frontend-system-design/data/
  - label: "How do you handle stale data?"
prev:
  text: "How do you design image delivery at scale?"
  link: "/frontend-system-design/performance/performance-question-3"
next:
  text: "How do you design a collaborative editor?"
  link: "/frontend-system-design/realtime/realtime-question-3"
---
# How do you handle stale data?

## Answer

Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless.

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
