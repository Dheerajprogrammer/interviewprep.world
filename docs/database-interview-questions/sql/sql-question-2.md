---
layout: doc
question: true
title: "What is the difference between INNER and LEFT JOIN?"
questionTitle: "What is the difference between INNER and LEFT JOIN?"
description: "Learn What is the difference between INNER and LEFT JOIN? with answers, examples, and real interview scenarios for Database interviews."
difficulty: medium
experienceLevel: mid
tags: ["database", "sql"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "SQL is a declarative language for querying and changing relational data. Correctness starts with joins, constraints, and transactions; performance comes from inspecting real query plans and indexing the access pattern."
outline: deep
canonical: "https://interviewprep.world/database-interview-questions/sql/sql-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Database"
    link: /database-interview-questions/
  - label: "SQL"
    link: /database-interview-questions/sql/
  - label: "What is the difference between INNER and LEFT JOIN?"
prev:
  text: "What is Redis?"
  link: "/database-interview-questions/redis/redis-question-1"
next:
  text: "What is MVCC in PostgreSQL?"
  link: "/database-interview-questions/postgresql/postgresql-question-2"
---
# What is the difference between INNER and LEFT JOIN?

## Answer

SQL is a declarative language for querying and changing relational data. Correctness starts with joins, constraints, and transactions; performance comes from inspecting real query plans and indexing the access pattern.

## Example

Consider a production SQL change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
