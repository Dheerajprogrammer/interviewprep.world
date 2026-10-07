---
layout: doc
question: true
title: "What is a closure?"
questionTitle: "What is a closure?"
description: "Learn What is a closure? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A closure is a function together with access to the lexical variables from the scope where it was created. It enables private state and callbacks, but can retain memory longer than intended if it captures large objects."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is a closure?"
prev:
  text: "What are the JavaScript primitive types?"
  link: "/javascript-interview-questions/basics/basics-question-1"
next:
  text: "What is the JavaScript event loop?"
  link: "/javascript-interview-questions/async/async-question-1"
---
# What is a closure?

## Answer

A closure is a function together with access to the lexical variables from the scope where it was created. It enables private state and callbacks, but can retain memory longer than intended if it captures large objects.

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
