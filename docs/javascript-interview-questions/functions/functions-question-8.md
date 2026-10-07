---
layout: doc
question: true
title: "What is an IIFE?"
questionTitle: "What is an IIFE?"
description: "Learn What is an IIFE? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An immediately invoked function expression is a function expression called as soon as it is created. It was commonly used to create private scope before modules and block-scoped declarations; modern code usually prefers modules."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is an IIFE?"
prev:
  text: "What is type coercion?"
  link: "/javascript-interview-questions/basics/basics-question-8"
next:
  text: "What is callback hell and how do you avoid it?"
  link: "/javascript-interview-questions/async/async-question-8"
---
# What is an IIFE?

## Answer

An immediately invoked function expression is a function expression called as soon as it is created. It was commonly used to create private scope before modules and block-scoped declarations; modern code usually prefers modules.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
