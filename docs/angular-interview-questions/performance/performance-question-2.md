---
layout: doc
question: true
title: "What does `OnPush` change detection do?"
questionTitle: "What does `OnPush` change detection do?"
description: "Learn What does `OnPush` change detection do? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "OnPush limits checks to meaningful triggers such as changed input references, events in the component, signals it reads, async-pipe emissions, or explicit marking. It rewards immutable data flow and component boundaries."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "What does `OnPush` change detection do?"
prev:
  text: "What is the difference between `signal`, `computed`, and `effect`?"
  link: "/angular-interview-questions/signals/signals-question-2"
next:
  text: "What is feature-based architecture?"
  link: "/angular-interview-questions/architecture/architecture-question-2"
---
# What does `OnPush` change detection do?

## Answer

OnPush limits checks to meaningful triggers such as changed input references, events in the component, signals it reads, async-pipe emissions, or explicit marking. It rewards immutable data flow and component boundaries.

## Why this matters

The important idea behind **What does OnPush change detection do** is not the terminology alone; it is the engineering decision the concept enables. Angular performance comes from minimizing change-detection work and JavaScript delivered to the browser. Use stable list tracking, simple templates, lazy features, and measured profiling before adding complexity. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: OnPush limits checks to meaningful triggers such as changed input references, events in the component, signals it reads, async-pipe emissions, or explicit marking. It rewards immutable data flow and component boundaries. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What does OnPush change detection do**, not from a memorized checklist.

## Worked example

Imagine an API used by both a browser client and a background worker, each with different latency and failure patterns. In this Angular example, the team needs to make a decision specifically about **What does OnPush change detection do**. They begin with the rule above—OnPush limits checks to meaningful triggers such as changed input references, events in the component, signals it reads, async-pipe emissions, or explicit marking. It rewards immutable data flow and component boundaries. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: OnPush limits checks to meaningful triggers such as changed input references, events in the component, signals it reads, async-pipe emissions, or explicit marking. It rewards immutable data flow and component boundaries. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```html
<!-- What does OnPush change detection do? | angular-what-does-onpush-change-detection-do -->
@for (user of users; track user.id) {
  <app-user-row [user]="user" />
}
```

Tracking by a stable id lets Angular preserve DOM nodes when a list changes.
