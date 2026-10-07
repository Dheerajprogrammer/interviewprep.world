---
layout: doc
question: true
title: "What makes a value truthy or falsy?"
questionTitle: "What makes a value truthy or falsy?"
description: "Learn What makes a value truthy or falsy? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Falsy values are `false`, `0`, `-0`, `0n`, empty string, `null`, `undefined`, and `NaN`; every other value, including empty arrays and objects, is truthy. Do not use truthiness when you specifically need to distinguish empty from missing."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What makes a value truthy or falsy?"
prev:
  text: "How do you write a memoize function?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-8"
next:
  text: "What is a pure function?"
  link: "/javascript-interview-questions/functions/functions-question-9"
---
# What makes a value truthy or falsy?

## Answer

Falsy values are `false`, `0`, `-0`, `0n`, empty string, `null`, `undefined`, and `NaN`; every other value, including empty arrays and objects, is truthy. Do not use truthiness when you specifically need to distinguish empty from missing.

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
