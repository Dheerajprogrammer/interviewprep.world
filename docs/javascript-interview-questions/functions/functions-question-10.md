---
layout: doc
question: true
title: "What is the difference between a callback and a promise?"
questionTitle: "What is the difference between a callback and a promise?"
description: "Learn What is the difference between a callback and a promise? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A callback is a function passed to be called later, while a Promise represents one eventual result or failure and can be chained with `then` or `await`. Promises make sequencing and error propagation more consistent, but do not represent multiple values over time."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is the difference between a callback and a promise?"
prev:
  text: "What is the difference between shallow and deep equality?"
  link: "/javascript-interview-questions/basics/basics-question-10"
next:
  text: "What is the difference between synchronous and asynchronous code?"
  link: "/javascript-interview-questions/async/async-question-10"
---
# What is the difference between a callback and a promise?

## Answer

A callback is a function passed to be called later, while a Promise represents one eventual result or failure and can be chained with `then` or `await`. Promises make sequencing and error propagation more consistent, but do not represent multiple values over time.

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
