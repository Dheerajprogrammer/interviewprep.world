---
layout: doc
question: true
title: "What is the difference between default and named exports?"
questionTitle: "What is the difference between default and named exports?"
description: "Learn What is the difference between default and named exports? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is the difference between default and named exports? is a practical modern JavaScript interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What is the difference between default and named exports?"
prev:
  text: "What is the difference between `__proto__` and `prototype`?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-2"
next:
  text: "What is the difference between event bubbling and capturing?"
  link: "/javascript-interview-questions/dom/dom-question-2"
---
# What is the difference between default and named exports?

## Answer

Modern JavaScript adds declarative syntax for modules, collections, object access, and function arguments. Use these features to improve clarity without hiding data ownership or creating accidental copies.

For **What is the difference between default and named exports?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
const user = { name: "Ada", settings: { theme: "dark" } }
const { name, settings: { theme } } = user
const label = `${name}: ${theme}`
```

Destructuring reads values without changing the original object.

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
