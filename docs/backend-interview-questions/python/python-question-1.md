---
layout: doc
question: true
title: "What are Python decorators?"
questionTitle: "What are Python decorators?"
description: "Learn What are Python decorators? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: medium
experienceLevel: mid
tags: ["backend", "python"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Decorators wrap a function or class to add behavior such as logging, authorization, or registration without changing call sites. Use `functools.wraps` so metadata and debugging remain accurate."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/python/python-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Python"
    link: /backend-interview-questions/python/
  - label: "What are Python decorators?"
prev:
  text: "What is Spring Boot?"
  link: "/backend-interview-questions/spring-boot/spring-boot-question-1"
next:
  text: "What makes an API RESTful?"
  link: "/backend-interview-questions/rest-api/rest-api-question-1"
---
# What are Python decorators?

## Answer

Decorators wrap a function or class to add behavior such as logging, authorization, or registration without changing call sites. Use `functools.wraps` so metadata and debugging remain accurate.

## Example

Consider a production Python change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
