---
layout: doc
question: true
title: "How do you design pagination?"
questionTitle: "How do you design pagination?"
description: "Learn How do you design pagination? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "api-design"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use cursor pagination for large or frequently changing collections, return an opaque next cursor and a bounded page size, and define ordering explicitly. Offset pagination is simpler but can skip or duplicate items as data changes."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/api-design/api-design-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "API Design"
    link: /architecture-interview-questions/api-design/
  - label: "How do you design pagination?"
prev:
  text: "What is leader election?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-5"
next:
  text: "What is dependency injection?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-5"
---
# How do you design pagination?

## Answer

Use cursor pagination for large or frequently changing collections, return an opaque next cursor and a bounded page size, and define ordering explicitly. Offset pagination is simpler but can skip or duplicate items as data changes.

## Example

Consider a production API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
