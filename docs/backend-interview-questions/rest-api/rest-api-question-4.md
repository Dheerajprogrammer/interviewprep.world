---
layout: doc
question: true
title: "How do you design resource URLs?"
questionTitle: "How do you design resource URLs?"
description: "Learn How do you design resource URLs? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: hard
experienceLevel: senior
tags: ["backend", "rest-api"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use plural nouns that identify resources and relationships, such as `/users/{id}/orders`; keep URLs stable and avoid embedding verbs for ordinary CRUD. Put filtering, sorting, and pagination in query parameters."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/rest-api/rest-api-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "REST API"
    link: /backend-interview-questions/rest-api/
  - label: "How do you design resource URLs?"
prev:
  text: "How does Python manage memory?"
  link: "/backend-interview-questions/python/python-question-4"
next:
  text: "How do you design a GraphQL schema?"
  link: "/backend-interview-questions/graphql/graphql-question-4"
---
# How do you design resource URLs?

## Answer

Use plural nouns that identify resources and relationships, such as `/users/{id}/orders`; keep URLs stable and avoid embedding verbs for ordinary CRUD. Put filtering, sorting, and pagination in query parameters.

## Example

Consider a production REST API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
