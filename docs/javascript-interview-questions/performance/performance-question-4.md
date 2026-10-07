---
layout: doc
question: true
title: "What is memoization?"
questionTitle: "What is memoization?"
description: "Learn What is memoization? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Memoization caches a function result for a given input so repeated computations can be reused. It helps only when the calculation is expensive, inputs repeat, and cache size and invalidation are controlled."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "What is memoization?"
prev:
  text: "What is the difference between an attribute and a property?"
  link: "/javascript-interview-questions/dom/dom-question-4"
next:
  text: "How do you prevent XSS in a web application?"
  link: "/javascript-interview-questions/security/security-question-4"
---
# What is memoization?

## Answer

Memoization caches a function result for a given input so repeated computations can be reused. It helps only when the calculation is expensive, inputs repeat, and cache size and invalidation are controlled.

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
