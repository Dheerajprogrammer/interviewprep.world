---
layout: doc
question: true
title: "How do you handle distributed transactions?"
questionTitle: "How do you handle distributed transactions?"
description: "Learn How do you handle distributed transactions? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "microservices"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Avoid cross-service ACID transactions; use local transactions plus durable events and a saga or compensation workflow. Design operations to be idempotent and provide reconciliation for failures and partial completion."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/microservices/microservices-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Microservices"
    link: /architecture-interview-questions/microservices/
  - label: "How do you handle distributed transactions?"
prev:
  text: "What is the adapter pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-4"
next:
  text: "What is leader election?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-5"
---
# How do you handle distributed transactions?

## Answer

Avoid cross-service ACID transactions; use local transactions plus durable events and a saga or compensation workflow. Design operations to be idempotent and provide reconciliation for failures and partial completion.

## Example

Consider a production microservices change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
