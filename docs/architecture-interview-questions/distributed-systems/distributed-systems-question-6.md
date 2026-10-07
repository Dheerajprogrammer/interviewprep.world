---
layout: doc
question: true
title: "How do you handle clock skew?"
questionTitle: "How do you handle clock skew?"
description: "Learn How do you handle clock skew? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "distributed-systems"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Do not rely on wall-clock time for ordering or correctness across machines; use logical versions, server-assigned sequence numbers, or monotonic clocks. Synchronize clocks for observability but treat timestamps as approximate."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/distributed-systems/distributed-systems-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Distributed Systems"
    link: /architecture-interview-questions/distributed-systems/
  - label: "How do you handle clock skew?"
prev:
  text: "What is the saga pattern?"
  link: "/architecture-interview-questions/microservices/microservices-question-6"
next:
  text: "How do you handle backward compatibility?"
  link: "/architecture-interview-questions/api-design/api-design-question-6"
---
# How do you handle clock skew?

## Answer

Do not rely on wall-clock time for ordering or correctness across machines; use logical versions, server-assigned sequence numbers, or monotonic clocks. Synchronize clocks for observability but treat timestamps as approximate.

## Example

Consider a production distributed systems change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
