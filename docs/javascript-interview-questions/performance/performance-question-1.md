---
layout: doc
question: true
title: "What causes a memory leak in JavaScript?"
questionTitle: "What causes a memory leak in JavaScript?"
description: "Learn What causes a memory leak in JavaScript? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A memory leak occurs when code unintentionally retains references to objects that are no longer useful, such as detached DOM nodes, uncleared timers, global caches, or listeners. Find it by comparing heap snapshots and remove the retaining reference."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "What causes a memory leak in JavaScript?"
prev:
  text: "What is event delegation?"
  link: "/javascript-interview-questions/dom/dom-question-1"
next:
  text: "What is the same-origin policy?"
  link: "/javascript-interview-questions/security/security-question-1"
---
# What causes a memory leak in JavaScript?

## Answer

A memory leak occurs when code unintentionally retains references to objects that are no longer useful, such as detached DOM nodes, uncleared timers, global caches, or listeners. Find it by comparing heap snapshots and remove the retaining reference.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
