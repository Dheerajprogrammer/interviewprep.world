---
layout: doc
question: true
title: "What is a type predicate?"
questionTitle: "What is a type predicate?"
description: "Learn What is a type predicate? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "A type predicate is a function return type such as `value is User` that tells TypeScript a runtime check narrows a value. Its implementation must actually verify the claimed shape; otherwise it creates unsound code."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "What is a type predicate?"
prev:
  text: "How do generic constraints work?"
  link: "/typescript-interview-questions/generics/generics-question-2"
next:
  text: "How do you type environment variables?"
  link: "/typescript-interview-questions/architecture/architecture-question-2"
---
# What is a type predicate?

## Answer

A type predicate is a function return type such as `value is User` that tells TypeScript a runtime check narrows a value. Its implementation must actually verify the claimed shape; otherwise it creates unsound code.

## Why this matters

The important idea behind **What is a type predicate** is not the terminology alone; it is the engineering decision the concept enables. Function types describe parameters, return values, and narrowing behaviour. Overloads and type predicates should make call sites safer without obscuring the implementation. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: A type predicate is a function return type such as `value is User` that tells TypeScript a runtime check narrows a value. Its implementation must actually verify the claimed shape; otherwise it creates unsound code. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What is a type predicate**, not from a memorized checklist.

## Worked example

Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects. In this TypeScript example, the team needs to make a decision specifically about **What is a type predicate**. They begin with the rule above—A type predicate is a function return type such as `value is User` that tells TypeScript a runtime check narrows a value. Its implementation must actually verify the claimed shape; otherwise it creates unsound code. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: A type predicate is a function return type such as `value is User` that tells TypeScript a runtime check narrows a value. Its implementation must actually verify the claimed shape; otherwise it creates unsound code. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// What is a type predicate? | typescript-what-is-a-type-predicate
function isError(value: unknown): value is Error {
  return value instanceof Error
}
try { throw new Error("Network failed") } catch (error) {
  if (isError(error)) console.error(error.message)
}
```

A type predicate safely narrows an `unknown` value after a runtime check.
