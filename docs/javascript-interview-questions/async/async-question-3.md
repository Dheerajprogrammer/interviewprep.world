---
layout: doc
question: true
title: "What are the states of a Promise?"
questionTitle: "What are the states of a Promise?"
description: "Learn What are the states of a Promise? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "What are the states of a Promise?"
prev:
  text: "What is the difference between `call`, `apply`, and `bind`?"
  link: "/javascript-interview-questions/functions/functions-question-3"
next:
  text: "How does `new` work?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-3"
---
# What are the states of a Promise?

## Answer

A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously.

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
