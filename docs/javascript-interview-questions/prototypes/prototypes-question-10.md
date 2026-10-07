---
layout: doc
question: true
title: "When should you prefer composition over inheritance?"
questionTitle: "When should you prefer composition over inheritance?"
description: "Learn When should you prefer composition over inheritance? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Prefer composition when behavior can be assembled from independent capabilities or when inheritance would create a fragile hierarchy. Inheritance is appropriate only for a stable “is-a” relationship with shared invariants and substitutable subclasses."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "When should you prefer composition over inheritance?"
prev:
  text: "What is the difference between synchronous and asynchronous code?"
  link: "/javascript-interview-questions/async/async-question-10"
next:
  text: "What are optional chaining and nullish coalescing?"
  link: "/javascript-interview-questions/es6/es6-question-10"
---
# When should you prefer composition over inheritance?

## Answer

Prefer composition when behavior can be assembled from independent capabilities or when inheritance would create a fragile hierarchy. Inheritance is appropriate only for a stable “is-a” relationship with shared invariants and substitutable subclasses.

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
