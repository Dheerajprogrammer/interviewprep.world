---
layout: doc
question: true
title: "What is the difference between `innerHTML`, `textContent`, and `innerText`?"
questionTitle: "What is the difference between `innerHTML`, `textContent`, and `innerText`?"
description: "Learn What is the difference between `innerHTML`, `textContent`, and `innerText`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`innerHTML` reads or parses markup and is unsafe for untrusted input; `textContent` reads or writes raw text without layout awareness; `innerText` reflects rendered text and can trigger style or layout work. Prefer `textContent` for plain data."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "What is the difference between `innerHTML`, `textContent`, and `innerText`?"
prev:
  text: "What are `Map` and `Set` useful for?"
  link: "/javascript-interview-questions/es6/es6-question-7"
next:
  text: "What is code splitting?"
  link: "/javascript-interview-questions/performance/performance-question-7"
---
# What is the difference between `innerHTML`, `textContent`, and `innerText`?

## Answer

`innerHTML` reads or parses markup and is unsafe for untrusted input; `textContent` reads or writes raw text without layout awareness; `innerText` reflects rendered text and can trigger style or layout work. Prefer `textContent` for plain data.

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
