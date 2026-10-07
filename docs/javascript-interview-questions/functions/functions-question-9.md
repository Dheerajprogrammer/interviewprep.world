---
layout: doc
question: true
title: "What is a pure function?"
questionTitle: "What is a pure function?"
description: "Learn What is a pure function? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A pure function returns the same result for the same inputs and has no observable side effects. Purity makes tests, memoization, and composition easier because the function does not depend on or mutate hidden state."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is a pure function?"
prev:
  text: "What makes a value truthy or falsy?"
  link: "/javascript-interview-questions/basics/basics-question-9"
next:
  text: "How do you cancel a fetch request?"
  link: "/javascript-interview-questions/async/async-question-9"
---
# What is a pure function?

## Answer

A pure function returns the same result for the same inputs and has no observable side effects. Purity makes tests, memoization, and composition easier because the function does not depend on or mutate hidden state.

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
