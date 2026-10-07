---
layout: doc
question: true
title: "What are custom data attributes?"
questionTitle: "What are custom data attributes?"
description: "Learn What are custom data attributes? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "html"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Custom `data-*` attributes attach small, non-semantic metadata to an element, such as `data-id` or `data-state`. Read them through `element.dataset`; do not use them as a substitute for application state or accessible semantics."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/html/html-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "HTML"
    link: /frontend-interview-questions/html/
  - label: "What are custom data attributes?"
prev:
  text: "How do you make a custom control keyboard accessible?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-4"
next:
  text: "What is the difference between relative, absolute, fixed, and sticky positioning?"
  link: "/frontend-interview-questions/css/css-question-5"
---
# What are custom data attributes?

## Answer

Custom `data-*` attributes attach small, non-semantic metadata to an element, such as `data-id` or `data-state`. Read them through `element.dataset`; do not use them as a substitute for application state or accessible semantics.

## Example

```html
<label for="email">Email address</label>
<input id="email" name="email" type="email" autocomplete="email" />
```

The explicit label gives the input an accessible name and makes the label itself clickable.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
