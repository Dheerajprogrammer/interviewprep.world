---
layout: doc
question: true
title: "How do you design consistent API errors?"
questionTitle: "How do you design consistent API errors?"
description: "Learn How do you design consistent API errors? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "api-design"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use one documented error envelope containing a stable machine-readable code, HTTP status, human-readable message, and field-level details when validation fails. Do not leak stack traces or internal implementation details."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/api-design/api-design-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "API Design"
    link: /architecture-interview-questions/api-design/
  - label: "How do you design consistent API errors?"
prev:
  text: "What is eventual consistency?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-3"
next:
  text: "What is the factory pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-3"
---
# How do you design consistent API errors?

## Answer

Use one documented error envelope containing a stable machine-readable code, HTTP status, human-readable message, and field-level details when validation fails. Do not leak stack traces or internal implementation details.

## Example

Consider a production API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
