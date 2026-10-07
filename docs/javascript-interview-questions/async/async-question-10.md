---
layout: doc
question: true
title: "What is the difference between synchronous and asynchronous code?"
questionTitle: "What is the difference between synchronous and asynchronous code?"
description: "Learn What is the difference between synchronous and asynchronous code? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Synchronous code completes before the next statement runs; asynchronous code schedules work that completes later and reports its result through a callback, Promise, or event. Async code improves responsiveness for waiting, not for CPU-bound computation on the same thread."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "What is the difference between synchronous and asynchronous code?"
prev:
  text: "What is the difference between a callback and a promise?"
  link: "/javascript-interview-questions/functions/functions-question-10"
next:
  text: "When should you prefer composition over inheritance?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-10"
---
# What is the difference between synchronous and asynchronous code?

## Answer

Synchronous code completes before the next statement runs; asynchronous code schedules work that completes later and reports its result through a callback, Promise, or event. Async code improves responsiveness for waiting, not for CPU-bound computation on the same thread.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
