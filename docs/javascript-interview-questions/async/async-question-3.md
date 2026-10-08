---
layout: doc
question: true
title: "What are the states of a Promise?"
questionTitle: "What are the states of a Promise?"
description: "Learn What are the states of a Promise? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "What are the states of a Promise?"
prev:
  text: "What is the difference between `call`, `apply`, and `bind`?"
  link: "/javascript-interview-questions/functions/functions-question-3"
next:
  text: "How does `new` work?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-3"
---
# What are the states of a Promise?

## Answer

A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously.

## Why this matters

The important idea behind **What are the states of a Promise** is not the terminology alone; it is the engineering decision the concept enables. JavaScript runs synchronous work on a call stack and schedules asynchronous continuations through the event loop. Promise reactions run as microtasks, ahead of the next task, so ordering and cancellation must be designed explicitly. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a medium-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What are the states of a Promise**, not from a memorized checklist.

## Worked example

Suppose an analytics screen must process a larger data set while remaining understandable, accessible, and observable. In this JavaScript example, the team needs to make a decision specifically about **What are the states of a Promise**. They begin with the rule above—A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```js
// What are the states of a Promise?
async function runExample(task) {
  try {
    const value = await task()
    return { ok: true, value }
  } catch (error) {
    return { ok: false, error: String(error) }
  }
}

runExample(async () => "A Promise starts pending and settles exactly once as fulfilled with a value or rejected with a reason. A settled Promise cannot change state, though handlers attached later still run asynchronously.").then(console.log)
```

Run this JavaScript example in a browser console or Node.js and change the input to explore the rule from this question.
