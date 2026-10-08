---
layout: doc
question: true
title: "When should you use an effect?"
questionTitle: "When should you use an effect?"
description: "Learn When should you use an effect? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 4
answerExcerpt: "Use an effect to synchronize reactive state with an imperative boundary such as logging, local storage, a chart library, or a DOM API. Do not use it to derive application state that belongs in `computed`."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "When should you use an effect?"
prev:
  text: "How do selectors improve performance?"
  link: "/angular-interview-questions/state-management/state-management-question-6"
next:
  text: "How do you lazy load a feature?"
  link: "/angular-interview-questions/performance/performance-question-6"
---
# When should you use an effect?

## Answer

Use an effect to synchronize reactive state with an imperative boundary such as logging, local storage, a chart library, or a DOM API. Do not use it to derive application state that belongs in `computed`.

## Why this matters

The important idea behind **When should you use an effect** is not the terminology alone; it is the engineering decision the concept enables. Signals hold synchronous reactive state; computed signals derive values and effects bridge reactive state to imperative work. Keep derivations pure and avoid effects that silently write more application state. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Use an effect to synchronize reactive state with an imperative boundary such as logging, local storage, a chart library, or a DOM API. Do not use it to derive application state that belongs in `computed`. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **When should you use an effect**, not from a memorized checklist.

## Worked example

Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers. In this Angular example, the team needs to make a decision specifically about **When should you use an effect**. They begin with the rule above—Use an effect to synchronize reactive state with an imperative boundary such as logging, local storage, a chart library, or a DOM API. Do not use it to derive application state that belongs in `computed`. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Use an effect to synchronize reactive state with an imperative boundary such as logging, local storage, a chart library, or a DOM API. Do not use it to derive application state that belongs in `computed`. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```ts
// When should you use an effect? | angular-when-should-you-use-an-effect
const count = signal(0)
const doubled = computed(() => count() * 2)
count.update(value => value + 1)
```

Signals are read by calling them; computed values automatically track the signals they read.
