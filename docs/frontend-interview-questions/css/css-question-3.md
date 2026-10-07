---
layout: doc
question: true
title: "When should you use Flexbox versus Grid?"
questionTitle: "When should you use Flexbox versus Grid?"
description: "Learn When should you use Flexbox versus Grid? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "css"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use Flexbox for one-dimensional alignment along a row or column; use Grid when you need coordinated rows and columns. They are complementary—Grid often lays out a page area while Flexbox aligns content inside it."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/css/css-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "CSS"
    link: /frontend-interview-questions/css/
  - label: "When should you use Flexbox versus Grid?"
prev:
  text: "How do forms associate labels with inputs?"
  link: "/frontend-interview-questions/html/html-question-3"
next:
  text: "What are React Server Components in Next.js?"
  link: "/frontend-interview-questions/next-js/next-js-question-3"
---
# When should you use Flexbox versus Grid?

## Answer

Use Flexbox for one-dimensional alignment along a row or column; use Grid when you need coordinated rows and columns. They are complementary—Grid often lays out a page area while Flexbox aligns content inside it.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
