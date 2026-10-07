---
layout: doc
question: true
title: "When does `DOMContentLoaded` fire?"
questionTitle: "When does `DOMContentLoaded` fire?"
description: "Learn When does `DOMContentLoaded` fire? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`DOMContentLoaded` fires when the initial HTML has been parsed and deferred scripts have executed; it does not wait for images, stylesheets, or subframes. Use `load` only when the full page resource set is required."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "When does `DOMContentLoaded` fire?"
prev:
  text: "What is the rest parameter?"
  link: "/javascript-interview-questions/es6/es6-question-5"
next:
  text: "What is a layout thrash?"
  link: "/javascript-interview-questions/performance/performance-question-5"
---
# When does `DOMContentLoaded` fire?

## Answer

`DOMContentLoaded` fires when the initial HTML has been parsed and deferred scripts have executed; it does not wait for images, stylesheets, or subframes. Use `load` only when the full page resource set is required.

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
