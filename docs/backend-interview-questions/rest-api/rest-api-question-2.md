---
layout: doc
question: true
title: "How do you choose HTTP methods?"
questionTitle: "How do you choose HTTP methods?"
description: "Learn How do you choose HTTP methods? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: easy
experienceLevel: junior
tags: ["backend", "rest-api"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use GET for safe reads, POST for non-idempotent creation or actions, PUT for full replacement, PATCH for partial updates, and DELETE for removal. Method semantics affect caching, retries, and client expectations."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/rest-api/rest-api-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "REST API"
    link: /backend-interview-questions/rest-api/
  - label: "How do you choose HTTP methods?"
prev:
  text: "How do Python generators work?"
  link: "/backend-interview-questions/python/python-question-2"
next:
  text: "How does GraphQL differ from REST?"
  link: "/backend-interview-questions/graphql/graphql-question-2"
---
# How do you choose HTTP methods?

## Answer

Use GET for safe reads, POST for non-idempotent creation or actions, PUT for full replacement, PATCH for partial updates, and DELETE for removal. Method semantics affect caching, retries, and client expectations.

## Example

Consider a production REST API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
