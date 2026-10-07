---
layout: doc
question: true
title: "What is debouncing?"
questionTitle: "What is debouncing?"
description: "Learn What is debouncing? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Debouncing delays a function until calls stop for a specified interval. It is useful for bursty input such as search typing or resize events when only the final value matters."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "What is debouncing?"
prev:
  text: "What is the difference between event bubbling and capturing?"
  link: "/javascript-interview-questions/dom/dom-question-2"
next:
  text: "What is CORS?"
  link: "/javascript-interview-questions/security/security-question-2"
---
# What is debouncing?

## Answer

Debouncing delays a function until calls stop for a specified interval. It is useful for bursty input such as search typing or resize events when only the final value matters.

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
