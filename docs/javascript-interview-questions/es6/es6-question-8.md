---
layout: doc
question: true
title: "What are `WeakMap` and `WeakSet`?"
questionTitle: "What are `WeakMap` and `WeakSet`?"
description: "Learn What are `WeakMap` and `WeakSet`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "WeakMap and WeakSet hold object keys or values weakly, allowing garbage collection when no other reference remains. They are useful for metadata or private associations but are not iterable and cannot be inspected like normal collections."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What are `WeakMap` and `WeakSet`?"
prev:
  text: "How does `instanceof` work?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-8"
next:
  text: "How do you use `data-*` attributes?"
  link: "/javascript-interview-questions/dom/dom-question-8"
---
# What are `WeakMap` and `WeakSet`?

## Answer

WeakMap and WeakSet hold object keys or values weakly, allowing garbage collection when no other reference remains. They are useful for metadata or private associations but are not iterable and cannot be inspected like normal collections.

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
