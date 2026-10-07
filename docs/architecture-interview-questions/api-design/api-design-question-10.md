---
layout: doc
question: true
title: "How do you evolve an API without breaking clients?"
questionTitle: "How do you evolve an API without breaking clients?"
description: "Learn How do you evolve an API without breaking clients? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "api-design"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/api-design/api-design-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "API Design"
    link: /architecture-interview-questions/api-design/
  - label: "How do you evolve an API without breaking clients?"
prev:
  text: "How do you design for partial failure?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-10"
next:
  text: "How do you know when not to use a design pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-10"
---
# How do you evolve an API without breaking clients?

## Answer

Prefer additive, opt-in capabilities; announce deprecations early; measure real client usage; and support old and new behavior during a migration window. Remove old behavior only after clients have a tested replacement.

## Example

Consider a production API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
