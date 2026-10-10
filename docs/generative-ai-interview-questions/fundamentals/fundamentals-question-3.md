---
layout: doc
question: true
title: "What are tokens and tokenization?"
questionTitle: "What are tokens and tokenization?"
description: "Learn What are tokens and tokenization? with answers, examples, and real interview scenarios for Generative AI interviews."
difficulty: medium
experienceLevel: mid
tags: ["generative-ai", "fundamentals"]
updated: 2026-10-10
readingMinutes: 5
answerExcerpt: "Tokens are the units a model reads and writes, often representing words, word fragments, punctuation, or bytes. Tokenization maps text to numeric token IDs, so token count—not character count—drives context usage, latency, and often API cost."
outline: deep
canonical: "https://interviewprep.world/generative-ai-interview-questions/fundamentals/fundamentals-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Generative AI"
    link: /generative-ai-interview-questions/
  - label: "Generative AI Fundamentals"
    link: /generative-ai-interview-questions/fundamentals/
  - label: "What are tokens and tokenization?"
prev:
  text: "How do you evaluate an LLM application?"
  link: "/generative-ai-interview-questions/safety-evaluation/safety-evaluation-question-2"
next:
  text: "What is few-shot prompting?"
  link: "/generative-ai-interview-questions/prompting/prompting-question-3"
---
# What are tokens and tokenization?

## Answer

Tokens are the units a model reads and writes, often representing words, word fragments, punctuation, or bytes. Tokenization maps text to numeric token IDs, so token count—not character count—drives context usage, latency, and often API cost.

## Why this matters

The important idea behind **What are tokens and tokenization** is not the terminology alone; it is the engineering decision the concept enables. Generative AI systems combine learned probabilistic models with deterministic application code. A strong answer separates model behavior from product guarantees and explains tokens, context, decoding, latency, and failure modes in observable terms. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a medium-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Tokens are the units a model reads and writes, often representing words, word fragments, punctuation, or bytes. Tokenization maps text to numeric token IDs, so token count—not character count—drives context usage, latency, and often API cost. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **What are tokens and tokenization**, not from a memorized checklist.

## Worked example

Suppose an analytics screen must process a larger data set while remaining understandable, accessible, and observable. In this Generative AI example, the team needs to make a decision specifically about **What are tokens and tokenization**. They begin with the rule above—Tokens are the units a model reads and writes, often representing words, word fragments, punctuation, or bytes. Tokenization maps text to numeric token IDs, so token count—not character count—drives context usage, latency, and often API cost. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Tokens are the units a model reads and writes, often representing words, word fragments, punctuation, or bytes. Tokenization maps text to numeric token IDs, so token count—not character count—drives context usage, latency, and often API cost. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```python
# What are tokens and tokenization?
# Tokens are the units a model reads and writes, often representing words, word fragments, punctuation, or bytes. Tokenization maps text to numeric token IDs, so token count—not character count—drives context usage, latency, and often API cost.
# Example ID: generative-ai-what-are-tokens-and-tokenization
text = "Retrieval-augmented generation"
token_ids = tokenizer.encode(text)
print(token_ids)
print("token count:", len(token_ids))
print(tokenizer.decode(token_ids))
```

This Python-style example demonstrates the implementation boundary for the generative AI fundamentals topic; replace the placeholder client, model, or index with the library used by your application.
