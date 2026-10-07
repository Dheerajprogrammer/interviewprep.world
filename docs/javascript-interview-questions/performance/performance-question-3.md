---
layout: doc
question: true
title: "What is throttling?"
questionTitle: "What is throttling?"
description: "Learn What is throttling? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Throttling limits a function to at most one execution per interval. Use it for continuous events such as scrolling or pointer movement when periodic updates are useful but every event is unnecessary."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "What is throttling?"
prev:
  text: "What do `preventDefault` and `stopPropagation` do?"
  link: "/javascript-interview-questions/dom/dom-question-3"
next:
  text: "What is cross-site scripting (XSS)?"
  link: "/javascript-interview-questions/security/security-question-3"
---
# What is throttling?

## Answer

Throttling limits a function to at most one execution per interval. Use it for continuous events such as scrolling or pointer movement when periodic updates are useful but every event is unnecessary.

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
