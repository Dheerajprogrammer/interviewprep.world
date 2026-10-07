---
layout: doc
question: true
title: "What is the difference between relative, absolute, fixed, and sticky positioning?"
questionTitle: "What is the difference between relative, absolute, fixed, and sticky positioning?"
description: "Learn What is the difference between relative, absolute, fixed, and sticky positioning? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "css"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`relative` keeps the element in normal flow while allowing an offset; `absolute` positions it against a containing block and removes it from flow; `fixed` is normally viewport-anchored; `sticky` stays in flow until it reaches a scroll threshold."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/css/css-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "CSS"
    link: /frontend-interview-questions/css/
  - label: "What is the difference between relative, absolute, fixed, and sticky positioning?"
prev:
  text: "What are custom data attributes?"
  link: "/frontend-interview-questions/html/html-question-5"
next:
  text: "How does Next.js data fetching and caching work?"
  link: "/frontend-interview-questions/next-js/next-js-question-5"
---
# What is the difference between relative, absolute, fixed, and sticky positioning?

## Answer

`relative` keeps the element in normal flow while allowing an offset; `absolute` positions it against a containing block and removes it from flow; `fixed` is normally viewport-anchored; `sticky` stays in flow until it reaches a scroll threshold.

## Example

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
```

This grid responds to available container width without relying on device-specific breakpoints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
