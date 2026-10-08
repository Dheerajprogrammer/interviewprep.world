---
layout: doc
question: true
title: "How do stacking contexts work?"
questionTitle: "How do stacking contexts work?"
description: "Learn How do stacking contexts work? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "css"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "A stacking context is an isolated z-ordering group created by properties such as positioned elements with `z-index`, `transform`, or `opacity`. A child cannot escape its parent context, so raising its `z-index` may not place it above another context."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/css/css-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "CSS"
    link: /frontend-interview-questions/css/
  - label: "How do stacking contexts work?"
prev:
  text: "What is the document outline?"
  link: "/frontend-interview-questions/html/html-question-4"
next:
  text: "When do you use a Server Component versus a Client Component?"
  link: "/frontend-interview-questions/next-js/next-js-question-4"
---
# How do stacking contexts work?

## Answer

A stacking context is an isolated z-ordering group created by properties such as positioned elements with `z-index`, `transform`, or `opacity`. A child cannot escape its parent context, so raising its `z-index` may not place it above another context.

## Why this matters

The important idea behind **How do stacking contexts work** is not the terminology alone; it is the engineering decision the concept enables. CSS is a cascade-based layout system. Robust styles keep specificity low, make layout constraints explicit, and let components adapt to their available space instead of a fixed device list. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a medium-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: A stacking context is an isolated z-ordering group created by properties such as positioned elements with `z-index`, `transform`, or `opacity`. A child cannot escape its parent context, so raising its `z-index` may not place it above another context. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do stacking contexts work**, not from a memorized checklist.

## Worked example

Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects. In this Frontend example, the team needs to make a decision specifically about **How do stacking contexts work**. They begin with the rule above—A stacking context is an isolated z-ordering group created by properties such as positioned elements with `z-index`, `transform`, or `opacity`. A child cannot escape its parent context, so raising its `z-index` may not place it above another context. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: A stacking context is an isolated z-ordering group created by properties such as positioned elements with `z-index`, `transform`, or `opacity`. A child cannot escape its parent context, so raising its `z-index` may not place it above another context. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```css
/* How do stacking contexts work? | frontend-how-do-stacking-contexts-work */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
```

This grid responds to available container width without relying on device-specific breakpoints.
