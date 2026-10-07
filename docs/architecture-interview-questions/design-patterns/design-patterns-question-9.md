---
layout: doc
question: true
title: "How do composition and inheritance differ?"
questionTitle: "How do composition and inheritance differ?"
description: "Learn How do composition and inheritance differ? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: hard
experienceLevel: senior
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Composition builds behavior by combining collaborators; inheritance shares behavior through a subtype hierarchy. Composition is usually more flexible and local, while inheritance needs a stable substitutable “is-a” relationship."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "How do composition and inheritance differ?"
prev:
  text: "How do you authenticate and authorize an API?"
  link: "/architecture-interview-questions/api-design/api-design-question-9"
next:
  text: "What are common microservices failure modes?"
  link: "/architecture-interview-questions/microservices/microservices-question-10"
---
# How do composition and inheritance differ?

## Answer

Composition builds behavior by combining collaborators; inheritance shares behavior through a subtype hierarchy. Composition is usually more flexible and local, while inheritance needs a stable substitutable “is-a” relationship.

## Example

Consider a production design patterns change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
