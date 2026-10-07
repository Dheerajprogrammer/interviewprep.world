---
layout: doc
question: true
title: "What is a higher-order function?"
questionTitle: "What is a higher-order function?"
description: "Learn What is a higher-order function? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A higher-order function accepts a function, returns a function, or both. Array methods, middleware, and decorators use this pattern to separate reusable control flow from the behavior supplied by callers."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is a higher-order function?"
prev:
  text: "What is hoisting in JavaScript?"
  link: "/javascript-interview-questions/basics/basics-question-4"
next:
  text: "How does `async`/`await` work?"
  link: "/javascript-interview-questions/async/async-question-4"
---
# What is a higher-order function?

## Answer

A higher-order function accepts a function, returns a function, or both. Array methods, middleware, and decorators use this pattern to separate reusable control flow from the behavior supplied by callers.

## Example

```js
function makeCounter() {
  let count = 0
  return () => ++count
}
const next = makeCounter()
next() // 1
next() // 2
```

`next` retains access to `count`; that retained lexical environment is a closure.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
