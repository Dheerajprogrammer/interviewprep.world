---
layout: doc
question: true
title: "When should you embed versus reference documents?"
questionTitle: "When should you embed versus reference documents?"
description: "Learn When should you embed versus reference documents? with answers, examples, and real interview scenarios for Database interviews."
difficulty: easy
experienceLevel: junior
tags: ["database", "mongodb"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "MongoDB stores flexible BSON documents and is most effective when documents mirror the data retrieved together. Model for access patterns, index every important query, and use transactions only where cross-document consistency is required."
outline: deep
canonical: "https://interviewprep.world/database-interview-questions/mongodb/mongodb-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Database"
    link: /database-interview-questions/
  - label: "MongoDB"
    link: /database-interview-questions/mongodb/
  - label: "When should you embed versus reference documents?"
prev:
  text: "What is MVCC in PostgreSQL?"
  link: "/database-interview-questions/postgresql/postgresql-question-2"
next:
  text: "What data structures does Redis provide?"
  link: "/database-interview-questions/redis/redis-question-2"
---
# When should you embed versus reference documents?

## Answer

MongoDB stores flexible BSON documents and is most effective when documents mirror the data retrieved together. Model for access patterns, index every important query, and use transactions only where cross-document consistency is required.

## Example

Consider a production MongoDB change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
