---
layout: doc
question: true
title: "How do transactions work?"
questionTitle: "How do transactions work?"
description: "Learn How do transactions work? with answers, examples, and real interview scenarios for Database interviews."
difficulty: medium
experienceLevel: mid
tags: ["database", "sql"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "SQL is a declarative language for querying and changing relational data. Correctness starts with joins, constraints, and transactions; performance comes from inspecting real query plans and indexing the access pattern."
outline: deep
canonical: "https://interviewprep.world/database-interview-questions/sql/sql-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Database"
    link: /database-interview-questions/
  - label: "SQL"
    link: /database-interview-questions/sql/
  - label: "How do transactions work?"
prev:
  text: "How do cache-aside and write-through caching differ?"
  link: "/database-interview-questions/redis/redis-question-4"
next:
  text: "How do you use EXPLAIN ANALYZE?"
  link: "/database-interview-questions/postgresql/postgresql-question-5"
---
# How do transactions work?

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
