---
layout: doc
question: true
title: "What are generators and iterators?"
questionTitle: "What are generators and iterators?"
description: "Learn What are generators and iterators? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "An iterator exposes a `next()` method that yields a sequence; a generator function creates an iterator and can pause with `yield`. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What are generators and iterators?"
prev:
  text: "What are getters and setters?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-9"
next:
  text: "What is the browser rendering pipeline?"
  link: "/javascript-interview-questions/dom/dom-question-9"
---
# What are generators and iterators?

## Answer

An iterator exposes a `next()` method that yields a sequence; a generator function creates an iterator and can pause with `yield`. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams.

## Why this matters

The important idea behind **What are generators and iterators** is not the terminology alone; it is the engineering decision the concept enables. Modern JavaScript adds declarative syntax for modules, collections, object access, and function arguments. Use these features to improve clarity without hiding data ownership or creating accidental copies. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: An iterator exposes a `next()` method that yields a sequence; a generator function creates an iterator and can pause with `yield`. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What are generators and iterators**, not from a memorized checklist.

## Worked example

Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly. In this JavaScript example, the team needs to make a decision specifically about **What are generators and iterators**. They begin with the rule above—An iterator exposes a `next()` method that yields a sequence; a generator function creates an iterator and can pause with `yield`. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: An iterator exposes a `next()` method that yields a sequence; a generator function creates an iterator and can pause with `yield`. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```js
// What are generators and iterators?
const example = {
  id: "javascript-what-are-generators-and-iterators",
  input: 0,
  rule: "An iterator exposes a next() method that yields a sequence; a generator function creates an iterator and can pause with yield. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams.",
  evaluate(value) {
    return { value, type: typeof value, truthy: Boolean(value) }
  },
}

console.log(example.evaluate(example.input))
```

Run this JavaScript example in a browser console or Node.js and change the input to explore the rule from this question.
