---
layout: doc
question: true
title: "How do `var`, `let`, and `const` differ?"
questionTitle: "How do `var`, `let`, and `const` differ?"
description: "Learn How do `var`, `let`, and `const` differ? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "basics"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "`var` is function-scoped, can be redeclared, and is initialized to `undefined`; `let` and `const` are block-scoped and have a temporal dead zone. Use `const` by default, `let` when rebinding is required, and avoid `var` in new code."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/basics/basics-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "JavaScript Basics"
    link: /javascript-interview-questions/basics/
  - label: "How do `var`, `let`, and `const` differ?"
prev:
  text: "How do you find duplicate values in an array?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-5"
next:
  text: "What is function composition?"
  link: "/javascript-interview-questions/functions/functions-question-6"
---
# How do `var`, `let`, and `const` differ?

## Answer

`var` is function-scoped, can be redeclared, and is initialized to `undefined`; `let` and `const` are block-scoped and have a temporal dead zone. Use `const` by default, `let` when rebinding is required, and avoid `var` in new code.

## Why this matters

The important idea behind **How do var, let, and const differ** is not the terminology alone; it is the engineering decision the concept enables. JavaScript values have well-defined types, scope rules, and coercion behaviour. Explain the exact runtime rule first, then use a short expression to demonstrate the result. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: `var` is function-scoped, can be redeclared, and is initialized to `undefined`; `let` and `const` are block-scoped and have a temporal dead zone. Use `const` by default, `let` when rebinding is required, and avoid `var` in new code. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do var, let, and const differ**, not from a memorized checklist.

## Worked example

Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects. In this JavaScript example, the team needs to make a decision specifically about **How do var, let, and const differ**. They begin with the rule above—`var` is function-scoped, can be redeclared, and is initialized to `undefined`; `let` and `const` are block-scoped and have a temporal dead zone. Use `const` by default, `let` when rebinding is required, and avoid `var` in new code. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: `var` is function-scoped, can be redeclared, and is initialized to `undefined`; `let` and `const` are block-scoped and have a temporal dead zone. Use `const` by default, `let` when rebinding is required, and avoid `var` in new code. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```js
// How do var, let, and const differ?
const example = {
  id: "javascript-how-do-var-let-and-const-differ",
  input: 0,
  rule: "var is function-scoped, can be redeclared, and is initialized to undefined; let and const are block-scoped and have a temporal dead zone. Use const by default, let when rebinding is required, and avoid var in new code.",
  evaluate(value) {
    return { value, type: typeof value, truthy: Boolean(value) }
  },
}

console.log(example.evaluate(example.input))
```

Run this JavaScript example in a browser console or Node.js and change the input to explore the rule from this question.
