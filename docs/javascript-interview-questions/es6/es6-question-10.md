---
layout: doc
question: true
title: "What are optional chaining and nullish coalescing?"
questionTitle: "What are optional chaining and nullish coalescing?"
description: "Learn What are optional chaining and nullish coalescing? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Optional chaining (`?.`) stops property access or calls when the left side is nullish; nullish coalescing (`??`) provides a fallback only for `null` or `undefined`. They avoid verbose guards without treating valid falsy values such as `0` or empty string as missing."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What are optional chaining and nullish coalescing?"
prev:
  text: "When should you prefer composition over inheritance?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-10"
next:
  text: "What is a Web Worker?"
  link: "/javascript-interview-questions/dom/dom-question-10"
---
# What are optional chaining and nullish coalescing?

## Answer

Optional chaining (`?.`) stops property access or calls when the left side is nullish; nullish coalescing (`??`) provides a fallback only for `null` or `undefined`. They avoid verbose guards without treating valid falsy values such as `0` or empty string as missing.

## Example

```js
const user = { name: "Ada", settings: { theme: "dark" } }
const { name, settings: { theme } } = user
const label = `${name}: ${theme}`
```

Destructuring reads values without changing the original object.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
