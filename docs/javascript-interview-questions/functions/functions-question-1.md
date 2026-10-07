---
layout: doc
question: true
title: "What is a closure?"
questionTitle: "What is a closure?"
description: "Learn What is a closure? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "functions"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is a closure? is a practical functions and scope interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/functions/functions-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Functions & Scope"
    link: /javascript-interview-questions/functions/
  - label: "What is a closure?"
prev:
  text: "What are the JavaScript primitive types?"
  link: "/javascript-interview-questions/basics/basics-question-1"
next:
  text: "What is the JavaScript event loop?"
  link: "/javascript-interview-questions/async/async-question-1"
---
# What is a closure?

## Answer

Functions close over the lexical environment in which they are created. This makes callbacks and encapsulation powerful, but it also means that `this`, mutation, and captured values must be handled deliberately.

For **What is a closure?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this medium-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
