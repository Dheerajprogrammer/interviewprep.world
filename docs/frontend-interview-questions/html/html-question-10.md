---
layout: doc
question: true
title: "How do you structure an accessible table?"
questionTitle: "How do you structure an accessible table?"
description: "Learn How do you structure an accessible table? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "html"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a real `table` for two-dimensional data, with `caption`, `thead`, `tbody`, and `th` headers. Connect headers with `scope` or `headers` so assistive technology can announce the row and column context of each cell."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/html/html-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "HTML"
    link: /frontend-interview-questions/html/
  - label: "How do you structure an accessible table?"
prev:
  text: "How do you support reduced motion preferences?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-9"
next:
  text: "How do you build responsive layouts without device-specific breakpoints?"
  link: "/frontend-interview-questions/css/css-question-10"
---
# How do you structure an accessible table?

## Answer

Use a real `table` for two-dimensional data, with `caption`, `thead`, `tbody`, and `th` headers. Connect headers with `scope` or `headers` so assistive technology can announce the row and column context of each cell.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
