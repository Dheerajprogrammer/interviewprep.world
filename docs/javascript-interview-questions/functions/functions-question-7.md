---
layout: doc
question: true
title: "How do arrow functions handle `this`?"
questionTitle: "How do arrow functions handle `this`?"
description: "Learn How do arrow functions handle `this`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Arrow functions do not create their own `this`; they capture it from the surrounding lexical scope. Use them for callbacks that should keep the outer receiver, but not for object methods that need dynamic method-call `this`."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "How do arrow functions handle `this`?"
prev:
  text: "What is strict mode?"
  link: "/javascript-interview-questions/basics/basics-question-7"
next:
  text: "How do you handle errors with async/await?"
  link: "/javascript-interview-questions/async/async-question-7"
---
# How do arrow functions handle `this`?

## Answer

Arrow functions do not create their own `this`; they capture it from the surrounding lexical scope. Use them for callbacks that should keep the outer receiver, but not for object methods that need dynamic method-call `this`.

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
