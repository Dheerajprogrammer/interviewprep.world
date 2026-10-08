---
layout: doc
question: true
title: "What causes long tasks on the main thread?"
questionTitle: "What causes long tasks on the main thread?"
description: "Learn What causes long tasks on the main thread? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "performance"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "Large JavaScript parsing or execution, expensive rendering, synchronous event handlers, and third-party scripts can block the main thread for more than 50 ms. Split, defer, or move non-UI computation off the critical path."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/performance/performance-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Performance"
    link: /frontend-interview-questions/performance/
  - label: "What causes long tasks on the main thread?"
prev:
  text: "How do you handle errors in an RxJS stream?"
  link: "/frontend-interview-questions/rxjs/rxjs-question-8"
next:
  text: "What cookie attributes improve security?"
  link: "/frontend-interview-questions/security/security-question-8"
---
# What causes long tasks on the main thread?

## Answer

Large JavaScript parsing or execution, expensive rendering, synchronous event handlers, and third-party scripts can block the main thread for more than 50 ms. Split, defer, or move non-UI computation off the critical path.

## Why this matters

The important idea behind **What causes long tasks on the main thread** is not the terminology alone; it is the engineering decision the concept enables. Web performance is measured at the user level. Protect the critical rendering path, reduce main-thread work, and validate improvements against field data rather than bundle size alone. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a medium-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Large JavaScript parsing or execution, expensive rendering, synchronous event handlers, and third-party scripts can block the main thread for more than 50 ms. Split, defer, or move non-UI computation off the critical path. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What causes long tasks on the main thread**, not from a memorized checklist.

## Worked example

Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects. In this Frontend example, the team needs to make a decision specifically about **What causes long tasks on the main thread**. They begin with the rule above—Large JavaScript parsing or execution, expensive rendering, synchronous event handlers, and third-party scripts can block the main thread for more than 50 ms. Split, defer, or move non-UI computation off the critical path. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Large JavaScript parsing or execution, expensive rendering, synchronous event handlers, and third-party scripts can block the main thread for more than 50 ms. Split, defer, or move non-UI computation off the critical path. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```html
<!-- What causes long tasks on the main thread? | frontend-what-causes-long-tasks-on-the-main-thread -->
<link rel="preload" as="image" href="/hero.webp" fetchpriority="high" />
<img src="/hero.webp" width="1200" height="675" alt="Product dashboard" />
```

Preloading the verified LCP image and reserving its dimensions can improve loading and prevent layout shift.
