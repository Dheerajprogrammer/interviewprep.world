---
layout: doc
question: true
title: "What is the temporal dead zone?"
questionTitle: "What is the temporal dead zone?"
description: "Learn What is the temporal dead zone? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The temporal dead zone is the period from entering a scope until a `let` or `const` binding is initialized. Accessing the binding then throws a ReferenceError, preventing accidental use of an uninitialized value."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What is the temporal dead zone?"
prev:
  text: "How do you group an array of objects by a key?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-4"
next:
  text: "What is currying?"
  link: "/javascript-interview-questions/functions/functions-question-5"
---
# What is the temporal dead zone?

## Answer

The temporal dead zone is the period from entering a scope until a `let` or `const` binding is initialized. Accessing the binding then throws a ReferenceError, preventing accidental use of an uninitialized value.

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
