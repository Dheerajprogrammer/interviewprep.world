---
layout: doc
question: true
title: "How do rest parameters work in TypeScript?"
questionTitle: "How do rest parameters work in TypeScript?"
description: "Learn How do rest parameters work in TypeScript? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "A rest parameter is typed as an array or tuple and gathers remaining arguments. A tuple preserves each argument position and type, making it useful for forwarding calls or modeling a known variable-length signature."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "How do rest parameters work in TypeScript?"
prev:
  text: "How do you write a generic function?"
  link: "/typescript-interview-questions/generics/generics-question-8"
next:
  text: "How do you share types between frontend and backend?"
  link: "/typescript-interview-questions/architecture/architecture-question-8"
---
# How do rest parameters work in TypeScript?

## Answer

A rest parameter is typed as an array or tuple and gathers remaining arguments. A tuple preserves each argument position and type, making it useful for forwarding calls or modeling a known variable-length signature.

## Why this matters

The important idea behind **How do rest parameters work in TypeScript** is not the terminology alone; it is the engineering decision the concept enables. Function types describe parameters, return values, and narrowing behaviour. Overloads and type predicates should make call sites safer without obscuring the implementation. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: A rest parameter is typed as an array or tuple and gathers remaining arguments. A tuple preserves each argument position and type, making it useful for forwarding calls or modeling a known variable-length signature. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do rest parameters work in TypeScript**, not from a memorized checklist.

## Worked example

Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly. In this TypeScript example, the team needs to make a decision specifically about **How do rest parameters work in TypeScript**. They begin with the rule above—A rest parameter is typed as an array or tuple and gathers remaining arguments. A tuple preserves each argument position and type, making it useful for forwarding calls or modeling a known variable-length signature. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: A rest parameter is typed as an array or tuple and gathers remaining arguments. A tuple preserves each argument position and type, making it useful for forwarding calls or modeling a known variable-length signature. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// How do rest parameters work in TypeScript? | typescript-how-do-rest-parameters-work-in-typescript
function isError(value: unknown): value is Error {
  return value instanceof Error
}
try { throw new Error("Network failed") } catch (error) {
  if (isError(error)) console.error(error.message)
}
```

A type predicate safely narrows an `unknown` value after a runtime check.
