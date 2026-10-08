---
layout: doc
question: true
title: "When is the singleton pattern appropriate?"
questionTitle: "When is the singleton pattern appropriate?"
description: "Learn When is the singleton pattern appropriate? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "When is the singleton pattern appropriate?"
prev:
  text: "How do you document an API?"
  link: "/architecture-interview-questions/api-design/api-design-question-8"
next:
  text: "How do you manage shared data?"
  link: "/architecture-interview-questions/microservices/microservices-question-9"
---
# When is the singleton pattern appropriate?

## Answer

Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state.

## Why this matters

The important idea behind **When is the singleton pattern appropriate** is not the terminology alone; it is the engineering decision the concept enables. Design patterns describe recurring collaboration structures, not rules to apply by name. Use one only when it makes responsibilities, extension points, or dependencies clearer than straightforward composition. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a medium-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **When is the singleton pattern appropriate**, not from a memorized checklist.

## Worked example

Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects. In this Architecture example, the team needs to make a decision specifically about **When is the singleton pattern appropriate**. They begin with the rule above—Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```text
# When is the singleton pattern appropriate?
Requirement: define the user-visible outcome and scale
Boundary: identify the component that owns the behavior
Decision: Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state.
Failure case: describe timeout, retry, partial failure, or rollback behavior
Verification: name the test, log, metric, or user signal that proves it works
Example ID: architecture-when-is-the-singleton-pattern-appropriate
```

This is a copy-ready design-answer skeleton. Replace the requirement and failure case with the constraints given by the interviewer.
