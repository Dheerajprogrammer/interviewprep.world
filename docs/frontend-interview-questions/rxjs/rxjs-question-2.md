---
layout: doc
question: true
title: "How does an Observable differ from a Promise?"
questionTitle: "How does an Observable differ from a Promise?"
description: "Learn How does an Observable differ from a Promise? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "A Promise resolves once and begins immediately, while an Observable can emit zero or many values, is usually lazy, and supports cancellation through unsubscription. Observables are a better fit for events, streams, and composed asynchronous flows."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "How does an Observable differ from a Promise?"
prev:
  text: "What are actions, reducers, and the store?"
  link: "/frontend-interview-questions/redux/redux-question-2"
next:
  text: "How do you reduce Largest Contentful Paint?"
  link: "/frontend-interview-questions/performance/performance-question-2"
---
# How does an Observable differ from a Promise?

## Answer

A Promise resolves once and begins immediately, while an Observable can emit zero or many values, is usually lazy, and supports cancellation through unsubscription. Observables are a better fit for events, streams, and composed asynchronous flows.

## Why this matters

The important idea behind **How does an Observable differ from a Promise** is not the terminology alone; it is the engineering decision the concept enables. RxJS models asynchronous values as composable streams. The important design choice is the source lifetime and concurrency rule: cancel, merge, queue, or ignore competing work deliberately. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: A Promise resolves once and begins immediately, while an Observable can emit zero or many values, is usually lazy, and supports cancellation through unsubscription. Observables are a better fit for events, streams, and composed asynchronous flows. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How does an Observable differ from a Promise**, not from a memorized checklist.

## Worked example

Imagine an API used by both a browser client and a background worker, each with different latency and failure patterns. In this Frontend example, the team needs to make a decision specifically about **How does an Observable differ from a Promise**. They begin with the rule above—A Promise resolves once and begins immediately, while an Observable can emit zero or many values, is usually lazy, and supports cancellation through unsubscription. Observables are a better fit for events, streams, and composed asynchronous flows. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: A Promise resolves once and begins immediately, while an Observable can emit zero or many values, is usually lazy, and supports cancellation through unsubscription. Observables are a better fit for events, streams, and composed asynchronous flows. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// How does an Observable differ from a Promise? | frontend-how-does-an-observable-differ-from-a-promise
const results$ = query$.pipe(
  debounceTime(250),
  distinctUntilChanged(),
  switchMap(query => api.search(query))
)
```

`switchMap` ensures an older search result cannot overwrite a newer query.
