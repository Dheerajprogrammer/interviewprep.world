---
layout: doc
question: true
title: "How do you manage focus in a modal dialog?"
questionTitle: "How do you manage focus in a modal dialog?"
description: "Learn How do you manage focus in a modal dialog? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "accessibility"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Move focus into the dialog when it opens, keep Tab navigation within it, restore focus to the trigger when it closes, and provide an accessible name. Also prevent background content from being exposed or interactive while the modal is active."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/accessibility/accessibility-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Accessibility"
    link: /frontend-interview-questions/accessibility/
  - label: "How do you manage focus in a modal dialog?"
prev:
  text: "What is CSRF and how can it be mitigated?"
  link: "/frontend-interview-questions/security/security-question-5"
next:
  text: "How do HTML templates work?"
  link: "/frontend-interview-questions/html/html-question-6"
---
# How do you manage focus in a modal dialog?

## Answer

Move focus into the dialog when it opens, keep Tab navigation within it, restore focus to the trigger when it closes, and provide an accessible name. Also prevent background content from being exposed or interactive while the modal is active.

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
