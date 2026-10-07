---
layout: doc
question: true
title: "What is the CSS box model?"
questionTitle: "What is the CSS box model?"
description: "Learn What is the CSS box model? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "css"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Every element has content, padding, border, and margin. With `box-sizing: border-box`, declared width and height include padding and border, which makes component sizing easier to reason about."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/css/css-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "CSS"
    link: /frontend-interview-questions/css/
  - label: "What is the CSS box model?"
prev:
  text: "When should you use a button instead of a link?"
  link: "/frontend-interview-questions/html/html-question-2"
next:
  text: "What is the difference between the App Router and Pages Router?"
  link: "/frontend-interview-questions/next-js/next-js-question-2"
---
# What is the CSS box model?

## Answer

Every element has content, padding, border, and margin. With `box-sizing: border-box`, declared width and height include padding and border, which makes component sizing easier to reason about.

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
