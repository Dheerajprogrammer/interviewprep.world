---
layout: doc
question: true
title: "What are secure cookie attributes?"
questionTitle: "What are secure cookie attributes?"
description: "Learn What are secure cookie attributes? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "`Secure` sends cookies only over HTTPS, `HttpOnly` blocks JavaScript access, and `SameSite` limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "What are secure cookie attributes?"
prev:
  text: "What is tree shaking?"
  link: "/javascript-interview-questions/performance/performance-question-8"
next:
  text: "What is dependency injection in JavaScript?"
  link: "/javascript-interview-questions/patterns/patterns-question-8"
---
# What are secure cookie attributes?

## Answer

`Secure` sends cookies only over HTTPS, `HttpOnly` blocks JavaScript access, and `SameSite` limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials.

## Why this matters

The important idea behind **What are secure cookie attributes** is not the terminology alone; it is the engineering decision the concept enables. Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: `Secure` sends cookies only over HTTPS, `HttpOnly` blocks JavaScript access, and `SameSite` limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What are secure cookie attributes**, not from a memorized checklist.

## Worked example

Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly. In this JavaScript example, the team needs to make a decision specifically about **What are secure cookie attributes**. They begin with the rule above—`Secure` sends cookies only over HTTPS, `HttpOnly` blocks JavaScript access, and `SameSite` limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: `Secure` sends cookies only over HTTPS, `HttpOnly` blocks JavaScript access, and `SameSite` limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```js
// What are secure cookie attributes?
const output = document.createElement("pre")
output.dataset.example = "javascript-what-are-secure-cookie-attributes"
output.textContent = "Secure sends cookies only over HTTPS, HttpOnly blocks JavaScript access, and SameSite limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials."
document.body.append(output)

console.assert(output.textContent.length > 0)
```

Run this JavaScript example in a browser console or Node.js and change the input to explore the rule from this question.
