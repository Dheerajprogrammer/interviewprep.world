---
layout: doc
question: true
title: "When should you use `requestAnimationFrame`?"
questionTitle: "When should you use `requestAnimationFrame`?"
description: "Learn When should you use `requestAnimationFrame`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `requestAnimationFrame` for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "When should you use `requestAnimationFrame`?"
prev:
  text: "What is a Web Worker?"
  link: "/javascript-interview-questions/dom/dom-question-10"
next:
  text: "How do you validate and sanitize user input?"
  link: "/javascript-interview-questions/security/security-question-10"
---
# When should you use `requestAnimationFrame`?

## Answer

Use `requestAnimationFrame` for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering.

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
