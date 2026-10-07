---
layout: doc
question: true
title: "What is currying?"
questionTitle: "What is currying?"
description: "Learn What is currying? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Currying transforms a function that takes multiple arguments into nested functions that each take one argument. It can make configuration reusable, but do not use it when ordinary parameters are clearer at the call site."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is currying?"
prev:
  text: "What is the temporal dead zone?"
  link: "/javascript-interview-questions/basics/basics-question-5"
next:
  text: "What is the difference between `Promise.all` and `Promise.allSettled`?"
  link: "/javascript-interview-questions/async/async-question-5"
---
# What is currying?

## Answer

Currying transforms a function that takes multiple arguments into nested functions that each take one argument. It can make configuration reusable, but do not use it when ordinary parameters are clearer at the call site.

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
