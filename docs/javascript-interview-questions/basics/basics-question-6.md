---
layout: doc
question: true
title: "How do `var`, `let`, and `const` differ?"
questionTitle: "How do `var`, `let`, and `const` differ?"
description: "Learn How do `var`, `let`, and `const` differ? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`var` is function-scoped, can be redeclared, and is initialized to `undefined`; `let` and `const` are block-scoped and have a temporal dead zone. Use `const` by default, `let` when rebinding is required, and avoid `var` in new code."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "How do `var`, `let`, and `const` differ?"
prev:
  text: "How do you find duplicate values in an array?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-5"
next:
  text: "What is function composition?"
  link: "/javascript-interview-questions/functions/functions-question-6"
---
# How do `var`, `let`, and `const` differ?

## Answer

`var` is function-scoped, can be redeclared, and is initialized to `undefined`; `let` and `const` are block-scoped and have a temporal dead zone. Use `const` by default, `let` when rebinding is required, and avoid `var` in new code.

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
