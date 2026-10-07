---
layout: doc
question: true
title: "What is the JavaScript event loop?"
questionTitle: "What is the JavaScript event loop?"
description: "Learn What is the JavaScript event loop? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The event loop lets JavaScript coordinate asynchronous work while running synchronous code on one call stack. Once the stack is empty, it processes queued microtasks before taking the next task such as a timer or I/O callback."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "What is the JavaScript event loop?"
prev:
  text: "What is a closure?"
  link: "/javascript-interview-questions/functions/functions-question-1"
next:
  text: "What is the prototype chain?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-1"
---
# What is the JavaScript event loop?

## Answer

The event loop lets JavaScript coordinate asynchronous work while running synchronous code on one call stack. Once the stack is empty, it processes queued microtasks before taking the next task such as a timer or I/O callback.

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
