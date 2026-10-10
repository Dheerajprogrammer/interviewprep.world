---
layout: doc
question: true
title: "How do you defend against prompt injection?"
questionTitle: "How do you defend against prompt injection?"
description: "Learn How do you defend against prompt injection? with answers, examples, and real interview scenarios for Generative AI interviews."
difficulty: medium
experienceLevel: mid
tags: ["generative-ai", "safety-evaluation"]
updated: 2026-10-10
readingMinutes: 5
answerExcerpt: "Treat model inputs and retrieved documents as untrusted, separate them from privileged instructions, restrict tools and data by policy, validate proposed actions, and require confirmation for high-impact operations. No single filter is a complete defense."
outline: deep
canonical: "https://interviewprep.world/generative-ai-interview-questions/safety-evaluation/safety-evaluation-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Generative AI"
    link: /generative-ai-interview-questions/
  - label: "Safety & Evaluation"
    link: /generative-ai-interview-questions/safety-evaluation/
  - label: "How do you defend against prompt injection?"
prev:
  text: "How should tools be designed for agents?"
  link: "/generative-ai-interview-questions/agents/agents-question-4"
next:
  text: "What is temperature in text generation?"
  link: "/generative-ai-interview-questions/fundamentals/fundamentals-question-5"
---
# How do you defend against prompt injection?

## Answer

Treat model inputs and retrieved documents as untrusted, separate them from privileged instructions, restrict tools and data by policy, validate proposed actions, and require confirmation for high-impact operations. No single filter is a complete defense.

## Why this matters

The important idea behind **How do you defend against prompt injection** is not the terminology alone; it is the engineering decision the concept enables. Reliable AI systems are evaluated for task quality, groundedness, safety, latency, and cost. Layered controls, privacy boundaries, monitoring, human escalation, and safe failure behavior are product requirements rather than optional prompt text. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a medium-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Treat model inputs and retrieved documents as untrusted, separate them from privileged instructions, restrict tools and data by policy, validate proposed actions, and require confirmation for high-impact operations. No single filter is a complete defense. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do you defend against prompt injection**, not from a memorized checklist.

## Worked example

Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly. In this Generative AI example, the team needs to make a decision specifically about **How do you defend against prompt injection**. They begin with the rule above—Treat model inputs and retrieved documents as untrusted, separate them from privileged instructions, restrict tools and data by policy, validate proposed actions, and require confirmation for high-impact operations. No single filter is a complete defense. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Treat model inputs and retrieved documents as untrusted, separate them from privileged instructions, restrict tools and data by policy, validate proposed actions, and require confirmation for high-impact operations. No single filter is a complete defense. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```python
# How do you defend against prompt injection?
# Treat model inputs and retrieved documents as untrusted, separate them from privileged instructions, restrict tools and data by policy, validate proposed actions, and require confirmation for high-impact operations. No single filter is a complete defense.
# Example ID: generative-ai-how-do-you-defend-against-prompt-injection
content = retrieve(user_query)  # treat as untrusted
action = model.propose(system=POLICY, data=content, tools=scoped_tools(user))
policy_engine.authorize(user, action)
require_confirmation(action) if action.is_high_impact else execute(action)
```

This Python-style example demonstrates the implementation boundary for the AI safety and evaluation topic; replace the placeholder client, model, or index with the library used by your application.
