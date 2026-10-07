---
layout: doc
question: true
title: "What is accessible name and description?"
questionTitle: "What is accessible name and description?"
description: "Learn What is accessible name and description? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "accessibility"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The accessible name is the primary label announced for a control; the description provides supplemental help. Provide them with visible text, `label`, `aria-labelledby`, and `aria-describedby` in that order of preference."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/accessibility/accessibility-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Accessibility"
    link: /frontend-interview-questions/accessibility/
  - label: "What is accessible name and description?"
prev:
  text: "Why is Content Security Policy important?"
  link: "/frontend-interview-questions/security/security-question-6"
next:
  text: "What is the purpose of the meta viewport tag?"
  link: "/frontend-interview-questions/html/html-question-7"
---
# What is accessible name and description?

## Answer

The accessible name is the primary label announced for a control; the description provides supplemental help. Provide them with visible text, `label`, `aria-labelledby`, and `aria-describedby` in that order of preference.

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
