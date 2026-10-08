---
layout: doc
question: true
title: "Why should reducers be pure?"
questionTitle: "Why should reducers be pure?"
description: "Learn Why should reducers be pure? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "state-management"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "Pure reducers return the same next state for the same prior state and action without performing I/O or mutation. That makes replay, tests, debugging, and state inspection reliable."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/state-management/state-management-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "State Management"
    link: /angular-interview-questions/state-management/
  - label: "Why should reducers be pure?"
prev:
  text: "What is lazy loading?"
  link: "/angular-interview-questions/routing/routing-question-5"
next:
  text: "What is a computed signal?"
  link: "/angular-interview-questions/signals/signals-question-5"
---
# Why should reducers be pure?

## Answer

Pure reducers return the same next state for the same prior state and action without performing I/O or mutation. That makes replay, tests, debugging, and state inspection reliable.

## Why this matters

The important idea behind **Why should reducers be pure** is not the terminology alone; it is the engineering decision the concept enables. Angular state should have one clear owner and predictable update paths. A local signal or service is often sufficient; introduce a global store when multiple independent features need coordinated, observable transitions. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a medium-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Pure reducers return the same next state for the same prior state and action without performing I/O or mutation. That makes replay, tests, debugging, and state inspection reliable. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **Why should reducers be pure**, not from a memorized checklist.

## Worked example

Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers. In this Angular example, the team needs to make a decision specifically about **Why should reducers be pure**. They begin with the rule above—Pure reducers return the same next state for the same prior state and action without performing I/O or mutation. That makes replay, tests, debugging, and state inspection reliable. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Pure reducers return the same next state for the same prior state and action without performing I/O or mutation. That makes replay, tests, debugging, and state inspection reliable. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// Why should reducers be pure? | angular-why-should-reducers-be-pure
@Injectable({ providedIn: "root" })
export class CartStore {
  readonly items = signal<CartItem[]>([])
  add(item: CartItem) { this.items.update(items => [...items, item]) }
}
```

A small feature store makes state ownership and updates explicit without a global store.
