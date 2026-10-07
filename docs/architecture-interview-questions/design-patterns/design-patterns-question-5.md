---
layout: doc
question: true
title: "What is dependency injection?"
questionTitle: "What is dependency injection?"
description: "Learn What is dependency injection? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Dependency injection supplies collaborators from outside a class or function instead of constructing them internally. It makes dependencies explicit, supports configuration, and allows tests to use controlled fakes."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "What is dependency injection?"
prev:
  text: "How do you design pagination?"
  link: "/architecture-interview-questions/api-design/api-design-question-5"
next:
  text: "What is the saga pattern?"
  link: "/architecture-interview-questions/microservices/microservices-question-6"
---
# What is dependency injection?

## Answer

Dependency injection supplies collaborators from outside a class or function instead of constructing them internally. It makes dependencies explicit, supports configuration, and allows tests to use controlled fakes.

## Example

Consider a production design patterns change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
