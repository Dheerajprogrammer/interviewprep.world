---
layout: doc
question: true
title: "How does `instanceof` work?"
questionTitle: "How does `instanceof` work?"
description: "Learn How does `instanceof` work? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`instanceof` checks whether a constructor’s `prototype` appears in an object’s prototype chain. It can be unreliable across separate JavaScript realms and can be customized with `Symbol.hasInstance`, so use structural checks when the actual capability matters."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "How does `instanceof` work?"
prev:
  text: "What is callback hell and how do you avoid it?"
  link: "/javascript-interview-questions/async/async-question-8"
next:
  text: "What are `WeakMap` and `WeakSet`?"
  link: "/javascript-interview-questions/es6/es6-question-8"
---
# How does `instanceof` work?

## Answer

`instanceof` checks whether a constructor’s `prototype` appears in an object’s prototype chain. It can be unreliable across separate JavaScript realms and can be customized with `Symbol.hasInstance`, so use structural checks when the actual capability matters.

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
