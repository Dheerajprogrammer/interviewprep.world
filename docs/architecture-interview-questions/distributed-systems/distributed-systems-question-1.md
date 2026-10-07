---
layout: doc
question: true
title: "What is a distributed system?"
questionTitle: "What is a distributed system?"
description: "Learn What is a distributed system? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "distributed-systems"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A distributed system coordinates independent computers over a network to provide one service. It must tolerate message delay, loss, duplication, partial failure, and independently changing clocks."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/distributed-systems/distributed-systems-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Distributed Systems"
    link: /architecture-interview-questions/distributed-systems/
  - label: "What is a distributed system?"
prev:
  text: "What are microservices?"
  link: "/architecture-interview-questions/microservices/microservices-question-1"
next:
  text: "What makes an API easy to use?"
  link: "/architecture-interview-questions/api-design/api-design-question-1"
---
# What is a distributed system?

## Answer

A distributed system coordinates independent computers over a network to provide one service. It must tolerate message delay, loss, duplication, partial failure, and independently changing clocks.

## Example

Consider a production distributed systems change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
