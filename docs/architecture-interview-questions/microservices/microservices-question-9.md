---
layout: doc
question: true
title: "How do you manage shared data?"
questionTitle: "How do you manage shared data?"
description: "Learn How do you manage shared data? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "microservices"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/microservices/microservices-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Microservices"
    link: /architecture-interview-questions/microservices/
  - label: "How do you manage shared data?"
prev:
  text: "When is the singleton pattern appropriate?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-8"
next:
  text: "What is the difference between at-least-once and exactly-once delivery?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-9"
---
# How do you manage shared data?

## Answer

Give each service ownership of its data and share facts through APIs or events, creating local read models where needed. Avoid a shared database because it couples schema, deployment, and invariants across services.

## Example

Consider a production microservices change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
