---
layout: doc
question: true
title: "How do you use semantic HTML for accessibility?"
questionTitle: "How do you use semantic HTML for accessibility?"
description: "Learn How do you use semantic HTML for accessibility? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "accessibility"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Start with native elements whose behavior already matches the intent—buttons, links, headings, landmarks, inputs, and tables. Native semantics provide keyboard support and accessible names with less code and fewer failure modes than custom ARIA widgets."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/accessibility/accessibility-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Accessibility"
    link: /frontend-interview-questions/accessibility/
  - label: "How do you use semantic HTML for accessibility?"
prev:
  text: "What is CORS?"
  link: "/frontend-interview-questions/security/security-question-2"
next:
  text: "How do forms associate labels with inputs?"
  link: "/frontend-interview-questions/html/html-question-3"
---
# How do you use semantic HTML for accessibility?

## Answer

Start with native elements whose behavior already matches the intent—buttons, links, headings, landmarks, inputs, and tables. Native semantics provide keyboard support and accessible names with less code and fewer failure modes than custom ARIA widgets.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
