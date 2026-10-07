---
layout: doc
question: true
title: "What is semantic HTML?"
questionTitle: "What is semantic HTML?"
description: "Learn What is semantic HTML? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "html"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Semantic HTML uses elements for their intended meaning—such as `nav`, `main`, `button`, and `article`—rather than styling generic `div` elements. It gives browsers, search engines, and assistive technology a reliable structure without adding ARIA by hand."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/html/html-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "HTML"
    link: /frontend-interview-questions/html/
  - label: "What is semantic HTML?"
next:
  text: "How does CSS specificity work?"
  link: "/frontend-interview-questions/css/css-question-1"
---
# What is semantic HTML?

## Answer

Semantic HTML uses elements for their intended meaning—such as `nav`, `main`, `button`, and `article`—rather than styling generic `div` elements. It gives browsers, search engines, and assistive technology a reliable structure without adding ARIA by hand.

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
