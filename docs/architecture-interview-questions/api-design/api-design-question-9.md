---
layout: doc
question: true
title: "How do you authenticate and authorize an API?"
questionTitle: "How do you authenticate and authorize an API?"
description: "Learn How do you authenticate and authorize an API? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "api-design"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Authenticate the caller with a verified credential, then authorize every action against the resource and tenant context. Use short-lived scoped tokens, server-side policy checks, audit logs, and deny by default."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/api-design/api-design-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "API Design"
    link: /architecture-interview-questions/api-design/
  - label: "How do you authenticate and authorize an API?"
prev:
  text: "What is the difference between at-least-once and exactly-once delivery?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-9"
next:
  text: "How do composition and inheritance differ?"
  link: "/architecture-interview-questions/design-patterns/design-patterns-question-9"
---
# How do you authenticate and authorize an API?

## Answer

Authenticate the caller with a verified credential, then authorize every action against the resource and tenant context. Use short-lived scoped tokens, server-side policy checks, audit logs, and deny by default.

## Example

Consider a production API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
