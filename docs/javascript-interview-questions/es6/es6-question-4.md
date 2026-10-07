---
layout: doc
question: true
title: "What are destructuring assignments?"
questionTitle: "What are destructuring assignments?"
description: "Learn What are destructuring assignments? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Destructuring extracts values from arrays or properties from objects into bindings, optionally with aliases and defaults. It improves clarity when used locally but can obscure data shape when patterns become deeply nested."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What are destructuring assignments?"
prev:
  text: "What are JavaScript classes syntactic sugar for?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-4"
next:
  text: "What is the difference between an attribute and a property?"
  link: "/javascript-interview-questions/dom/dom-question-4"
---
# What are destructuring assignments?

## Answer

Destructuring extracts values from arrays or properties from objects into bindings, optionally with aliases and defaults. It improves clarity when used locally but can obscure data shape when patterns become deeply nested.

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
