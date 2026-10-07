---
layout: doc
question: true
title: "What is immutability in Java?"
questionTitle: "What is immutability in Java?"
description: "Learn What is immutability in Java? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: easy
experienceLevel: junior
tags: ["backend", "java"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An immutable object cannot change after construction: its fields are final, mutable inputs are defensively copied, and no mutating methods are exposed. Immutability simplifies concurrency, caching, and reasoning about shared data."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/java/java-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Java"
    link: /backend-interview-questions/java/
  - label: "What is immutability in Java?"
prev:
  text: "How do you serve static assets securely?"
  link: "/backend-interview-questions/express/express-question-8"
next:
  text: "How do you validate request bodies?"
  link: "/backend-interview-questions/spring-boot/spring-boot-question-8"
---
# What is immutability in Java?

## Answer

An immutable object cannot change after construction: its fields are final, mutable inputs are defensively copied, and no mutating methods are exposed. Immutability simplifies concurrency, caching, and reasoning about shared data.

## Example

Consider a production Java change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
