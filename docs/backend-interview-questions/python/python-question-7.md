---
layout: doc
question: true
title: "What is the Global Interpreter Lock?"
questionTitle: "What is the Global Interpreter Lock?"
description: "Learn What is the Global Interpreter Lock? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: medium
experienceLevel: mid
tags: ["backend", "python"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "In CPython, the GIL allows only one thread to execute Python bytecode at a time. Threads still help I/O-bound work; use processes, native extensions, or distributed workers for CPU-bound parallelism."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/python/python-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Python"
    link: /backend-interview-questions/python/
  - label: "What is the Global Interpreter Lock?"
prev:
  text: "How do you handle exceptions globally in Spring Boot?"
  link: "/backend-interview-questions/spring-boot/spring-boot-question-7"
next:
  text: "How do you make an API idempotent?"
  link: "/backend-interview-questions/rest-api/rest-api-question-7"
---
# What is the Global Interpreter Lock?

## Answer

In CPython, the GIL allows only one thread to execute Python bytecode at a time. Threads still help I/O-bound work; use processes, native extensions, or distributed workers for CPU-bound parallelism.

## Example

Consider a production Python change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
