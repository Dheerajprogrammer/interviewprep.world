---
layout: doc
question: true
title: "What is a Web Worker?"
questionTitle: "What is a Web Worker?"
description: "Learn What is a Web Worker? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Web Worker runs JavaScript on a background thread and communicates by messages or transferable objects. It is useful for CPU-heavy work that would block the UI, but it cannot directly access the DOM."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "What is a Web Worker?"
prev:
  text: "What are optional chaining and nullish coalescing?"
  link: "/javascript-interview-questions/es6/es6-question-10"
next:
  text: "When should you use `requestAnimationFrame`?"
  link: "/javascript-interview-questions/performance/performance-question-10"
---
# What is a Web Worker?

## Answer

A Web Worker runs JavaScript on a background thread and communicates by messages or transferable objects. It is useful for CPU-heavy work that would block the UI, but it cannot directly access the DOM.

## Example

```js
document.querySelector("#list").addEventListener("click", event => {
  const button = event.target.closest("button[data-id]")
  if (button) removeItem(button.dataset.id)
})
```

One delegated listener can handle buttons added later because clicks bubble to the list.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
