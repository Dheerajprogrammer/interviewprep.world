---
layout: doc
question: true
title: "What are CSS custom properties?"
questionTitle: "What are CSS custom properties?"
description: "Learn What are CSS custom properties? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "css"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Custom properties are cascade-aware variables such as `--space-2` that can be reused with `var()`. They inherit by default and are especially useful for tokens, theming, and values that must change at runtime."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/css/css-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "CSS"
    link: /frontend-interview-questions/css/
  - label: "What are CSS custom properties?"
prev:
  text: "What is the purpose of the meta viewport tag?"
  link: "/frontend-interview-questions/html/html-question-7"
next:
  text: "How do dynamic routes work in Next.js?"
  link: "/frontend-interview-questions/next-js/next-js-question-7"
---
# What are CSS custom properties?

## Answer

Custom properties are cascade-aware variables such as `--space-2` that can be reused with `var()`. They inherit by default and are especially useful for tokens, theming, and values that must change at runtime.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
