---
layout: doc
question: true
title: "What is lazy loading?"
questionTitle: "What is lazy loading?"
description: "Learn What is lazy loading? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "Lazy loading defers a route or feature bundle until navigation requires it. It reduces initial JavaScript, but loading UI and error handling must make the transition clear and reliable."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "What is lazy loading?"
prev:
  text: "What is a ReplaySubject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-5"
next:
  text: "Why should reducers be pure?"
  link: "/angular-interview-questions/state-management/state-management-question-5"
---
# What is lazy loading?

## Answer

Lazy loading defers a route or feature bundle until navigation requires it. It reduces initial JavaScript, but loading UI and error handling must make the transition clear and reliable.

## Why this matters

The important idea behind **What is lazy loading** is not the terminology alone; it is the engineering decision the concept enables. Angular Router composes a route tree into router outlets. Route configuration should declare access control, data requirements, redirects, and lazy boundaries close to the feature they protect. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Lazy loading defers a route or feature bundle until navigation requires it. It reduces initial JavaScript, but loading UI and error handling must make the transition clear and reliable. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What is lazy loading**, not from a memorized checklist.

## Worked example

Imagine an API used by both a browser client and a background worker, each with different latency and failure patterns. In this Angular example, the team needs to make a decision specifically about **What is lazy loading**. They begin with the rule above—Lazy loading defers a route or feature bundle until navigation requires it. It reduces initial JavaScript, but loading UI and error handling must make the transition clear and reliable. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Lazy loading defers a route or feature bundle until navigation requires it. It reduces initial JavaScript, but loading UI and error handling must make the transition clear and reliable. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// What is lazy loading? | angular-what-is-lazy-loading
const routes: Routes = [
  { path: "projects/:id", component: ProjectComponent },
  { path: "", pathMatch: "full", redirectTo: "projects/1" }
]
```

Route parameters describe resource identity; redirects make a clear default URL.
