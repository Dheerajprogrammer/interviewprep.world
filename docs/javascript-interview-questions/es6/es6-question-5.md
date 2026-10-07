---
layout: doc
question: true
title: "What is the rest parameter?"
questionTitle: "What is the rest parameter?"
description: "Learn What is the rest parameter? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A rest parameter gathers remaining function arguments into a real array, such as `function sum(...values)`. It must be the final parameter and replaces the older array-like `arguments` object for most uses."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What is the rest parameter?"
prev:
  text: "What is prototypal inheritance?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-5"
next:
  text: "When does `DOMContentLoaded` fire?"
  link: "/javascript-interview-questions/dom/dom-question-5"
---
# What is the rest parameter?

## Answer

A rest parameter gathers remaining function arguments into a real array, such as `function sum(...values)`. It must be the final parameter and replaces the older array-like `arguments` object for most uses.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
