---
layout: doc
question: true
title: "When should you avoid generics?"
questionTitle: "When should you avoid generics?"
description: "Learn When should you avoid generics? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "Avoid generics when a concrete type communicates the domain better, when no input-output relationship needs preserving, or when callers must supply complex annotations. A small explicit union is often clearer than an abstract generic API."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "When should you avoid generics?"
prev:
  text: "How do you model an API response?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-10"
next:
  text: "What are template literal types?"
  link: "/typescript-interview-questions/functions/functions-question-10"
---
# When should you avoid generics?

## Answer

Avoid generics when a concrete type communicates the domain better, when no input-output relationship needs preserving, or when callers must supply complex annotations. A small explicit union is often clearer than an abstract generic API.

## Why this matters

The important idea behind **When should you avoid generics** is not the terminology alone; it is the engineering decision the concept enables. Generics preserve relationships between input and output types. Constrain a type parameter only when the implementation needs a capability, and choose names that reveal the relationship. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Avoid generics when a concrete type communicates the domain better, when no input-output relationship needs preserving, or when callers must supply complex annotations. A small explicit union is often clearer than an abstract generic API. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **When should you avoid generics**, not from a memorized checklist.

## Worked example

Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly. In this TypeScript example, the team needs to make a decision specifically about **When should you avoid generics**. They begin with the rule above—Avoid generics when a concrete type communicates the domain better, when no input-output relationship needs preserving, or when callers must supply complex annotations. A small explicit union is often clearer than an abstract generic API. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Avoid generics when a concrete type communicates the domain better, when no input-output relationship needs preserving, or when callers must supply complex annotations. A small explicit union is often clearer than an abstract generic API. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// When should you avoid generics? | typescript-when-should-you-avoid-generics
function first<T>(items: readonly T[]): T | undefined {
  return items[0]
}
const user = first([{ id: "u1" }]) // { id: string } | undefined
```

`T` preserves the item type from the caller through the return value.
