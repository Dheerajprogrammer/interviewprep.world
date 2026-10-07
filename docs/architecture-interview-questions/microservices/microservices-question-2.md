---
layout: doc
question: true
title: "When should you choose microservices over a monolith?"
questionTitle: "When should you choose microservices over a monolith?"
description: "Learn When should you choose microservices over a monolith? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "microservices"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Choose them when stable domain and team boundaries, independent scaling, or deployment cadence justify operational cost. Start with a modular monolith when those boundaries are uncertain or the team cannot support distributed operations."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/microservices/microservices-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Microservices"
    link: /architecture-interview-questions/microservices/
  - label: "When should you choose microservices over a monolith?"
prev:
  text: "What is the strategy pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-1"
next:
  text: "What is the CAP theorem?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-2"
---
# When should you choose microservices over a monolith?

## Answer

Choose them when stable domain and team boundaries, independent scaling, or deployment cadence justify operational cost. Start with a modular monolith when those boundaries are uncertain or the team cannot support distributed operations.

## Example

Consider a production microservices change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
