---
layout: doc
question: true
title: "What does web accessibility mean?"
questionTitle: "What does web accessibility mean?"
description: "Learn What does web accessibility mean? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "accessibility"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Web accessibility means people can perceive, understand, navigate, and operate a product across disabilities, devices, and assistive technologies. It is built into design and engineering, not added as a final audit."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/accessibility/accessibility-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Accessibility"
    link: /frontend-interview-questions/accessibility/
  - label: "What does web accessibility mean?"
prev:
  text: "What is the same-origin policy?"
  link: "/frontend-interview-questions/security/security-question-1"
next:
  text: "When should you use a button instead of a link?"
  link: "/frontend-interview-questions/html/html-question-2"
---
# What does web accessibility mean?

## Answer

Web accessibility means people can perceive, understand, navigate, and operate a product across disabilities, devices, and assistive technologies. It is built into design and engineering, not added as a final audit.

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
