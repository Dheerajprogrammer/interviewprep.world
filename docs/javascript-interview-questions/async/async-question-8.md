---
layout: doc
question: true
title: "What is callback hell and how do you avoid it?"
questionTitle: "What is callback hell and how do you avoid it?"
description: "Learn What is callback hell and how do you avoid it? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Callback hell is deeply nested asynchronous control flow that obscures sequencing and makes errors hard to propagate. Flatten work with Promises and `async`/`await`, extract named operations, and model parallel work explicitly."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "What is callback hell and how do you avoid it?"
prev:
  text: "What is an IIFE?"
  link: "/javascript-interview-questions/functions/functions-question-8"
next:
  text: "How does `instanceof` work?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-8"
---
# What is callback hell and how do you avoid it?

## Answer

Callback hell is deeply nested asynchronous control flow that obscures sequencing and makes errors hard to propagate. Flatten work with Promises and `async`/`await`, extract named operations, and model parallel work explicitly.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
