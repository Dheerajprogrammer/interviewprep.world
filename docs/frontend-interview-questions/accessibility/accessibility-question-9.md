---
layout: doc
question: true
title: "How do you support reduced motion preferences?"
questionTitle: "How do you support reduced motion preferences?"
description: "Learn How do you support reduced motion preferences? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "accessibility"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Respect `prefers-reduced-motion` by removing or simplifying nonessential movement, especially parallax, autoplay, and large transitions. Keep essential feedback but avoid motion that can distract or cause discomfort."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/accessibility/accessibility-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Accessibility"
    link: /frontend-interview-questions/accessibility/
  - label: "How do you support reduced motion preferences?"
prev:
  text: "How do you safely render untrusted content?"
  link: "/frontend-interview-questions/security/security-question-9"
next:
  text: "How do you structure an accessible table?"
  link: "/frontend-interview-questions/html/html-question-10"
---
# How do you support reduced motion preferences?

## Answer

Respect `prefers-reduced-motion` by removing or simplifying nonessential movement, especially parallax, autoplay, and large transitions. Keep essential feedback but avoid motion that can distract or cause discomfort.

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
