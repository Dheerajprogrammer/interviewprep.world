---
layout: doc
question: true
title: "Build a reusable modal component."
questionTitle: "Build a reusable modal component."
description: "Learn Build a reusable modal component. with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Render the dialog in a portal, move focus into it, trap Tab navigation, close on Escape when appropriate, restore trigger focus, and expose an accessible name. Treat background content as inert while the dialog is open."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/coding-challenges/coding-challenges-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Coding Challenges"
    link: /react-interview-questions/coding-challenges/
  - label: "Build a reusable modal component."
prev:
  text: "How do you design reusable components?"
  link: "/react-interview-questions/architecture/architecture-question-3"
next:
  text: "What is JSX?"
  link: "/react-interview-questions/basics/basics-question-4"
---
# Build a reusable modal component.

## Answer

Render the dialog in a portal, move focus into it, trap Tab navigation, close on Escape when appropriate, restore trigger focus, and expose an accessible name. Treat background content as inert while the dialog is open.

## Why this matters

The important idea behind **Build a reusable modal component** is not the terminology alone; it is the engineering decision the concept enables. In a React exercise, identify state, events, async boundaries, and accessibility needs before writing JSX. Build the smallest working interaction first, then address loading, errors, and component reuse. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Render the dialog in a portal, move focus into it, trap Tab navigation, close on Escape when appropriate, restore trigger focus, and expose an accessible name. Treat background content as inert while the dialog is open. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **Build a reusable modal component**, not from a memorized checklist.

## Worked example

Consider a deployment pipeline where a small configuration error can affect many users and rollback must be predictable. In this React example, the team needs to make a decision specifically about **Build a reusable modal component**. They begin with the rule above—Render the dialog in a portal, move focus into it, trap Tab navigation, close on Escape when appropriate, restore trigger focus, and expose an accessible name. Treat background content as inert while the dialog is open. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Render the dialog in a portal, move focus into it, trap Tab navigation, close on Escape when appropriate, restore trigger focus, and expose an accessible name. Treat background content as inert while the dialog is open. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```jsx
// Build a reusable modal component.
function Modal({ title, children, onClose }) { return createPortal(<div role="dialog" aria-modal="true" aria-label={title}><button onClick={onClose}>Close</button>{children}</div>, document.body) }
```

This JSX example is scoped to the React coding concept described in the answer.
