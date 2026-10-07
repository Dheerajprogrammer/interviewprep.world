---
layout: doc
question: true
title: "What is the difference between the microtask and macrotask queues?"
questionTitle: "What is the difference between the microtask and macrotask queues?"
description: "Learn What is the difference between the microtask and macrotask queues? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is the difference between the microtask and macrotask queues? is a practical async JavaScript interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "What is the difference between the microtask and macrotask queues?"
prev:
  text: "What is lexical scope?"
  link: "/javascript-interview-questions/functions/functions-question-2"
next:
  text: "What is the difference between `__proto__` and `prototype`?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-2"
---
# What is the difference between the microtask and macrotask queues?

## Answer

JavaScript runs synchronous work on a call stack and schedules asynchronous continuations through the event loop. Promise reactions run as microtasks, ahead of the next task, so ordering and cancellation must be designed explicitly.

For **What is the difference between the microtask and macrotask queues?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
console.log("start")
Promise.resolve().then(() => console.log("microtask"))
setTimeout(() => console.log("task"), 0)
console.log("end")
// start, end, microtask, task
```

Promise handlers use the microtask queue, which runs before the next timer task.

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
