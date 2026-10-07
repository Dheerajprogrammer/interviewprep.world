---
layout: doc
question: true
title: "When should you use a button instead of a link?"
questionTitle: "When should you use a button instead of a link?"
description: "Learn When should you use a button instead of a link? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "html"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a link when the action navigates to another URL and a button when it changes state or performs an action on the current page. This distinction gives keyboard and screen-reader users the interaction they expect."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/html/html-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "HTML"
    link: /frontend-interview-questions/html/
  - label: "When should you use a button instead of a link?"
prev:
  text: "What does web accessibility mean?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-1"
next:
  text: "What is the CSS box model?"
  link: "/frontend-interview-questions/css/css-question-2"
---
# When should you use a button instead of a link?

## Answer

Use a link when the action navigates to another URL and a button when it changes state or performs an action on the current page. This distinction gives keyboard and screen-reader users the interaction they expect.

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
