---
layout: doc
question: true
title: "What are ES modules?"
questionTitle: "What are ES modules?"
description: "Learn What are ES modules? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "ES modules are JavaScript files that explicitly export values and import dependencies with static syntax. They have their own scope, run in strict mode, support tooling such as tree shaking, and are the standard module system for modern browsers and Node."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What are ES modules?"
prev:
  text: "What is the prototype chain?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-1"
next:
  text: "What is event delegation?"
  link: "/javascript-interview-questions/dom/dom-question-1"
---
# What are ES modules?

## Answer

ES modules are JavaScript files that explicitly export values and import dependencies with static syntax. They have their own scope, run in strict mode, support tooling such as tree shaking, and are the standard module system for modern browsers and Node.

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
