---
layout: doc
question: true
title: "What is the difference between checked and unchecked exceptions?"
questionTitle: "What is the difference between checked and unchecked exceptions?"
description: "Learn What is the difference between checked and unchecked exceptions? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: medium
experienceLevel: mid
tags: ["backend", "java"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Checked exceptions must be declared or handled and represent recoverable conditions in an API; unchecked exceptions extend RuntimeException and usually indicate programming or invariant failures. Use exceptions sparingly and provide actionable context."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/java/java-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Java"
    link: /backend-interview-questions/java/
  - label: "What is the difference between checked and unchecked exceptions?"
prev:
  text: "How do you implement authentication middleware?"
  link: "/backend-interview-questions/express/express-question-6"
next:
  text: "How do you manage configuration profiles?"
  link: "/backend-interview-questions/spring-boot/spring-boot-question-6"
---
# What is the difference between checked and unchecked exceptions?

## Answer

Checked exceptions must be declared or handled and represent recoverable conditions in an API; unchecked exceptions extend RuntimeException and usually indicate programming or invariant failures. Use exceptions sparingly and provide actionable context.

## Example

Consider a production Java change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
