---
layout: doc
question: true
title: "How does `new` work?"
questionTitle: "How does `new` work?"
description: "Learn How does `new` work? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`new` creates an object whose prototype is the constructor’s `prototype`, calls the constructor with that object as `this`, and returns the object unless the constructor explicitly returns another object. Classes use the same underlying mechanism."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "How does `new` work?"
prev:
  text: "What are the states of a Promise?"
  link: "/javascript-interview-questions/async/async-question-3"
next:
  text: "What are template literals?"
  link: "/javascript-interview-questions/es6/es6-question-3"
---
# How does `new` work?

## Answer

`new` creates an object whose prototype is the constructor’s `prototype`, calls the constructor with that object as `this`, and returns the object unless the constructor explicitly returns another object. Classes use the same underlying mechanism.

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
