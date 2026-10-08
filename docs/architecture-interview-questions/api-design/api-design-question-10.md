---
layout: doc
question: true
title: "How do you evolve an API without breaking clients?"
questionTitle: "How do you evolve an API without breaking clients?"
description: "Learn How do you evolve an API without breaking clients? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "api-design"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/api-design/api-design-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "API Design"
    link: /architecture-interview-questions/api-design/
  - label: "How do you evolve an API without breaking clients?"
prev:
  text: "How do you design for partial failure?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-10"
next:
  text: "How do you know when not to use a design pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-10"
---
# How do you evolve an API without breaking clients?

## Answer

Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement.

## Why this matters

The important idea behind **How do you evolve an API without breaking clients** is not the terminology alone; it is the engineering decision the concept enables. Good API design makes the common path obvious and predictable while preserving room to evolve. Consistent naming, validation, error shapes, pagination, authentication, and versioning protect both clients and maintainers. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do you evolve an API without breaking clients**, not from a memorized checklist.

## Worked example

Imagine an API used by both a browser client and a background worker, each with different latency and failure patterns. In this Architecture example, the team needs to make a decision specifically about **How do you evolve an API without breaking clients**. They begin with the rule above—Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```text
# How do you evolve an API without breaking clients?
Requirement: define the user-visible outcome and scale
Boundary: identify the component that owns the behavior
Decision: Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement.
Failure case: describe timeout, retry, partial failure, or rollback behavior
Verification: name the test, log, metric, or user signal that proves it works
Example ID: architecture-how-do-you-evolve-an-api-without-breaking-clients
```

This is a copy-ready design-answer skeleton. Replace the requirement and failure case with the constraints given by the interviewer.
