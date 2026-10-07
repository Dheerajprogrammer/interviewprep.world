---
layout: doc
question: true
title: "What are getters and setters?"
questionTitle: "What are getters and setters?"
description: "Learn What are getters and setters? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "prototypes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Getters and setters are accessor properties that run code when a property is read or assigned. Use them for a clear computed or validated property contract, but avoid hidden expensive work or side effects in an ordinary-looking read."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/prototypes/prototypes-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Prototypes & OOP"
    link: /javascript-interview-questions/prototypes/
  - label: "What are getters and setters?"
prev:
  text: "How do you cancel a fetch request?"
  link: "/javascript-interview-questions/async/async-question-9"
next:
  text: "What are generators and iterators?"
  link: "/javascript-interview-questions/es6/es6-question-9"
---
# What are getters and setters?

## Answer

Getters and setters are accessor properties that run code when a property is read or assigned. Use them for a clear computed or validated property contract, but avoid hidden expensive work or side effects in an ordinary-looking read.

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
