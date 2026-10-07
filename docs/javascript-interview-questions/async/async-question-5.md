---
layout: doc
question: true
title: "What is the difference between `Promise.all` and `Promise.allSettled`?"
questionTitle: "What is the difference between `Promise.all` and `Promise.allSettled`?"
description: "Learn What is the difference between `Promise.all` and `Promise.allSettled`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`Promise.all` fulfills only when every input fulfills and rejects as soon as one rejects; `Promise.allSettled` waits for every input and reports each outcome. Use `all` when every result is required and `allSettled` for independent best-effort work."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "What is the difference between `Promise.all` and `Promise.allSettled`?"
prev:
  text: "What is currying?"
  link: "/javascript-interview-questions/functions/functions-question-5"
next:
  text: "What is prototypal inheritance?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-5"
---
# What is the difference between `Promise.all` and `Promise.allSettled`?

## Answer

`Promise.all` fulfills only when every input fulfills and rejects as soon as one rejects; `Promise.allSettled` waits for every input and reports each outcome. Use `all` when every result is required and `allSettled` for independent best-effort work.

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
