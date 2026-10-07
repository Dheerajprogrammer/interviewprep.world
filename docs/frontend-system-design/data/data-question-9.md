---
layout: doc
question: true
title: "How do you handle API errors?"
questionTitle: "How do you handle API errors?"
description: "Learn How do you handle API errors? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "data"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Classify errors into validation, authentication, authorization, not-found, rate-limit, transient, and unexpected failures; show an actionable recovery where possible; and log enough context for diagnosis without leaking internals."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/data/data-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Data & Caching"
    link: /frontend-system-design/data/
  - label: "How do you handle API errors?"
prev:
  text: "How do you handle low-end devices?"
  link: "/frontend-system-design/performance/performance-question-9"
next:
  text: "How do you handle conflicts?"
  link: "/frontend-system-design/realtime/realtime-question-9"
---
# How do you handle API errors?

## Answer

Classify errors into validation, authentication, authorization, not-found, rate-limit, transient, and unexpected failures; show an actionable recovery where possible; and log enough context for diagnosis without leaking internals.

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
