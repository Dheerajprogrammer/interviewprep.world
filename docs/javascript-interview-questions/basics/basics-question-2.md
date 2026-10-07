---
layout: doc
question: true
title: "What is the difference between `==` and `===`?"
questionTitle: "What is the difference between `==` and `===`?"
description: "Learn What is the difference between `==` and `===`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is the difference between `==` and `===`? is a practical JavaScript fundamentals interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "What is the difference between `==` and `===`?"
prev:
  text: "How do you flatten a nested array?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-1"
next:
  text: "What is lexical scope?"
  link: "/javascript-interview-questions/functions/functions-question-2"
---
# What is the difference between `==` and `===`?

## Answer

JavaScript values have well-defined types, scope rules, and coercion behaviour. Explain the exact runtime rule first, then use a short expression to demonstrate the result.

For **What is the difference between `==` and `===`?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
const input = 0
console.log(Boolean(input)) // false
console.log(input === false) // false: no coercion
```

Use strict equality when you do not explicitly want coercion.

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

For this medium-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
