---
layout: doc
question: true
title: "What is a context window?"
questionTitle: "What is a context window?"
description: "Learn What is a context window? with answers, examples, and real interview scenarios for Generative AI interviews."
difficulty: easy
experienceLevel: junior
tags: ["generative-ai", "fundamentals"]
updated: 2026-10-10
readingMinutes: 5
answerExcerpt: "A context window is the maximum number of input and output tokens a model can consider in one request. Applications must budget that space among instructions, conversation history, retrieved evidence, tool results, and the response while preserving the most relevant information."
outline: deep
canonical: "https://interviewprep.world/generative-ai-interview-questions/fundamentals/fundamentals-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Generative AI"
    link: /generative-ai-interview-questions/
  - label: "Generative AI Fundamentals"
    link: /generative-ai-interview-questions/fundamentals/
  - label: "What is a context window?"
prev:
  text: "What is groundedness?"
  link: "/generative-ai-interview-questions/safety-evaluation/safety-evaluation-question-3"
next:
  text: "What is chain-of-thought prompting?"
  link: "/generative-ai-interview-questions/prompting/prompting-question-4"
---
# What is a context window?

## Answer

A context window is the maximum number of input and output tokens a model can consider in one request. Applications must budget that space among instructions, conversation history, retrieved evidence, tool results, and the response while preserving the most relevant information.

## Why this matters

The important idea behind **What is a context window** is not the terminology alone; it is the engineering decision the concept enables. Generative AI systems combine learned probabilistic models with deterministic application code. A strong answer separates model behavior from product guarantees and explains tokens, context, decoding, latency, and failure modes in observable terms. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: A context window is the maximum number of input and output tokens a model can consider in one request. Applications must budget that space among instructions, conversation history, retrieved evidence, tool results, and the response while preserving the most relevant information. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What is a context window**, not from a memorized checklist.

## Worked example

Imagine an API used by both a browser client and a background worker, each with different latency and failure patterns. In this Generative AI example, the team needs to make a decision specifically about **What is a context window**. They begin with the rule above—A context window is the maximum number of input and output tokens a model can consider in one request. Applications must budget that space among instructions, conversation history, retrieved evidence, tool results, and the response while preserving the most relevant information. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: A context window is the maximum number of input and output tokens a model can consider in one request. Applications must budget that space among instructions, conversation history, retrieved evidence, tool results, and the response while preserving the most relevant information. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```python
# What is a context window?
# A context window is the maximum number of input and output tokens a model can consider in one request. Applications must budget that space among instructions, conversation history, retrieved evidence, tool results, and the response while preserving the most relevant information.
# Example ID: generative-ai-what-is-a-context-window
budget = 8192
used = count_tokens(system_prompt + history + retrieved_docs)
max_output_tokens = max(0, budget - used)
assert max_output_tokens >= 500
```

This Python-style example demonstrates the implementation boundary for the generative AI fundamentals topic; replace the placeholder client, model, or index with the library used by your application.
