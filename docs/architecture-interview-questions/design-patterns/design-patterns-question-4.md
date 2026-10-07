---
layout: doc
question: true
title: "What is the adapter pattern?"
questionTitle: "What is the adapter pattern?"
description: "Learn What is the adapter pattern? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An adapter translates one interface into another expected by a caller. It isolates third-party, legacy, or transport-specific code so the rest of the system depends on a stable internal contract."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "What is the adapter pattern?"
prev:
  text: "How do you version an API contract?"
  link: "/architecture-interview-questions/api-design/api-design-question-4"
next:
  text: "How do you handle distributed transactions?"
  link: "/architecture-interview-questions/microservices/microservices-question-5"
---
# What is the adapter pattern?

## Answer

An adapter translates one interface into another expected by a caller. It isolates third-party, legacy, or transport-specific code so the rest of the system depends on a stable internal contract.

## Example

Consider a production design patterns change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
