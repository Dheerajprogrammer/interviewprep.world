---
layout: doc
question: true
title: "What are the JavaScript primitive types?"
questionTitle: "What are the JavaScript primitive types?"
description: "Learn What are the JavaScript primitive types? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "JavaScript primitives are `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`. Primitives are immutable values; objects and functions are reference values that can hold mutable properties."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What are the JavaScript primitive types?"
next:
  text: "What is a closure?"
  link: "/javascript-interview-questions/functions/functions-question-1"
---
# What are the JavaScript primitive types?

## Answer

JavaScript primitives are `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, and `null`. Primitives are immutable values; objects and functions are reference values that can hold mutable properties.

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
