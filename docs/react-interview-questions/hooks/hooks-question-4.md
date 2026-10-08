---
layout: doc
question: true
title: "What is the difference between `useEffect` and `useLayoutEffect`?"
questionTitle: "What is the difference between `useEffect` and `useLayoutEffect`?"
description: "Learn What is the difference between `useEffect` and `useLayoutEffect`? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "`useEffect` runs after the browser paints, while `useLayoutEffect` runs after DOM changes but before paint. Use layout effects only when reading layout or synchronously preventing visual flicker; they can delay rendering."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "What is the difference between `useEffect` and `useLayoutEffect`?"
prev:
  text: "What is JSX?"
  link: "/react-interview-questions/basics/basics-question-4"
next:
  text: "How do you update nested state immutably?"
  link: "/react-interview-questions/state-management/state-management-question-4"
---
# What is the difference between `useEffect` and `useLayoutEffect`?

## Answer

`useEffect` runs after the browser paints, while `useLayoutEffect` runs after DOM changes but before paint. Use layout effects only when reading layout or synchronously preventing visual flicker; they can delay rendering.

## Why this matters

The important idea behind **What is the difference between useEffect and useLayoutEffect** is not the terminology alone; it is the engineering decision the concept enables. Hooks let function components use state, effects, and reusable stateful logic. Call them unconditionally at the top level, keep dependencies accurate, and clean up subscriptions or timers created by effects. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Do not stop after listing definitions. Compare the alternatives along the dimensions that change an engineering decision: ownership, lifetime, failure behaviour, performance cost, and the conditions under which each option is the safer choice. For a medium-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: `useEffect` runs after the browser paints, while `useLayoutEffect` runs after DOM changes but before paint. Use layout effects only when reading layout or synchronously preventing visual flicker; they can delay rendering. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What is the difference between useEffect and useLayoutEffect**, not from a memorized checklist.

## Worked example

Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly. In this React example, the team needs to make a decision specifically about **What is the difference between useEffect and useLayoutEffect**. They begin with the rule above—`useEffect` runs after the browser paints, while `useLayoutEffect` runs after DOM changes but before paint. Use layout effects only when reading layout or synchronously preventing visual flicker; they can delay rendering. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: `useEffect` runs after the browser paints, while `useLayoutEffect` runs after DOM changes but before paint. Use layout effects only when reading layout or synchronously preventing visual flicker; they can delay rendering. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```jsx
// What is the difference between useEffect and useLayoutEffect?
// Section: React hooks
useLayoutEffect(() => {
  const { height } = ref.current.getBoundingClientRect()
  setTooltipY(height) // measured before paint, avoiding a visible jump
}, [])
```

This example demonstrates the React behavior discussed in the answer and can be adapted directly in a component or route.
