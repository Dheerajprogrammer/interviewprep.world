---
layout: doc
question: true
title: "What is code splitting?"
questionTitle: "What is code splitting?"
description: "Learn What is code splitting? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Code splitting divides JavaScript into independently loaded chunks so an initial route does not download every feature. Split at route or interaction boundaries, and avoid fragmenting critical code into too many network requests."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "What is code splitting?"
prev:
  text: "What is the difference between `innerHTML`, `textContent`, and `innerText`?"
  link: "/javascript-interview-questions/dom/dom-question-7"
next:
  text: "How should sensitive data be stored in the browser?"
  link: "/javascript-interview-questions/security/security-question-7"
---
# What is code splitting?

## Answer

Code splitting divides JavaScript into independently loaded chunks so an initial route does not download every feature. Split at route or interaction boundaries, and avoid fragmenting critical code into too many network requests.

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
