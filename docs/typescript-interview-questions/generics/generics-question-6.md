---
layout: doc
question: true
title: "What is the `infer` keyword?"
questionTitle: "What is the `infer` keyword?"
description: "Learn What is the `infer` keyword? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "`infer` introduces a type variable inside a conditional type so TypeScript can extract part of a matched type, such as a function return type or array element. It is most useful inside small named utility types."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "What is the `infer` keyword?"
prev:
  text: "How do you extend an interface?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-6"
next:
  text: "How do you type async functions?"
  link: "/typescript-interview-questions/functions/functions-question-6"
---
# What is the `infer` keyword?

## Answer

`infer` introduces a type variable inside a conditional type so TypeScript can extract part of a matched type, such as a function return type or array element. It is most useful inside small named utility types.

## Why this matters

The important idea behind **What is the infer keyword** is not the terminology alone; it is the engineering decision the concept enables. Generics preserve relationships between input and output types. Constrain a type parameter only when the implementation needs a capability, and choose names that reveal the relationship. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: `infer` introduces a type variable inside a conditional type so TypeScript can extract part of a matched type, such as a function return type or array element. It is most useful inside small named utility types. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What is the infer keyword**, not from a memorized checklist.

## Worked example

Suppose an analytics screen must process a larger data set while remaining understandable, accessible, and observable. In this TypeScript example, the team needs to make a decision specifically about **What is the infer keyword**. They begin with the rule above—`infer` introduces a type variable inside a conditional type so TypeScript can extract part of a matched type, such as a function return type or array element. It is most useful inside small named utility types. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: `infer` introduces a type variable inside a conditional type so TypeScript can extract part of a matched type, such as a function return type or array element. It is most useful inside small named utility types. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// What is the infer keyword? | typescript-what-is-the-infer-keyword
function first<T>(items: readonly T[]): T | undefined {
  return items[0]
}
const user = first([{ id: "u1" }]) // { id: string } | undefined
```

`T` preserves the item type from the caller through the return value.
