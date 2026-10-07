---
layout: doc
question: true
title: "What is type coercion?"
questionTitle: "What is type coercion?"
description: "Learn What is type coercion? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Type coercion is JavaScript converting a value to another type for an operation, such as turning a number into a string during concatenation. Prefer explicit conversion with `Number`, `String`, or Boolean checks when the conversion matters to correctness."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What is type coercion?"
prev:
  text: "How do you implement a Promise pool with concurrency limits?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-7"
next:
  text: "What is an IIFE?"
  link: "/javascript-interview-questions/functions/functions-question-8"
---
# What is type coercion?

## Answer

Type coercion is JavaScript converting a value to another type for an operation, such as turning a number into a string during concatenation. Prefer explicit conversion with `Number`, `String`, or Boolean checks when the conversion matters to correctness.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
