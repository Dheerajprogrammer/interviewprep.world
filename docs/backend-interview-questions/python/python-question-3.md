---
layout: doc
question: true
title: "What is the difference between a list and a tuple?"
questionTitle: "What is the difference between a list and a tuple?"
description: "Learn What is the difference between a list and a tuple? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: easy
experienceLevel: junior
tags: ["backend", "python"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Lists are mutable sequences; tuples are immutable sequences. Use tuples for fixed records or hashable values and lists when a collection must change."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/python/python-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Python"
    link: /backend-interview-questions/python/
  - label: "What is the difference between a list and a tuple?"
prev:
  text: "What are Spring Boot starters?"
  link: "/backend-interview-questions/spring-boot/spring-boot-question-3"
next:
  text: "What status code should an API return?"
  link: "/backend-interview-questions/rest-api/rest-api-question-3"
---
# What is the difference between a list and a tuple?

## Answer

Lists are mutable sequences; tuples are immutable sequences. Use tuples for fixed records or hashable values and lists when a collection must change.

## Example

Consider a production Python change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
