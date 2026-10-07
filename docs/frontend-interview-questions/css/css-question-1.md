---
layout: doc
question: true
title: "How does CSS specificity work?"
questionTitle: "How does CSS specificity work?"
description: "Learn How does CSS specificity work? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "css"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Specificity determines which competing declaration wins after origin and importance: IDs outrank classes, attributes, and pseudo-classes, which outrank element selectors. Prefer low-specificity, composable selectors instead of escalating with IDs or `!important`."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/css/css-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "CSS"
    link: /frontend-interview-questions/css/
  - label: "How does CSS specificity work?"
prev:
  text: "What is semantic HTML?"
  link: "/frontend-interview-questions/html/html-question-1"
next:
  text: "What is Next.js?"
  link: "/frontend-interview-questions/next-js/next-js-question-1"
---
# How does CSS specificity work?

## Answer

Specificity determines which competing declaration wins after origin and importance: IDs outrank classes, attributes, and pseudo-classes, which outrank element selectors. Prefer low-specificity, composable selectors instead of escalating with IDs or `!important`.

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
