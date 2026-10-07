---
layout: doc
question: true
title: "What causes long tasks on the main thread?"
questionTitle: "What causes long tasks on the main thread?"
description: "Learn What causes long tasks on the main thread? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Large JavaScript parsing or execution, expensive rendering, synchronous event handlers, and third-party scripts can block the main thread for more than 50 ms. Split, defer, or move non-UI computation off the critical path."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/performance/performance-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Performance"
    link: /frontend-interview-questions/performance/
  - label: "What causes long tasks on the main thread?"
prev:
  text: "How do you handle errors in an RxJS stream?"
  link: "/frontend-interview-questions/rxjs/rxjs-question-8"
next:
  text: "What cookie attributes improve security?"
  link: "/frontend-interview-questions/security/security-question-8"
---
# What causes long tasks on the main thread?

## Answer

Large JavaScript parsing or execution, expensive rendering, synchronous event handlers, and third-party scripts can block the main thread for more than 50 ms. Split, defer, or move non-UI computation off the critical path.

## Example

```html
<link rel="preload" as="image" href="/hero.webp" fetchpriority="high" />
<img src="/hero.webp" width="1200" height="675" alt="Product dashboard" />
```

Preloading the verified LCP image and reserving its dimensions can improve loading and prevent layout shift.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
