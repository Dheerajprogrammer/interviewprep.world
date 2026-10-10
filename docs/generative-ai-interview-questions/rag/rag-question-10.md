---
layout: doc
question: true
title: "When should you use RAG instead of fine-tuning?"
questionTitle: "When should you use RAG instead of fine-tuning?"
description: "Learn When should you use RAG instead of fine-tuning? with answers, examples, and real interview scenarios for Generative AI interviews."
difficulty: hard
experienceLevel: senior
tags: ["generative-ai", "rag"]
updated: 2026-10-10
readingMinutes: 5
answerExcerpt: "Use RAG when knowledge changes frequently, must be cited, or is private to a request. Use fine-tuning when the primary goal is consistent behavior, style, classification, or task format; many systems combine both techniques."
outline: deep
canonical: "https://interviewprep.world/generative-ai-interview-questions/rag/rag-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Generative AI"
    link: /generative-ai-interview-questions/
  - label: "Retrieval-Augmented Generation"
    link: /generative-ai-interview-questions/rag/
  - label: "When should you use RAG instead of fine-tuning?"
prev:
  text: "When should prompting be replaced by code or tools?"
  link: "/generative-ai-interview-questions/prompting/prompting-question-10"
next:
  text: "When should you not use an agent?"
  link: "/generative-ai-interview-questions/agents/agents-question-10"
---
# When should you use RAG instead of fine-tuning?

## Answer

Use RAG when knowledge changes frequently, must be cited, or is private to a request. Use fine-tuning when the primary goal is consistent behavior, style, classification, or task format; many systems combine both techniques.

## Why this matters

The important idea behind **When should you use RAG instead of fine-tuning** is not the terminology alone; it is the engineering decision the concept enables. RAG grounds model responses in retrieved evidence. Its quality depends on ingestion, chunking, indexing, query transformation, retrieval, reranking, context assembly, citation verification, and continuous evaluation. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

Explain the underlying mechanism before discussing benefits. That distinction matters because memorized definitions often fail on follow-up questions about edge cases, lifecycle, performance, or production behaviour. For a hard-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Use RAG when knowledge changes frequently, must be cited, or is private to a request. Use fine-tuning when the primary goal is consistent behavior, style, classification, or task format; many systems combine both techniques. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **When should you use RAG instead of fine-tuning**, not from a memorized checklist.

## Worked example

Imagine a checkout flow that must remain correct while traffic increases and one dependency occasionally responds slowly. In this Generative AI example, the team needs to make a decision specifically about **When should you use RAG instead of fine-tuning**. They begin with the rule above—Use RAG when knowledge changes frequently, must be cited, or is private to a request. Use fine-tuning when the primary goal is consistent behavior, style, classification, or task format; many systems combine both techniques. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Use RAG when knowledge changes frequently, must be cited, or is private to a request. Use fine-tuning when the primary goal is consistent behavior, style, classification, or task format; many systems combine both techniques. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```python
# When should you use RAG instead of fine-tuning?
# Use RAG when knowledge changes frequently, must be cited, or is private to a request. Use fine-tuning when the primary goal is consistent behavior, style, classification, or task format; many systems combine both techniques.
# Example ID: generative-ai-when-should-you-use-rag-instead-of-fine-tuning
strategy = "rag" if requirements.need_fresh_facts or requirements.need_citations else "fine_tuning"
print({"strategy": strategy, "reason": requirements.primary_goal})
```

This Python-style example demonstrates the implementation boundary for the retrieval-augmented generation topic; replace the placeholder client, model, or index with the library used by your application.
