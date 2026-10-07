---
layout: doc
question: true
title: "How do you create an object without a prototype?"
questionTitle: "How do you create an object without a prototype?"
description: "Learn How do you create an object without a prototype? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `Object.create(null)` to create a dictionary-like object with no inherited properties. It avoids collisions with names such as `toString`, but also lacks methods from `Object.prototype`, so use `Object.hasOwn` for membership checks."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "How do you create an object without a prototype?"
prev:
  text: "When would you use `Promise.race` or `Promise.any`?"
  link: "/javascript-interview-questions/async/async-question-6"
next:
  text: "What is the spread operator?"
  link: "/javascript-interview-questions/es6/es6-question-6"
---
# How do you create an object without a prototype?

## Answer

Use `Object.create(null)` to create a dictionary-like object with no inherited properties. It avoids collisions with names such as `toString`, but also lacks methods from `Object.prototype`, so use `Object.hasOwn` for membership checks.

## Example

```js
function User(name) { this.name = name }
User.prototype.greet = function () { return `Hi, ${this.name}` }
const ada = new User("Ada")
ada.greet() // "Hi, Ada"
```

The method is shared through `User.prototype`, not copied into every instance.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
