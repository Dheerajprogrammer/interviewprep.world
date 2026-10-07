---
layout: doc
question: true
title: "What is the repository pattern?"
questionTitle: "What is the repository pattern?"
description: "Learn What is the repository pattern? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A repository presents a collection-like domain interface over persistence, hiding query and storage details. It is valuable when it protects domain code from infrastructure coupling, not when it merely wraps every ORM call."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "What is the repository pattern?"
prev:
  text: "How do you design an idempotent write API?"
  link: "/architecture-interview-questions/api-design/api-design-question-7"
next:
  text: "How do you observe a microservices system?"
  link: "/architecture-interview-questions/microservices/microservices-question-8"
---
# What is the repository pattern?

## Answer

A repository presents a collection-like domain interface over persistence, hiding query and storage details. It is valuable when it protects domain code from infrastructure coupling, not when it merely wraps every ORM call.

## Example

Consider a production design patterns change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
