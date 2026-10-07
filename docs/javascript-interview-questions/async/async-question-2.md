---
layout: doc
question: true
title: "What is the difference between the microtask and macrotask queues?"
questionTitle: "What is the difference between the microtask and macrotask queues?"
description: "Learn What is the difference between the microtask and macrotask queues? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Promise reactions and `queueMicrotask` use the microtask queue, which drains after current synchronous work and before the next task. Timers, events, and many I/O callbacks are tasks; an unbounded microtask chain can delay rendering and timers."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "What is the difference between the microtask and macrotask queues?"
prev:
  text: "What is lexical scope?"
  link: "/javascript-interview-questions/functions/functions-question-2"
next:
  text: "What is the difference between `__proto__` and `prototype`?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-2"
---
# What is the difference between the microtask and macrotask queues?

## Answer

Promise reactions and `queueMicrotask` use the microtask queue, which drains after current synchronous work and before the next task. Timers, events, and many I/O callbacks are tasks; an unbounded microtask chain can delay rendering and timers.

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
