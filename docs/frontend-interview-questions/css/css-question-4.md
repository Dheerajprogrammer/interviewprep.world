---
layout: doc
question: true
title: "How do stacking contexts work?"
questionTitle: "How do stacking contexts work?"
description: "Learn How do stacking contexts work? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "css"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A stacking context is an isolated z-ordering group created by properties such as positioned elements with `z-index`, `transform`, or `opacity`. A child cannot escape its parent context, so raising its `z-index` may not place it above another context."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/css/css-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "CSS"
    link: /frontend-interview-questions/css/
  - label: "How do stacking contexts work?"
prev:
  text: "What is the document outline?"
  link: "/frontend-interview-questions/html/html-question-4"
next:
  text: "When do you use a Server Component versus a Client Component?"
  link: "/frontend-interview-questions/next-js/next-js-question-4"
---
# How do stacking contexts work?

## Answer

A stacking context is an isolated z-ordering group created by properties such as positioned elements with `z-index`, `transform`, or `opacity`. A child cannot escape its parent context, so raising its `z-index` may not place it above another context.

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
