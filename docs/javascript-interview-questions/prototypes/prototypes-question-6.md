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
readingMinutes: 2
answerExcerpt: "How do you create an object without a prototype? is a practical prototypes interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
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

Objects delegate property lookup through a prototype chain. Classes provide friendlier syntax, but inheritance, property ownership, and `this` still follow the underlying prototype model.

For **How do you create an object without a prototype?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
function User(name) { this.name = name }
User.prototype.greet = function () { return `Hi, ${this.name}` }
const ada = new User("Ada")
ada.greet() // "Hi, Ada"
```

The method is shared through `User.prototype`, not copied into every instance.

## How to structure your answer

1. Define the concept in one or two sentences.
2. Explain when you would use it and when you would choose an alternative.
3. Walk through a small example, including an edge case.
4. Close with how you would test or measure the result.

## Common mistakes

- Repeating a definition without connecting it to real code.
- Treating an optimization or abstraction as a default rather than a trade-off.
- Omitting lifecycle, error, cleanup, accessibility, or testing considerations when they apply.

## Follow-up prompts

- What failure mode would you expect if this were implemented incorrectly?
- How would you test this behaviour?
- What changes when the feature must scale to a larger application or team?

## Interview tip

For this hard-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
