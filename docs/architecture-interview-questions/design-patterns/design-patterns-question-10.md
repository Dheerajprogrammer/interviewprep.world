---
layout: doc
question: true
title: "How do you know when not to use a design pattern?"
questionTitle: "How do you know when not to use a design pattern?"
description: "Learn How do you know when not to use a design pattern? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Do not use a pattern when straightforward code already makes ownership and behavior clear. Add an abstraction only when it removes real duplication, isolates volatility, or improves testability without creating indirection for its own sake."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "How do you know when not to use a design pattern?"
prev:
  text: "How do you evolve an API without breaking clients?"
  link: "/architecture-interview-questions/api-design/api-design-question-10"
---
# How do you know when not to use a design pattern?

## Answer

Do not use a pattern when straightforward code already makes ownership and behavior clear. Add an abstraction only when it removes real duplication, isolates volatility, or improves testability without creating indirection for its own sake.

## Example

Consider a production design patterns change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
