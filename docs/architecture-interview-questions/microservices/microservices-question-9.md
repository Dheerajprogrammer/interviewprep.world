---
layout: doc
question: true
title: "How do you manage shared data?"
questionTitle: "How do you manage shared data?"
description: "Learn How do you manage shared data? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "microservices"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/microservices/microservices-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Microservices"
    link: /architecture-interview-questions/microservices/
  - label: "How do you manage shared data?"
prev:
  text: "When is the singleton pattern appropriate?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-8"
next:
  text: "What is the difference between at-least-once and exactly-once delivery?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-9"
---
# How do you manage shared data?

## Answer

Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services.

## Why this matters

The important idea behind **How do you manage shared data** is not the terminology alone; it is the engineering decision the concept enables. Microservices split a system into independently deployable services around business capabilities. They earn their complexity only when team or scaling boundaries justify distributed operations, observability, and data ownership. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do you manage shared data**, not from a memorized checklist.

## Worked example

Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects. In this Architecture example, the team needs to make a decision specifically about **How do you manage shared data**. They begin with the rule above—Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```text
# How do you manage shared data?
Requirement: define the user-visible outcome and scale
Boundary: identify the component that owns the behavior
Decision: Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services.
Failure case: describe timeout, retry, partial failure, or rollback behavior
Verification: name the test, log, metric, or user signal that proves it works
Example ID: architecture-how-do-you-manage-shared-data
```

This is a copy-ready design-answer skeleton. Replace the requirement and failure case with the constraints given by the interviewer.
