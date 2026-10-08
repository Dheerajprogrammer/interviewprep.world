---
layout: doc
question: true
title: "How do dynamic routes work in Next.js?"
questionTitle: "How do dynamic routes work in Next.js?"
description: "Learn How do dynamic routes work in Next.js? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Folders such as `[id]` create a parameterized route, while `[...slug]` captures multiple segments. Validate route parameters before using them and return `notFound()` or a controlled error for invalid resources."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "How do dynamic routes work in Next.js?"
prev:
  text: "What are CSS custom properties?"
  link: "/frontend-interview-questions/css/css-question-7"
next:
  text: "What is middleware?"
  link: "/frontend-interview-questions/redux/redux-question-7"
---
# How do dynamic routes work in Next.js?

## Answer

Folders such as `[id]` create a parameterized route, while `[...slug]` captures multiple segments. Validate route parameters before using them and return `notFound()` or a controlled error for invalid resources.

## Why this matters

The important idea behind **How do dynamic routes work in Next.js** is not the terminology alone; it is the engineering decision the concept enables. Next.js lets a route choose a server-first rendering and caching strategy while preserving React’s component model. Keep client boundaries small and make cache invalidation part of every mutation design. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Folders such as `[id]` create a parameterized route, while `[...slug]` captures multiple segments. Validate route parameters before using them and return `notFound()` or a controlled error for invalid resources. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do dynamic routes work in Next.js**, not from a memorized checklist.

## Worked example

Consider a team adding a new capability to a multi-tenant SaaS dashboard without disrupting existing customers. In this Frontend example, the team needs to make a decision specifically about **How do dynamic routes work in Next.js**. They begin with the rule above—Folders such as `[id]` create a parameterized route, while `[...slug]` captures multiple segments. Validate route parameters before using them and return `notFound()` or a controlled error for invalid resources. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Folders such as `[id]` create a parameterized route, while `[...slug]` captures multiple segments. Validate route parameters before using them and return `notFound()` or a controlled error for invalid resources. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```tsx
// How do dynamic routes work in Next.js? | frontend-how-do-dynamic-routes-work-in-next-js
// app/products/[id]/page.tsx
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  return <h1>{product.name}</h1>
}
```

A Server Component can fetch data close to the route without shipping that data-access code to the browser.
