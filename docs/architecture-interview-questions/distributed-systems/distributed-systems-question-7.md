---
layout: doc
question: true
title: "What is a quorum?"
questionTitle: "What is a quorum?"
description: "Learn What is a quorum? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "distributed-systems"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A quorum is enough replicas participating in a read or write to guarantee overlap with another quorum. For replication factor N, choose read and write sizes so R plus W is greater than N when strong overlap is required."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/distributed-systems/distributed-systems-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Distributed Systems"
    link: /architecture-interview-questions/distributed-systems/
  - label: "What is a quorum?"
prev:
  text: "How do you deploy microservices safely?"
  link: "/architecture-interview-questions/microservices/microservices-question-7"
next:
  text: "How do you design an idempotent write API?"
  link: "/architecture-interview-questions/api-design/api-design-question-7"
---
# What is a quorum?

## Answer

A quorum is enough replicas participating in a read or write to guarantee overlap with another quorum. For replication factor N, choose read and write sizes so R plus W is greater than N when strong overlap is required.

## Example

Consider a production distributed systems change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
