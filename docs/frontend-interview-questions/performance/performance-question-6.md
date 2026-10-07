---
layout: doc
question: true
title: "When should you lazy load code or images?"
questionTitle: "When should you lazy load code or images?"
description: "Learn When should you lazy load code or images? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Lazy-load below-the-fold images and code that is not needed for the initial route or interaction. Do not lazy-load the LCP image, critical UI, or code needed immediately after navigation."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/performance/performance-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Performance"
    link: /frontend-interview-questions/performance/
  - label: "When should you lazy load code or images?"
prev:
  text: "What do debounceTime and distinctUntilChanged do?"
  link: "/frontend-interview-questions/rxjs/rxjs-question-6"
next:
  text: "Why is Content Security Policy important?"
  link: "/frontend-interview-questions/security/security-question-6"
---
# When should you lazy load code or images?

## Answer

Lazy-load below-the-fold images and code that is not needed for the initial route or interaction. Do not lazy-load the LCP image, critical UI, or code needed immediately after navigation.

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
