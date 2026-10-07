---
layout: doc
question: true
title: "What is the difference between defer and async scripts?"
questionTitle: "What is the difference between defer and async scripts?"
description: "Learn What is the difference between defer and async scripts? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "html"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`defer` scripts download in parallel, execute after HTML parsing, and preserve document order. `async` scripts execute as soon as they finish downloading, so they are suitable only for independent scripts such as analytics."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/html/html-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "HTML"
    link: /frontend-interview-questions/html/
  - label: "What is the difference between defer and async scripts?"
prev:
  text: "How do you meet color contrast requirements?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-8"
next:
  text: "What is the cascade layer feature?"
  link: "/frontend-interview-questions/css/css-question-9"
---
# What is the difference between defer and async scripts?

## Answer

`defer` scripts download in parallel, execute after HTML parsing, and preserve document order. `async` scripts execute as soon as they finish downloading, so they are suitable only for independent scripts such as analytics.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
