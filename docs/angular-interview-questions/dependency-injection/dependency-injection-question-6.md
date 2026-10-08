---
layout: doc
question: true
title: "How does hierarchical DI work?"
questionTitle: "How does hierarchical DI work?"
description: "Learn How does hierarchical DI work? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "Angular searches from the requesting injector upward through parent injectors until it finds a provider. A child provider can override a parent one, enabling feature-local configuration and test substitutions."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "How does hierarchical DI work?"
prev:
  text: "How do you test an Angular service?"
  link: "/angular-interview-questions/services/services-question-6"
next:
  text: "What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`?"
  link: "/angular-interview-questions/rxjs/rxjs-question-6"
---
# How does hierarchical DI work?

## Answer

Angular searches from the requesting injector upward through parent injectors until it finds a provider. A child provider can override a parent one, enabling feature-local configuration and test substitutions.

## Why this matters

The important idea behind **How does hierarchical DI work** is not the terminology alone; it is the engineering decision the concept enables. Angular dependency injection resolves tokens through a hierarchy of injectors. Provider scope determines instance lifetime, while tokens and provider types let applications replace implementations cleanly. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Angular searches from the requesting injector upward through parent injectors until it finds a provider. A child provider can override a parent one, enabling feature-local configuration and test substitutions. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How does hierarchical DI work**, not from a memorized checklist.

## Worked example

Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly. In this Angular example, the team needs to make a decision specifically about **How does hierarchical DI work**. They begin with the rule above—Angular searches from the requesting injector upward through parent injectors until it finds a provider. A child provider can override a parent one, enabling feature-local configuration and test substitutions. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Angular searches from the requesting injector upward through parent injectors until it finds a provider. A child provider can override a parent one, enabling feature-local configuration and test substitutions. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// How does hierarchical DI work? | angular-how-does-hierarchical-di-work
export const API_URL = new InjectionToken<string>("api-url")
bootstrapApplication(AppComponent, { providers: [{ provide: API_URL, useValue: "/api" }] })
```

An injection token is a typed key for a dependency that is not a class.
