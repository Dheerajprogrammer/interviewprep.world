---
layout: doc
question: true
title: "How do you create a REST controller?"
questionTitle: "How do you create a REST controller?"
description: "Learn How do you create a REST controller? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: easy
experienceLevel: junior
tags: ["backend", "spring-boot"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Annotate a class with `@RestController`, map HTTP paths and methods, bind validated request input to DTOs, delegate business logic to services, and return explicit response status and body contracts."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/spring-boot/spring-boot-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Spring Boot"
    link: /backend-interview-questions/spring-boot/
  - label: "How do you create a REST controller?"
prev:
  text: "How does Java garbage collection work?"
  link: "/backend-interview-questions/java/java-question-4"
next:
  text: "How does Python manage memory?"
  link: "/backend-interview-questions/python/python-question-4"
---
# How do you create a REST controller?

## Answer

Annotate a class with `@RestController`, map HTTP paths and methods, bind validated request input to DTOs, delegate business logic to services, and return explicit response status and body contracts.

## Example

Consider a production Spring Boot change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
