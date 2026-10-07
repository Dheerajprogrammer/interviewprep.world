---
layout: doc
question: true
title: "What is the saga pattern?"
questionTitle: "What is the saga pattern?"
description: "Learn What is the saga pattern? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "microservices"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A saga coordinates a multi-service business process as a sequence of local transactions with compensating actions when a later step fails. It can be orchestrated centrally or choreographed through events, each with different visibility and coupling trade-offs."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/microservices/microservices-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Microservices"
    link: /architecture-interview-questions/microservices/
  - label: "What is the saga pattern?"
prev:
  text: "What is dependency injection?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-5"
next:
  text: "How do you handle clock skew?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-6"
---
# What is the saga pattern?

## Answer

A saga coordinates a multi-service business process as a sequence of local transactions with compensating actions when a later step fails. It can be orchestrated centrally or choreographed through events, each with different visibility and coupling trade-offs.

## Example

Consider a production microservices change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
