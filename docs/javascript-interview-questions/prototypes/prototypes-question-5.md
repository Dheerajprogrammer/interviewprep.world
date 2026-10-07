---
layout: doc
question: true
title: "What is prototypal inheritance?"
questionTitle: "What is prototypal inheritance?"
description: "Learn What is prototypal inheritance? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Prototypal inheritance lets one object delegate missing property lookups to another object. It supports shared behavior without copying methods into every instance and can be created with constructors, classes, or `Object.create`."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "What is prototypal inheritance?"
prev:
  text: "What is the difference between `Promise.all` and `Promise.allSettled`?"
  link: "/javascript-interview-questions/async/async-question-5"
next:
  text: "What is the rest parameter?"
  link: "/javascript-interview-questions/es6/es6-question-5"
---
# What is prototypal inheritance?

## Answer

Prototypal inheritance lets one object delegate missing property lookups to another object. It supports shared behavior without copying methods into every instance and can be created with constructors, classes, or `Object.create`.

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
