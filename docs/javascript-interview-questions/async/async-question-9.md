---
layout: doc
question: true
title: "How do you cancel a fetch request?"
questionTitle: "How do you cancel a fetch request?"
description: "Learn How do you cancel a fetch request? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Create an `AbortController`, pass its signal to `fetch`, and call `abort()` when the request is no longer relevant, such as component cleanup or a replaced search query. Handle the resulting abort error separately from a real network failure."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "How do you cancel a fetch request?"
prev:
  text: "What is a pure function?"
  link: "/javascript-interview-questions/functions/functions-question-9"
next:
  text: "What are getters and setters?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-9"
---
# How do you cancel a fetch request?

## Answer

Create an `AbortController`, pass its signal to `fetch`, and call `abort()` when the request is no longer relevant, such as component cleanup or a replaced search query. Handle the resulting abort error separately from a real network failure.

## Example

```js
console.log("start")
Promise.resolve().then(() => console.log("microtask"))
setTimeout(() => console.log("task"), 0)
console.log("end")
// start, end, microtask, task
```

Promise handlers use the microtask queue, which runs before the next timer task.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
