---
layout: doc
question: true
title: "What are Core Web Vitals?"
questionTitle: "What are Core Web Vitals?"
description: "Learn What are Core Web Vitals? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Core Web Vitals are user-centered loading, responsiveness, and visual-stability metrics: Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Use field data to prioritize improvements on real user journeys."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/performance/performance-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Performance"
    link: /frontend-interview-questions/performance/
  - label: "What are Core Web Vitals?"
prev:
  text: "What is an Observable?"
  link: "/frontend-interview-questions/rxjs/rxjs-question-1"
next:
  text: "What is the same-origin policy?"
  link: "/frontend-interview-questions/security/security-question-1"
---
# What are Core Web Vitals?

## Answer

Core Web Vitals are user-centered loading, responsiveness, and visual-stability metrics: Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Use field data to prioritize improvements on real user journeys.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
