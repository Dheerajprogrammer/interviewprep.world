---
layout: doc
question: true
title: "What is the CAP theorem?"
questionTitle: "What is the CAP theorem?"
description: "Learn What is the CAP theorem? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "distributed-systems"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "During a network partition, a distributed data system must choose between always returning a consistent result and remaining available to every request. CAP is about partition-time trade-offs, not a claim that only two qualities ever matter."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/distributed-systems/distributed-systems-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Distributed Systems"
    link: /architecture-interview-questions/distributed-systems/
  - label: "What is the CAP theorem?"
prev:
  text: "When should you choose microservices over a monolith?"
  link: "/architecture-interview-questions/microservices/microservices-question-2"
next:
  text: "How do you model an API resource?"
  link: "/architecture-interview-questions/api-design/api-design-question-2"
---
# What is the CAP theorem?

## Answer

During a network partition, a distributed data system must choose between always returning a consistent result and remaining available to every request. CAP is about partition-time trade-offs, not a claim that only two qualities ever matter.

## Example

Consider a production distributed systems change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
