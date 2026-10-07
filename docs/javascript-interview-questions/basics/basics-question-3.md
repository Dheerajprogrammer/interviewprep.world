---
layout: doc
question: true
title: "What is the difference between `null` and `undefined`?"
questionTitle: "What is the difference between `null` and `undefined`?"
description: "Learn What is the difference between `null` and `undefined`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`undefined` usually means a value was not provided or a property does not exist; `null` is an explicit empty value chosen by the program. Both are falsy, but they communicate different intent and should not be conflated in an API contract."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What is the difference between `null` and `undefined`?"
prev:
  text: "How do you implement debounce?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-2"
next:
  text: "What is the difference between `call`, `apply`, and `bind`?"
  link: "/javascript-interview-questions/functions/functions-question-3"
---
# What is the difference between `null` and `undefined`?

## Answer

`undefined` usually means a value was not provided or a property does not exist; `null` is an explicit empty value chosen by the program. Both are falsy, but they communicate different intent and should not be conflated in an API contract.

## Example

```js
const input = 0
console.log(Boolean(input)) // false
console.log(input === false) // false: no coercion
```

Use strict equality when you do not explicitly want coercion.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
