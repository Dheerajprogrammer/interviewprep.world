---
layout: doc
question: true
title: "How do you prevent layout shift with CSS?"
questionTitle: "How do you prevent layout shift with CSS?"
description: "Learn How do you prevent layout shift with CSS? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "css"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Reserve space for images, ads, and asynchronous content with dimensions or an aspect ratio; avoid inserting content above existing content; and animate transforms or opacity rather than layout-affecting properties."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/css/css-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "CSS"
    link: /frontend-interview-questions/css/
  - label: "How do you prevent layout shift with CSS?"
prev:
  text: "How do you use responsive images?"
  link: "/frontend-interview-questions/html/html-question-8"
next:
  text: "How do you handle loading and error states in the App Router?"
  link: "/frontend-interview-questions/next-js/next-js-question-8"
---
# How do you prevent layout shift with CSS?

## Answer

Reserve space for images, ads, and asynchronous content with dimensions or an aspect ratio; avoid inserting content above existing content; and animate transforms or opacity rather than layout-affecting properties.

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
