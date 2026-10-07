---
layout: doc
question: true
title: "What is event delegation?"
questionTitle: "What is event delegation?"
description: "Learn What is event delegation? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Event delegation attaches one listener to a stable ancestor and handles events from matching descendants as they bubble. It reduces listeners and works for elements added later, but the handler must verify the actual target with `closest` or similar logic."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "What is event delegation?"
prev:
  text: "What are ES modules?"
  link: "/javascript-interview-questions/es6/es6-question-1"
next:
  text: "What causes a memory leak in JavaScript?"
  link: "/javascript-interview-questions/performance/performance-question-1"
---
# What is event delegation?

## Answer

Event delegation attaches one listener to a stable ancestor and handles events from matching descendants as they bubble. It reduces listeners and works for elements added later, but the handler must verify the actual target with `closest` or similar logic.

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
