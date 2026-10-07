---
layout: doc
question: true
title: "What do `preventDefault` and `stopPropagation` do?"
questionTitle: "What do `preventDefault` and `stopPropagation` do?"
description: "Learn What do `preventDefault` and `stopPropagation` do? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`preventDefault` cancels the browser’s default action when the event is cancelable; `stopPropagation` prevents the event from continuing to ancestor listeners. Use each narrowly because stopping propagation can break unrelated component behavior."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "What do `preventDefault` and `stopPropagation` do?"
prev:
  text: "What are template literals?"
  link: "/javascript-interview-questions/es6/es6-question-3"
next:
  text: "What is throttling?"
  link: "/javascript-interview-questions/performance/performance-question-3"
---
# What do `preventDefault` and `stopPropagation` do?

## Answer

`preventDefault` cancels the browser’s default action when the event is cancelable; `stopPropagation` prevents the event from continuing to ancestor listeners. Use each narrowly because stopping propagation can break unrelated component behavior.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
