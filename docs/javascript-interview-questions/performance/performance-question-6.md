---
layout: doc
question: true
title: "How can you avoid unnecessary reflows and repaints?"
questionTitle: "How can you avoid unnecessary reflows and repaints?"
description: "Learn How can you avoid unnecessary reflows and repaints? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Batch DOM changes, avoid layout reads after writes, update classes rather than many inline styles, and animate `transform` or `opacity` where possible. Profile first because layout is only one potential bottleneck."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "How can you avoid unnecessary reflows and repaints?"
prev:
  text: "How do you create and insert DOM elements safely?"
  link: "/javascript-interview-questions/dom/dom-question-6"
next:
  text: "Why is `eval` dangerous?"
  link: "/javascript-interview-questions/security/security-question-6"
---
# How can you avoid unnecessary reflows and repaints?

## Answer

Batch DOM changes, avoid layout reads after writes, update classes rather than many inline styles, and animate `transform` or `opacity` where possible. Profile first because layout is only one potential bottleneck.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
