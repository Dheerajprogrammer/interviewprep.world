---
layout: doc
question: true
title: "What is cross-site scripting (XSS)?"
questionTitle: "What is cross-site scripting (XSS)?"
description: "Learn What is cross-site scripting (XSS)? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "What is cross-site scripting (XSS)?"
prev:
  text: "What is throttling?"
  link: "/javascript-interview-questions/performance/performance-question-3"
next:
  text: "What is the pub/sub pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-3"
---
# What is cross-site scripting (XSS)?

## Answer

XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy.

## Why this matters

The important idea behind **What is cross-site scripting (XSS)** is not the terminology alone; it is the engineering decision the concept enables. Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What is cross-site scripting (XSS)**, not from a memorized checklist.

## Worked example

Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects. In this JavaScript example, the team needs to make a decision specifically about **What is cross-site scripting (XSS)**. They begin with the rule above—XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```js
// What is cross-site scripting (XSS)?
const example = {
  id: "javascript-what-is-cross-site-scripting-xss",
  input: 0,
  rule: "XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy.",
  evaluate(value) {
    return { value, type: typeof value, truthy: Boolean(value) }
  },
}

console.log(example.evaluate(example.input))
```

Run this JavaScript example in a browser console or Node.js and change the input to explore the rule from this question.
