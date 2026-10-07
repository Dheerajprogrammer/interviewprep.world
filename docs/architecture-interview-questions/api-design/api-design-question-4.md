---
layout: doc
question: true
title: "How do you version an API contract?"
questionTitle: "How do you version an API contract?"
description: "Learn How do you version an API contract? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "api-design"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Make additive changes whenever possible; introduce a new version only for breaking behavior or shapes. Publish a migration path, deprecation period, and usage telemetry before removing the older contract."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/api-design/api-design-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "API Design"
    link: /architecture-interview-questions/api-design/
  - label: "How do you version an API contract?"
prev:
  text: "How do you make a distributed operation idempotent?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-4"
next:
  text: "What is the adapter pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-4"
---
# How do you version an API contract?

## Answer

Make additive changes whenever possible; introduce a new version only for breaking behavior or shapes. Publish a migration path, deprecation period, and usage telemetry before removing the older contract.

## Example

Consider a production API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
