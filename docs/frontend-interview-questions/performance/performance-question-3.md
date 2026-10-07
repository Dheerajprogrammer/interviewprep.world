---
layout: doc
question: true
title: "How do you avoid Cumulative Layout Shift?"
questionTitle: "How do you avoid Cumulative Layout Shift?"
description: "Learn How do you avoid Cumulative Layout Shift? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Give images, embeds, and ad slots reserved dimensions; avoid late content above the fold; and use transforms for motion. A layout should not move because an asset or font finished loading."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/performance/performance-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Performance"
    link: /frontend-interview-questions/performance/
  - label: "How do you avoid Cumulative Layout Shift?"
prev:
  text: "What is a Subject?"
  link: "/frontend-interview-questions/rxjs/rxjs-question-3"
next:
  text: "What is cross-site scripting?"
  link: "/frontend-interview-questions/security/security-question-3"
---
# How do you avoid Cumulative Layout Shift?

## Answer

Give images, embeds, and ad slots reserved dimensions; avoid late content above the fold; and use transforms for motion. A layout should not move because an asset or font finished loading.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
