---
layout: doc
question: true
title: "What is the difference between an attribute and a property?"
questionTitle: "What is the difference between an attribute and a property?"
description: "Learn What is the difference between an attribute and a property? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An HTML attribute is initial markup metadata; a DOM property is the live JavaScript state of an element. For example, an input’s `value` property changes as the user types while its `value` attribute may still hold the initial value."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "What is the difference between an attribute and a property?"
prev:
  text: "What are destructuring assignments?"
  link: "/javascript-interview-questions/es6/es6-question-4"
next:
  text: "What is memoization?"
  link: "/javascript-interview-questions/performance/performance-question-4"
---
# What is the difference between an attribute and a property?

## Answer

An HTML attribute is initial markup metadata; a DOM property is the live JavaScript state of an element. For example, an input’s `value` property changes as the user types while its `value` attribute may still hold the initial value.

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
