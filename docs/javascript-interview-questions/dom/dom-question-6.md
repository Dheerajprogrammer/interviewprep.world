---
layout: doc
question: true
title: "How do you create and insert DOM elements safely?"
questionTitle: "How do you create and insert DOM elements safely?"
description: "Learn How do you create and insert DOM elements safely? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Create elements with DOM APIs, set text through `textContent`, set only trusted attributes, and append the node. Avoid assigning untrusted strings to `innerHTML`, because it can turn data into executable markup."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "How do you create and insert DOM elements safely?"
prev:
  text: "What is the spread operator?"
  link: "/javascript-interview-questions/es6/es6-question-6"
next:
  text: "How can you avoid unnecessary reflows and repaints?"
  link: "/javascript-interview-questions/performance/performance-question-6"
---
# How do you create and insert DOM elements safely?

## Answer

Create elements with DOM APIs, set text through `textContent`, set only trusted attributes, and append the node. Avoid assigning untrusted strings to `innerHTML`, because it can turn data into executable markup.

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
