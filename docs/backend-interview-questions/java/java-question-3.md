---
layout: doc
question: true
title: "What is the difference between an interface and an abstract class?"
questionTitle: "What is the difference between an interface and an abstract class?"
description: "Learn What is the difference between an interface and an abstract class? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: medium
experienceLevel: mid
tags: ["backend", "java"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An interface defines a contract and can provide default methods; an abstract class can hold shared state, constructors, and partial implementation. Use an interface for capability contracts and an abstract class only when subclasses truly share implementation and lifecycle."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/java/java-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Java"
    link: /backend-interview-questions/java/
  - label: "What is the difference between an interface and an abstract class?"
prev:
  text: "How do you structure an Express application?"
  link: "/backend-interview-questions/express/express-question-3"
next:
  text: "What are Spring Boot starters?"
  link: "/backend-interview-questions/spring-boot/spring-boot-question-3"
---
# What is the difference between an interface and an abstract class?

## Answer

An interface defines a contract and can provide default methods; an abstract class can hold shared state, constructors, and partial implementation. Use an interface for capability contracts and an abstract class only when subclasses truly share implementation and lifecycle.

## Example

Consider a production Java change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
