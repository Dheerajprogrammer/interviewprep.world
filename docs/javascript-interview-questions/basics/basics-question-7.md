---
layout: doc
question: true
title: "What is strict mode?"
questionTitle: "What is strict mode?"
description: "Learn What is strict mode? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Strict mode enables safer JavaScript semantics, such as throwing on accidental globals and disallowing some legacy behavior. ES modules are strict automatically; in older scripts it can be enabled with `\"use strict\"`."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What is strict mode?"
prev:
  text: "How do you implement `Array.prototype.map`?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-6"
next:
  text: "How do arrow functions handle `this`?"
  link: "/javascript-interview-questions/functions/functions-question-7"
---
# What is strict mode?

## Answer

Strict mode enables safer JavaScript semantics, such as throwing on accidental globals and disallowing some legacy behavior. ES modules are strict automatically; in older scripts it can be enabled with `"use strict"`.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
