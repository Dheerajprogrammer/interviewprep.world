---
layout: doc
question: true
title: "What is the difference between `__proto__` and `prototype`?"
questionTitle: "What is the difference between `__proto__` and `prototype`?"
description: "Learn What is the difference between `__proto__` and `prototype`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`prototype` is a property on constructor functions used as the prototype for objects created with `new`; `__proto__` is a legacy accessor to an individual object’s actual prototype. Prefer `Object.getPrototypeOf` and `Object.setPrototypeOf` when inspection is necessary."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "What is the difference between `__proto__` and `prototype`?"
prev:
  text: "What is the difference between the microtask and macrotask queues?"
  link: "/javascript-interview-questions/async/async-question-2"
next:
  text: "What is the difference between default and named exports?"
  link: "/javascript-interview-questions/es6/es6-question-2"
---
# What is the difference between `__proto__` and `prototype`?

## Answer

`prototype` is a property on constructor functions used as the prototype for objects created with `new`; `__proto__` is a legacy accessor to an individual object’s actual prototype. Prefer `Object.getPrototypeOf` and `Object.setPrototypeOf` when inspection is necessary.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
