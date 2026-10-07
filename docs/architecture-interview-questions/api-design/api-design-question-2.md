---
layout: doc
question: true
title: "How do you model an API resource?"
questionTitle: "How do you model an API resource?"
description: "Learn How do you model an API resource? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "api-design"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Model a resource around a client-facing business concept with a stable identifier and lifecycle, not a database table. Expose only fields clients need, represent relationships deliberately, and keep transport models separate from persistence models."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/api-design/api-design-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "API Design"
    link: /architecture-interview-questions/api-design/
  - label: "How do you model an API resource?"
prev:
  text: "What is the CAP theorem?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-2"
next:
  text: "What is the observer pattern?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-2"
---
# How do you model an API resource?

## Answer

Model a resource around a client-facing business concept with a stable identifier and lifecycle, not a database table. Expose only fields clients need, represent relationships deliberately, and keep transport models separate from persistence models.

## Example

Consider a production API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
