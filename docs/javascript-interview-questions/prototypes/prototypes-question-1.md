---
layout: doc
question: true
title: "What is the prototype chain?"
questionTitle: "What is the prototype chain?"
description: "Learn What is the prototype chain? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "When a property is not found on an object, JavaScript looks on that object’s prototype, then continues through prototypes until `null`. This delegation chain is the mechanism behind inherited methods and properties."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "What is the prototype chain?"
prev:
  text: "What is the JavaScript event loop?"
  link: "/javascript-interview-questions/async/async-question-1"
next:
  text: "What are ES modules?"
  link: "/javascript-interview-questions/es6/es6-question-1"
---
# What is the prototype chain?

## Answer

When a property is not found on an object, JavaScript looks on that object’s prototype, then continues through prototypes until `null`. This delegation chain is the mechanism behind inherited methods and properties.

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
