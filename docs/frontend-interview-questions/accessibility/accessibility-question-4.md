---
layout: doc
question: true
title: "How do you make a custom control keyboard accessible?"
questionTitle: "How do you make a custom control keyboard accessible?"
description: "Learn How do you make a custom control keyboard accessible? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "accessibility"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Prefer a native control. If a custom control is unavoidable, make it focusable, support the expected keyboard commands, expose its role and state, show a visible focus indicator, and test it without a pointer."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/accessibility/accessibility-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Accessibility"
    link: /frontend-interview-questions/accessibility/
  - label: "How do you make a custom control keyboard accessible?"
prev:
  text: "How do you prevent XSS?"
  link: "/frontend-interview-questions/security/security-question-4"
next:
  text: "What are custom data attributes?"
  link: "/frontend-interview-questions/html/html-question-5"
---
# How do you make a custom control keyboard accessible?

## Answer

Prefer a native control. If a custom control is unavoidable, make it focusable, support the expected keyboard commands, expose its role and state, show a visible focus indicator, and test it without a pointer.

## Example

```html
<button type="button" aria-expanded="false" aria-controls="filters">
  Show filters
</button>
<section id="filters" hidden>…</section>
```

The native button supplies keyboard behavior; `aria-expanded` communicates the visible state.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
