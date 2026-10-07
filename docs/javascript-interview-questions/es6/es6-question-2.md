---
layout: doc
question: true
title: "What is the difference between default and named exports?"
questionTitle: "What is the difference between default and named exports?"
description: "Learn What is the difference between default and named exports? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A module has at most one default export, which importers may name freely, while named exports are imported by their declared names and a module can have many. Named exports make public APIs and refactoring more explicit."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What is the difference between default and named exports?"
prev:
  text: "What is the difference between `__proto__` and `prototype`?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-2"
next:
  text: "What is the difference between event bubbling and capturing?"
  link: "/javascript-interview-questions/dom/dom-question-2"
---
# What is the difference between default and named exports?

## Answer

A module has at most one default export, which importers may name freely, while named exports are imported by their declared names and a module can have many. Named exports make public APIs and refactoring more explicit.

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
