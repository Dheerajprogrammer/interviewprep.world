---
layout: doc
question: true
title: "What is the strategy pattern?"
questionTitle: "What is the strategy pattern?"
description: "Learn What is the strategy pattern? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The strategy pattern encapsulates interchangeable algorithms behind one interface and selects one at runtime. It is useful when behavior varies independently and a growing conditional would obscure responsibility."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "What is the strategy pattern?"
prev:
  text: "What makes an API easy to use?"
  link: "/architecture-interview-questions/api-design/api-design-question-1"
next:
  text: "When should you choose microservices over a monolith?"
  link: "/architecture-interview-questions/microservices/microservices-question-2"
---
# What is the strategy pattern?

## Answer

The strategy pattern encapsulates interchangeable algorithms behind one interface and selects one at runtime. It is useful when behavior varies independently and a growing conditional would obscure responsibility.

## Example

Consider a production design patterns change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
