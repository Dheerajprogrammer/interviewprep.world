---
layout: doc
question: true
title: "What is the difference between `call`, `apply`, and `bind`?"
questionTitle: "What is the difference between `call`, `apply`, and `bind`?"
description: "Learn What is the difference between `call`, `apply`, and `bind`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`call` invokes a function immediately with a chosen `this` and separate arguments; `apply` does the same with an argument array; `bind` returns a new function with `this` and optional leading arguments fixed."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is the difference between `call`, `apply`, and `bind`?"
prev:
  text: "What is the difference between `null` and `undefined`?"
  link: "/javascript-interview-questions/basics/basics-question-3"
next:
  text: "What are the states of a Promise?"
  link: "/javascript-interview-questions/async/async-question-3"
---
# What is the difference between `call`, `apply`, and `bind`?

## Answer

`call` invokes a function immediately with a chosen `this` and separate arguments; `apply` does the same with an argument array; `bind` returns a new function with `this` and optional leading arguments fixed.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
