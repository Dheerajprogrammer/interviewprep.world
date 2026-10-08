---
layout: doc
question: true
title: "Where should state live in a React application?"
questionTitle: "Where should state live in a React application?"
description: "Learn Where should state live in a React application? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 5
answerExcerpt: "Keep state in the lowest common owner that needs to coordinate it. Local component state is the default; lift it only when siblings need the same source of truth, and use a shared store only when ownership crosses meaningful feature boundaries."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "Where should state live in a React application?"
prev:
  text: "Explain the useEffect Hook"
  link: "/react-interview-questions/hooks/use-effect"
next:
  text: "How do you diagnose unnecessary React re-renders?"
  link: "/react-interview-questions/performance/performance-question-1"
---
# Where should state live in a React application?

## Answer

Keep state in the lowest common owner that needs to coordinate it. Local component state is the default; lift it only when siblings need the same source of truth, and use a shared store only when ownership crosses meaningful feature boundaries.

## Why this matters

The important idea behind **Where should state live in a React application** is not the terminology alone; it is the engineering decision the concept enables. Keep state close to the components that need it and store the minimum source of truth. Derive values during render where possible, update immutably, and model pending, successful, and failed async states distinctly. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Keep state in the lowest common owner that needs to coordinate it. Local component state is the default; lift it only when siblings need the same source of truth, and use a shared store only when ownership crosses meaningful feature boundaries. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **Where should state live in a React application**, not from a memorized checklist.

## Worked example

Consider a deployment pipeline where a small configuration error can affect many users and rollback must be predictable. In this React example, the team needs to make a decision specifically about **Where should state live in a React application**. They begin with the rule above—Keep state in the lowest common owner that needs to coordinate it. Local component state is the default; lift it only when siblings need the same source of truth, and use a shared store only when ownership crosses meaningful feature boundaries. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Keep state in the lowest common owner that needs to coordinate it. Local component state is the default; lift it only when siblings need the same source of truth, and use a shared store only when ownership crosses meaningful feature boundaries. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```jsx
// Where should state live in a React application?
// Section: React state
function CartPage() {
  const [items, setItems] = useState([])
  return <><Cart items={items} /><AddItem onAdd={item => setItems(x => [...x, item])} /></>
}
```

This example demonstrates the React behavior discussed in the answer and can be adapted directly in a component or route.
