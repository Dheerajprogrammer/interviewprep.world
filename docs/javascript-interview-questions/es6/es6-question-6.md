---
layout: doc
question: true
title: "What is the spread operator?"
questionTitle: "What is the spread operator?"
description: "Learn What is the spread operator? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Spread expands iterable values into arguments or array elements and expands object properties into a new object. It makes shallow copies only, so nested objects remain shared unless they are copied separately."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What is the spread operator?"
prev:
  text: "How do you create an object without a prototype?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-6"
next:
  text: "How do you create and insert DOM elements safely?"
  link: "/javascript-interview-questions/dom/dom-question-6"
---
# What is the spread operator?

## Answer

Spread expands iterable values into arguments or array elements and expands object properties into a new object. It makes shallow copies only, so nested objects remain shared unless they are copied separately.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
