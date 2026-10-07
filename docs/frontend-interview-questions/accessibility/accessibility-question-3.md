---
layout: doc
question: true
title: "When should you use ARIA?"
questionTitle: "When should you use ARIA?"
description: "Learn When should you use ARIA? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "accessibility"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use ARIA only when native HTML cannot express the required semantics or state, and follow the behavior that the chosen ARIA role implies. ARIA can improve a custom widget, but it cannot repair incorrect interaction or replace a native element."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/accessibility/accessibility-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Accessibility"
    link: /frontend-interview-questions/accessibility/
  - label: "When should you use ARIA?"
prev:
  text: "What is cross-site scripting?"
  link: "/frontend-interview-questions/security/security-question-3"
next:
  text: "What is the document outline?"
  link: "/frontend-interview-questions/html/html-question-4"
---
# When should you use ARIA?

## Answer

Use ARIA only when native HTML cannot express the required semantics or state, and follow the behavior that the chosen ARIA role implies. ARIA can improve a custom widget, but it cannot repair incorrect interaction or replace a native element.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
