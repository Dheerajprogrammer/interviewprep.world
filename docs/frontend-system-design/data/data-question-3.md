---
layout: doc
question: true
title: "How do you handle stale data?"
questionTitle: "How do you handle stale data?"
description: "Learn How do you handle stale data? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "data"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/data/data-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Data & Caching"
    link: /frontend-system-design/data/
  - label: "How do you handle stale data?"
prev:
  text: "How do you design image delivery at scale?"
  link: "/frontend-system-design/performance/performance-question-3"
next:
  text: "How do you design a collaborative editor?"
  link: "/frontend-system-design/realtime/realtime-question-3"
---
# How do you handle stale data?

## Answer

Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless.

## Why this matters

The important idea behind **How do you handle stale data** is not the terminology alone; it is the engineering decision the concept enables. Frontend data systems balance freshness, latency, consistency, and simplicity. Define cache keys and invalidation rules, model loading and error states, and avoid making the UI depend on timing assumptions. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do you handle stale data**, not from a memorized checklist.

## Worked example

Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers. In this Frontend System Design example, the team needs to make a decision specifically about **How do you handle stale data**. They begin with the rule above—Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```text
# How do you handle stale data?
Requirement: define the user-visible outcome and scale
Boundary: identify the component that owns the behavior
Decision: Show cached data when it is useful, indicate refresh state where accuracy matters, revalidate in the background, and invalidate after known writes. Choose a staleness window from user risk rather than treating every view as either perfectly fresh or useless.
Failure case: describe timeout, retry, partial failure, or rollback behavior
Verification: name the test, log, metric, or user signal that proves it works
Example ID: frontend-system-design-how-do-you-handle-stale-data
```

This is a copy-ready design-answer skeleton. Replace the requirement and failure case with the constraints given by the interviewer.
