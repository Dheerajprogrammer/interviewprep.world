---
layout: doc
question: true
title: "When should you use `requestAnimationFrame`?"
questionTitle: "When should you use `requestAnimationFrame`?"
description: "Learn When should you use `requestAnimationFrame`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Use `requestAnimationFrame` for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "When should you use `requestAnimationFrame`?"
prev:
  text: "What is a Web Worker?"
  link: "/javascript-interview-questions/dom/dom-question-10"
next:
  text: "How do you validate and sanitize user input?"
  link: "/javascript-interview-questions/security/security-question-10"
---
# When should you use `requestAnimationFrame`?

## Answer

Use `requestAnimationFrame` for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering.

## Why this matters

The important idea behind **When should you use requestAnimationFrame** is not the terminology alone; it is the engineering decision the concept enables. Performance work begins with a measurement: profile the slow interaction, identify the hottest work, and remove or defer it. Avoid optimizing from intuition, especially when it increases complexity or memory use. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Use `requestAnimationFrame` for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **When should you use requestAnimationFrame**, not from a memorized checklist.

## Worked example

Consider a deployment pipeline where a small configuration error can affect many users and rollback must be predictable. In this JavaScript example, the team needs to make a decision specifically about **When should you use requestAnimationFrame**. They begin with the rule above—Use `requestAnimationFrame` for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Use `requestAnimationFrame` for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```js
// When should you use requestAnimationFrame?
const example = {
  id: "javascript-when-should-you-use-requestanimationframe",
  input: 0,
  rule: "Use requestAnimationFrame for visual work that should run before the next repaint, such as updating a transform during animation. It automatically pauses in most background tabs and avoids timer-driven work that is out of sync with rendering.",
  evaluate(value) {
    return { value, type: typeof value, truthy: Boolean(value) }
  },
}

console.log(example.evaluate(example.input))
```

Run this JavaScript example in a browser console or Node.js and change the input to explore the rule from this question.
