---
layout: doc
question: true
title: "What are records and sealed classes?"
questionTitle: "What are records and sealed classes?"
description: "Learn What are records and sealed classes? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: hard
experienceLevel: senior
tags: ["backend", "java"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Records are concise immutable data carriers with generated accessors and value methods; sealed classes restrict which types may extend a hierarchy. Together they make closed, data-oriented domain models and exhaustive pattern handling clearer."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/java/java-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Java"
    link: /backend-interview-questions/java/
  - label: "What are records and sealed classes?"
prev:
  text: "How do you handle graceful shutdown in Express?"
  link: "/backend-interview-questions/express/express-question-10"
next:
  text: "How do you secure a Spring Boot API?"
  link: "/backend-interview-questions/spring-boot/spring-boot-question-10"
---
# What are records and sealed classes?

## Answer

Records are concise immutable data carriers with generated accessors and value methods; sealed classes restrict which types may extend a hierarchy. Together they make closed, data-oriented domain models and exhaustive pattern handling clearer.

## Example

Consider a production Java change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
