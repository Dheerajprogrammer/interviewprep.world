---
layout: doc
question: true
title: "What are `Map` and `Set` useful for?"
questionTitle: "What are `Map` and `Set` useful for?"
description: "Learn What are `Map` and `Set` useful for? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`Map` stores key-value pairs with keys of any type and preserves insertion order; `Set` stores unique values. Use them when their operations and semantics fit better than object-property dictionaries or arrays."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What are `Map` and `Set` useful for?"
prev:
  text: "What is the difference between own and inherited properties?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-7"
next:
  text: "What is the difference between `innerHTML`, `textContent`, and `innerText`?"
  link: "/javascript-interview-questions/dom/dom-question-7"
---
# What are `Map` and `Set` useful for?

## Answer

`Map` stores key-value pairs with keys of any type and preserves insertion order; `Set` stores unique values. Use them when their operations and semantics fit better than object-property dictionaries or arrays.

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
