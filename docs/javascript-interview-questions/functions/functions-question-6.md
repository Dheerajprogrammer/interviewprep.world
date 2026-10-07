---
layout: doc
question: true
title: "What is function composition?"
questionTitle: "What is function composition?"
description: "Learn What is function composition? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is function composition? is a practical functions and scope interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is function composition?"
prev:
  text: "How do `var`, `let`, and `const` differ?"
  link: "/javascript-interview-questions/basics/basics-question-6"
next:
  text: "When would you use `Promise.race` or `Promise.any`?"
  link: "/javascript-interview-questions/async/async-question-6"
---
# What is function composition?

## Answer

Functions close over the lexical environment in which they are created. This makes callbacks and encapsulation powerful, but it also means that `this`, mutation, and captured values must be handled deliberately.

For **What is function composition?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
function makeCounter() {
  let count = 0
  return () => ++count
}
const next = makeCounter()
next() // 1
next() // 2
```

`next` retains access to `count`; that retained lexical environment is a closure.

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

For this easy-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
