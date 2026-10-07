---
layout: doc
question: true
title: "What is the document outline?"
questionTitle: "What is the document outline?"
description: "Learn What is the document outline? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "html"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A document outline is the meaningful hierarchy created by headings and sectioning content. Keep one clear `h1`, then use headings in order to describe the page structure rather than choosing levels for visual size."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/html/html-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "HTML"
    link: /frontend-interview-questions/html/
  - label: "What is the document outline?"
prev:
  text: "When should you use ARIA?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-3"
next:
  text: "How do stacking contexts work?"
  link: "/frontend-interview-questions/css/css-question-4"
---
# What is the document outline?

## Answer

A document outline is the meaningful hierarchy created by headings and sectioning content. Keep one clear `h1`, then use headings in order to describe the page structure rather than choosing levels for visual size.

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
