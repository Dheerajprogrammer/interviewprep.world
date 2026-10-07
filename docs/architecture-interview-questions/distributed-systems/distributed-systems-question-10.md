---
layout: doc
question: true
title: "How do you design for partial failure?"
questionTitle: "How do you design for partial failure?"
description: "Learn How do you design for partial failure? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "distributed-systems"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Assume any dependency can be slow or unavailable: set timeouts, limit concurrency, isolate failures, provide fallbacks, use circuit breaking where justified, and expose degraded state rather than waiting indefinitely."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/distributed-systems/distributed-systems-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Distributed Systems"
    link: /architecture-interview-questions/distributed-systems/
  - label: "How do you design for partial failure?"
prev:
  text: "What are common microservices failure modes?"
  link: "/architecture-interview-questions/microservices/microservices-question-10"
next:
  text: "How do you evolve an API without breaking clients?"
  link: "/architecture-interview-questions/api-design/api-design-question-10"
---
# How do you design for partial failure?

## Answer

Assume any dependency can be slow or unavailable: set timeouts, limit concurrency, isolate failures, provide fallbacks, use circuit breaking where justified, and expose degraded state rather than waiting indefinitely.

## Example

Consider a production distributed systems change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
