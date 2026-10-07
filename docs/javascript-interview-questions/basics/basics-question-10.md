---
layout: doc
question: true
title: "What is the difference between shallow and deep equality?"
questionTitle: "What is the difference between shallow and deep equality?"
description: "Learn What is the difference between shallow and deep equality? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Shallow equality compares top-level values or references, while deep equality recursively compares nested structure. JavaScript object equality is reference equality, so two separately created but identical objects are not `===`."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What is the difference between shallow and deep equality?"
prev:
  text: "How do you compare two objects deeply?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-9"
next:
  text: "What is the difference between a callback and a promise?"
  link: "/javascript-interview-questions/functions/functions-question-10"
---
# What is the difference between shallow and deep equality?

## Answer

Shallow equality compares top-level values or references, while deep equality recursively compares nested structure. JavaScript object equality is reference equality, so two separately created but identical objects are not `===`.

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
