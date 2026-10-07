---
layout: doc
question: true
title: "What is the difference between own and inherited properties?"
questionTitle: "What is the difference between own and inherited properties?"
description: "Learn What is the difference between own and inherited properties? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Own properties are stored directly on an object; inherited properties are found through its prototype chain. Use `Object.hasOwn(object, key)` when logic must distinguish data owned by the object from delegated behavior."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "What is the difference between own and inherited properties?"
prev:
  text: "How do you handle errors with async/await?"
  link: "/javascript-interview-questions/async/async-question-7"
next:
  text: "What are `Map` and `Set` useful for?"
  link: "/javascript-interview-questions/es6/es6-question-7"
---
# What is the difference between own and inherited properties?

## Answer

Own properties are stored directly on an object; inherited properties are found through its prototype chain. Use `Object.hasOwn(object, key)` when logic must distinguish data owned by the object from delegated behavior.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
