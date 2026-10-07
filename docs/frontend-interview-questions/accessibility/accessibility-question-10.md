---
layout: doc
question: true
title: "What is an accessible error message for a form field?"
questionTitle: "What is an accessible error message for a form field?"
description: "Learn What is an accessible error message for a form field? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "accessibility"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Put a concise, actionable message near the field, programmatically associate it with the input, and move focus or announce a summary after submission when appropriate. Explain how to fix the issue, not only that validation failed."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/accessibility/accessibility-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Accessibility"
    link: /frontend-interview-questions/accessibility/
  - label: "What is an accessible error message for a form field?"
prev:
  text: "How do you protect a frontend supply chain?"
  link: "/frontend-interview-questions/security/security-question-10"
---
# What is an accessible error message for a form field?

## Answer

Put a concise, actionable message near the field, programmatically associate it with the input, and move focus or announce a summary after submission when appropriate. Explain how to fix the issue, not only that validation failed.

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
