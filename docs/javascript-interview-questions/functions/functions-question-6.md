---
layout: doc
question: true
title: "What is function composition?"
questionTitle: "What is function composition?"
description: "Learn What is function composition? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Function composition combines small functions so the output of one becomes the input of the next. It works best when functions are pure, have compatible contracts, and each represents one understandable transformation."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is function composition?"
prev:
  text: "How do `var`, `let`, and `const` differ?"
  link: "/javascript-interview-questions/basics/basics-question-6"
next:
  text: "When would you use `Promise.race` or `Promise.any`?"
  link: "/javascript-interview-questions/async/async-question-6"
---
# What is function composition?

## Answer

Function composition combines small functions so the output of one becomes the input of the next. It works best when functions are pure, have compatible contracts, and each represents one understandable transformation.

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
