---
layout: doc
question: true
title: "What is the difference between at-least-once and exactly-once delivery?"
questionTitle: "What is the difference between at-least-once and exactly-once delivery?"
description: "Learn What is the difference between at-least-once and exactly-once delivery? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "distributed-systems"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "At-least-once delivery may duplicate messages, so consumers must deduplicate or be idempotent. Exactly-once is usually an end-to-end semantic built from deduplication and atomic state changes, not a free transport guarantee."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/distributed-systems/distributed-systems-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Distributed Systems"
    link: /architecture-interview-questions/distributed-systems/
  - label: "What is the difference between at-least-once and exactly-once delivery?"
prev:
  text: "How do you manage shared data?"
  link: "/architecture-interview-questions/microservices/microservices-question-9"
next:
  text: "How do you authenticate and authorize an API?"
  link: "/architecture-interview-questions/api-design/api-design-question-9"
---
# What is the difference between at-least-once and exactly-once delivery?

## Answer

At-least-once delivery may duplicate messages, so consumers must deduplicate or be idempotent. Exactly-once is usually an end-to-end semantic built from deduplication and atomic state changes, not a free transport guarantee.

## Example

Consider a production distributed systems change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
