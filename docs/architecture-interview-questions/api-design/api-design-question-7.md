---
layout: doc
question: true
title: "How do you design an idempotent write API?"
questionTitle: "How do you design an idempotent write API?"
description: "Learn How do you design an idempotent write API? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "api-design"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Accept an idempotency key for retryable create or payment-like operations, persist the key with the outcome, and return the original result for a duplicate request. Define the key scope and retention period so retries cannot create duplicate side effects."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/api-design/api-design-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "API Design"
    link: /architecture-interview-questions/api-design/
  - label: "How do you design an idempotent write API?"
prev:
  text: "What is a quorum?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-7"
next:
  text: "What is the repository pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-7"
---
# How do you design an idempotent write API?

## Answer

Accept an idempotency key for retryable create or payment-like operations, persist the key with the outcome, and return the original result for a duplicate request. Define the key scope and retention period so retries cannot create duplicate side effects.

## Example

Consider a production API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
