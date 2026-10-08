---
layout: doc
question: true
title: "How do you extend an interface?"
questionTitle: "How do you extend an interface?"
description: "Learn How do you extend an interface? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Use `extends` to inherit members from another interface, then add or refine compatible members. Prefer small composable interfaces over one broad base type that forces unrelated consumers to depend on fields they do not need."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "How do you extend an interface?"
prev:
  text: "What is an intersection type?"
  link: "/typescript-interview-questions/basics/basics-question-6"
next:
  text: "What is the `infer` keyword?"
  link: "/typescript-interview-questions/generics/generics-question-6"
---
# How do you extend an interface?

## Answer

Use `extends` to inherit members from another interface, then add or refine compatible members. Prefer small composable interfaces over one broad base type that forces unrelated consumers to depend on fields they do not need.

## Why this matters

The important idea behind **How do you extend an interface** is not the terminology alone; it is the engineering decision the concept enables. Interfaces and type aliases describe object shapes and composition. Model the domain precisely, keep public contracts stable, and prefer utility types when they clarify an existing type. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Use `extends` to inherit members from another interface, then add or refine compatible members. Prefer small composable interfaces over one broad base type that forces unrelated consumers to depend on fields they do not need. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do you extend an interface**, not from a memorized checklist.

## Worked example

Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers. In this TypeScript example, the team needs to make a decision specifically about **How do you extend an interface**. They begin with the rule above—Use `extends` to inherit members from another interface, then add or refine compatible members. Prefer small composable interfaces over one broad base type that forces unrelated consumers to depend on fields they do not need. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Use `extends` to inherit members from another interface, then add or refine compatible members. Prefer small composable interfaces over one broad base type that forces unrelated consumers to depend on fields they do not need. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// How do you extend an interface? | typescript-how-do-you-extend-an-interface
type User = { id: string; name: string; readonly role?: "admin" | "member" }
type UserPreview = Pick<User, "id" | "name">
```

`Pick` derives a focused view without duplicating the source model.
