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
readingMinutes: 5
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

## Why this matters

The important idea behind **How does new work** is not the terminology alone; it is the engineering decision the concept enables. Objects delegate property lookup through a prototype chain. Classes provide friendlier syntax, but inheritance, property ownership, and `this` still follow the underlying prototype model. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: `new` creates an object whose prototype is the constructor’s `prototype`, calls the constructor with that object as `this`, and returns the object unless the constructor explicitly returns another object. Classes use the same underlying mechanism. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How does new work**, not from a memorized checklist.

## Worked example

Suppose an analytics screen must process a larger data set while remaining understandable, accessible, and observable. In this JavaScript example, the team needs to make a decision specifically about **How does new work**. They begin with the rule above—`new` creates an object whose prototype is the constructor’s `prototype`, calls the constructor with that object as `this`, and returns the object unless the constructor explicitly returns another object. Classes use the same underlying mechanism. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: `new` creates an object whose prototype is the constructor’s `prototype`, calls the constructor with that object as `this`, and returns the object unless the constructor explicitly returns another object. Classes use the same underlying mechanism. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```js
// How does new work?
function ConceptExample(value) {
  this.value = value
}

ConceptExample.prototype.explain = function () {
  return this.value
}

const example = new ConceptExample("new creates an object whose prototype is the constructor’s prototype, calls the constructor with that object as this, and returns the object unless the constructor explicitly returns another object. Classes use the same underlying mechanism.")
console.log(example.explain())
```

Run this JavaScript example in a browser console or Node.js and change the input to explore the rule from this question.
