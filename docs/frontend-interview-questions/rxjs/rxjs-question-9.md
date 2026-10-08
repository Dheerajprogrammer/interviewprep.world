---
layout: doc
question: true
title: "What is a cold versus hot Observable?"
questionTitle: "What is a cold versus hot Observable?"
description: "Learn What is a cold versus hot Observable? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "A cold Observable creates its producer for each subscriber, such as an HTTP request. A hot Observable shares a producer independent of subscribers, such as a DOM event or Subject."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "What is a cold versus hot Observable?"
prev:
  text: "How do you avoid unnecessary Redux re-renders?"
  link: "/frontend-interview-questions/redux/redux-question-9"
next:
  text: "How do you use a performance budget?"
  link: "/frontend-interview-questions/performance/performance-question-9"
---
# What is a cold versus hot Observable?

## Answer

A cold Observable creates its producer for each subscriber, such as an HTTP request. A hot Observable shares a producer independent of subscribers, such as a DOM event or Subject.

## Why this matters

The important idea behind **What is a cold versus hot Observable** is not the terminology alone; it is the engineering decision the concept enables. RxJS models asynchronous values as composable streams. The important design choice is the source lifetime and concurrency rule: cancel, merge, queue, or ignore competing work deliberately. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Do not stop after listing definitions. Compare the alternatives along the dimensions that change an engineering decision: ownership, lifetime, failure behaviour, performance cost, and the conditions under which each option is the safer choice. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: A cold Observable creates its producer for each subscriber, such as an HTTP request. A hot Observable shares a producer independent of subscribers, such as a DOM event or Subject. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What is a cold versus hot Observable**, not from a memorized checklist.

## Worked example

Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers. In this Frontend example, the team needs to make a decision specifically about **What is a cold versus hot Observable**. They begin with the rule above—A cold Observable creates its producer for each subscriber, such as an HTTP request. A hot Observable shares a producer independent of subscribers, such as a DOM event or Subject. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: A cold Observable creates its producer for each subscriber, such as an HTTP request. A hot Observable shares a producer independent of subscribers, such as a DOM event or Subject. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// What is a cold versus hot Observable? | frontend-what-is-a-cold-versus-hot-observable
const results$ = query$.pipe(
  debounceTime(250),
  distinctUntilChanged(),
  switchMap(query => api.search(query))
)
```

`switchMap` ensures an older search result cannot overwrite a newer query.
