---
layout: doc
question: true
title: "How do you use `data-*` attributes?"
questionTitle: "How do you use `data-*` attributes?"
description: "Learn How do you use `data-*` attributes? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `data-*` attributes for small element-associated metadata, accessed through `element.dataset`. They are useful for event delegation and hooks, but application state should live in JavaScript data structures rather than serialized into arbitrary DOM attributes."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "How do you use `data-*` attributes?"
prev:
  text: "What are `WeakMap` and `WeakSet`?"
  link: "/javascript-interview-questions/es6/es6-question-8"
next:
  text: "What is tree shaking?"
  link: "/javascript-interview-questions/performance/performance-question-8"
---
# How do you use `data-*` attributes?

## Answer

Use `data-*` attributes for small element-associated metadata, accessed through `element.dataset`. They are useful for event delegation and hooks, but application state should live in JavaScript data structures rather than serialized into arbitrary DOM attributes.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
