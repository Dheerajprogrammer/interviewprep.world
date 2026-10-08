---
layout: doc
question: true
title: "What does `strict` mode enable?"
questionTitle: "What does `strict` mode enable?"
description: "Learn What does `strict` mode enable? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "The `strict` compiler option enables a family of checks including strict nullability, safer function parameters, and definite assignment. It finds more defects early and should normally be enabled for new code."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What does `strict` mode enable?"
prev:
  text: "How do you avoid over-engineered types?"
  link: "/typescript-interview-questions/architecture/architecture-question-9"
next:
  text: "How do you model an API response?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-10"
---
# What does `strict` mode enable?

## Answer

The `strict` compiler option enables a family of checks including strict nullability, safer function parameters, and definite assignment. It finds more defects early and should normally be enabled for new code.

## Why this matters

The important idea behind **What does strict mode enable** is not the terminology alone; it is the engineering decision the concept enables. TypeScript adds a static type system to JavaScript. Explain the compile-time guarantee, distinguish it from runtime validation, and use narrow, readable types instead of escaping to `any`. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: The `strict` compiler option enables a family of checks including strict nullability, safer function parameters, and definite assignment. It finds more defects early and should normally be enabled for new code. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What does strict mode enable**, not from a memorized checklist.

## Worked example

Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers. In this TypeScript example, the team needs to make a decision specifically about **What does strict mode enable**. They begin with the rule above—The `strict` compiler option enables a family of checks including strict nullability, safer function parameters, and definite assignment. It finds more defects early and should normally be enabled for new code. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: The `strict` compiler option enables a family of checks including strict nullability, safer function parameters, and definite assignment. It finds more defects early and should normally be enabled for new code. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// What does strict mode enable? | typescript-what-does-strict-mode-enable
function formatId(id: string | number) {
  return typeof id === "string" ? id.trim() : id.toString()
}
```

The `typeof` check narrows the union, so each branch gets the operations valid for that type.
