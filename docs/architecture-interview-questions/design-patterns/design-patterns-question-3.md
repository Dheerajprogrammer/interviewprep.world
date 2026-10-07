---
layout: doc
question: true
title: "What is the factory pattern?"
questionTitle: "What is the factory pattern?"
description: "Learn What is the factory pattern? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A factory centralizes creation of objects or services so callers depend on a stable abstraction rather than construction details. Use it when creation varies or dependencies need wiring; avoid it for a single trivial constructor."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "What is the factory pattern?"
prev:
  text: "How do you design consistent API errors?"
  link: "/architecture-interview-questions/api-design/api-design-question-3"
next:
  text: "How do you define service boundaries?"
  link: "/architecture-interview-questions/microservices/microservices-question-4"
---
# What is the factory pattern?

## Answer

A factory centralizes creation of objects or services so callers depend on a stable abstraction rather than construction details. Use it when creation varies or dependencies need wiring; avoid it for a single trivial constructor.

## Example

Consider a production design patterns change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
