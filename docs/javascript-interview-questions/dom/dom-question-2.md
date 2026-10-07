---
layout: doc
question: true
title: "What is the difference between event bubbling and capturing?"
questionTitle: "What is the difference between event bubbling and capturing?"
description: "Learn What is the difference between event bubbling and capturing? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Capturing travels from the document down to the target; bubbling travels from the target back up through ancestors. Most handlers use bubbling by default, while capture is useful when an ancestor must observe an event before descendants handle it."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "What is the difference between event bubbling and capturing?"
prev:
  text: "What is the difference between default and named exports?"
  link: "/javascript-interview-questions/es6/es6-question-2"
next:
  text: "What is debouncing?"
  link: "/javascript-interview-questions/performance/performance-question-2"
---
# What is the difference between event bubbling and capturing?

## Answer

Capturing travels from the document down to the target; bubbling travels from the target back up through ancestors. Most handlers use bubbling by default, while capture is useful when an ancestor must observe an event before descendants handle it.

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
