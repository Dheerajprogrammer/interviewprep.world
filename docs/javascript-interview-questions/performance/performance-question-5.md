---
layout: doc
question: true
title: "What is a layout thrash?"
questionTitle: "What is a layout thrash?"
description: "Learn What is a layout thrash? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Layout thrashing occurs when code alternates DOM writes with layout reads, forcing the browser to recalculate layout repeatedly. Batch reads before writes and prefer transform-based animation to reduce forced synchronous layout."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "What is a layout thrash?"
prev:
  text: "When does `DOMContentLoaded` fire?"
  link: "/javascript-interview-questions/dom/dom-question-5"
next:
  text: "What is CSRF and how can it be mitigated?"
  link: "/javascript-interview-questions/security/security-question-5"
---
# What is a layout thrash?

## Answer

Layout thrashing occurs when code alternates DOM writes with layout reads, forcing the browser to recalculate layout repeatedly. Batch reads before writes and prefer transform-based animation to reduce forced synchronous layout.

## Example

```js
function debounce(fn, delay) {
  let id
  return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), delay) }
}
const search = debounce(query => fetch(`/api/search?q=${query}`), 250)
```

Debouncing waits for input to settle and avoids a request for every keystroke.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
