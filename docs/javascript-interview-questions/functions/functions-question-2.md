---
layout: doc
question: true
title: "What is lexical scope?"
questionTitle: "What is lexical scope?"
description: "Learn What is lexical scope? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Lexical scope means variable lookup is determined by where code is written, not where a function is called. A nested function can access bindings from its enclosing scopes, and an inner binding shadows an outer one with the same name."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is lexical scope?"
prev:
  text: "What is the difference between `==` and `===`?"
  link: "/javascript-interview-questions/basics/basics-question-2"
next:
  text: "What is the difference between the microtask and macrotask queues?"
  link: "/javascript-interview-questions/async/async-question-2"
---
# What is lexical scope?

## Answer

Lexical scope means variable lookup is determined by where code is written, not where a function is called. A nested function can access bindings from its enclosing scopes, and an inner binding shadows an outer one with the same name.

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
