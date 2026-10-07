---
layout: doc
question: true
title: "What is the difference between `==` and `===`?"
questionTitle: "What is the difference between `==` and `===`?"
description: "Learn What is the difference between `==` and `===`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`===` compares values without converting their types, while `==` first applies coercion rules that can produce surprising matches. Use strict equality by default and use loose equality only when you explicitly want its narrow behavior, such as checking for `null` or `undefined` together."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What is the difference between `==` and `===`?"
prev:
  text: "How do you flatten a nested array?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-1"
next:
  text: "What is lexical scope?"
  link: "/javascript-interview-questions/functions/functions-question-2"
---
# What is the difference between `==` and `===`?

## Answer

`===` compares values without converting their types, while `==` first applies coercion rules that can produce surprising matches. Use strict equality by default and use loose equality only when you explicitly want its narrow behavior, such as checking for `null` or `undefined` together.

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
