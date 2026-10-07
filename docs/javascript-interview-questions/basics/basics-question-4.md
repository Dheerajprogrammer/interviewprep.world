---
layout: doc
question: true
title: "What is hoisting in JavaScript?"
questionTitle: "What is hoisting in JavaScript?"
description: "Learn What is hoisting in JavaScript? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Before execution, JavaScript creates bindings for declarations in a scope. Function declarations are initialized with their function value, `var` is initialized to `undefined`, and `let` or `const` exist but cannot be read before initialization."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What is hoisting in JavaScript?"
prev:
  text: "How do you implement deep clone?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-3"
next:
  text: "What is a higher-order function?"
  link: "/javascript-interview-questions/functions/functions-question-4"
---
# What is hoisting in JavaScript?

## Answer

Before execution, JavaScript creates bindings for declarations in a scope. Function declarations are initialized with their function value, `var` is initialized to `undefined`, and `let` or `const` exist but cannot be read before initialization.

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
