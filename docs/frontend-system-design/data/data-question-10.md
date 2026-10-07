---
layout: doc
question: true
title: "How do you secure client data?"
questionTitle: "How do you secure client data?"
description: "Learn How do you secure client data? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "data"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Minimize sensitive data in the client, enforce authorization on the server, protect transport with HTTPS, avoid long-lived browser-readable secrets, and consider caching, screenshots, logs, and shared-device exposure in the threat model."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/data/data-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Data & Caching"
    link: /frontend-system-design/data/
  - label: "How do you secure client data?"
prev:
  text: "How do you build a performance budget?"
  link: "/frontend-system-design/performance/performance-question-10"
next:
  text: "How do you observe real-time reliability?"
  link: "/frontend-system-design/realtime/realtime-question-10"
---
# How do you secure client data?

## Answer

Minimize sensitive data in the client, enforce authorization on the server, protect transport with HTTPS, avoid long-lived browser-readable secrets, and consider caching, screenshots, logs, and shared-device exposure in the threat model.

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
