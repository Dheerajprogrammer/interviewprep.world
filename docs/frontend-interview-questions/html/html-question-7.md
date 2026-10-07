---
layout: doc
question: true
title: "What is the purpose of the meta viewport tag?"
questionTitle: "What is the purpose of the meta viewport tag?"
description: "Learn What is the purpose of the meta viewport tag? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "html"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The viewport tag tells mobile browsers to use the device width as the layout viewport and sets the initial scale. Without it, a responsive layout can be rendered as a zoomed-out desktop page."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/html/html-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "HTML"
    link: /frontend-interview-questions/html/
  - label: "What is the purpose of the meta viewport tag?"
prev:
  text: "What is accessible name and description?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-6"
next:
  text: "What are CSS custom properties?"
  link: "/frontend-interview-questions/css/css-question-7"
---
# What is the purpose of the meta viewport tag?

## Answer

The viewport tag tells mobile browsers to use the device width as the layout viewport and sets the initial scale. Without it, a responsive layout can be rendered as a zoomed-out desktop page.

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
