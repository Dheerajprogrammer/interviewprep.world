---
layout: doc
question: true
title: "How does `async`/`await` work?"
questionTitle: "How does `async`/`await` work?"
description: "Learn How does `async`/`await` work? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An `async` function always returns a Promise; `await` pauses that function until a Promise settles and resumes its continuation as a microtask. Use `try`/`catch` around awaited work when the failure belongs to that operation."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "How does `async`/`await` work?"
prev:
  text: "What is a higher-order function?"
  link: "/javascript-interview-questions/functions/functions-question-4"
next:
  text: "What are JavaScript classes syntactic sugar for?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-4"
---
# How does `async`/`await` work?

## Answer

An `async` function always returns a Promise; `await` pauses that function until a Promise settles and resumes its continuation as a microtask. Use `try`/`catch` around awaited work when the failure belongs to that operation.

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
