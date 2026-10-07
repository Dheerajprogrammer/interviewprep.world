---
layout: doc
question: true
title: "How do services communicate?"
questionTitle: "How do services communicate?"
description: "Learn How do services communicate? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "microservices"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use synchronous APIs for immediate request-response needs and asynchronous events or queues for decoupled workflows. Define contracts, timeouts, retries, idempotency, ownership, and observability for either choice."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/microservices/microservices-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Microservices"
    link: /architecture-interview-questions/microservices/
  - label: "How do services communicate?"
prev:
  text: "What is the observer pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-2"
next:
  text: "What is eventual consistency?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-3"
---
# How do services communicate?

## Answer

Use synchronous APIs for immediate request-response needs and asynchronous events or queues for decoupled workflows. Define contracts, timeouts, retries, idempotency, ownership, and observability for either choice.

## Example

Consider a production microservices change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
