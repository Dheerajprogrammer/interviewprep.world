---
layout: doc
question: true
title: "What are queries, mutations, and subscriptions?"
questionTitle: "What are queries, mutations, and subscriptions?"
description: "Learn What are queries, mutations, and subscriptions? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: hard
experienceLevel: senior
tags: ["backend", "graphql"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Queries read data, mutations change data, and subscriptions stream server events to connected clients. Each should have clear authorization, input validation, error behavior, and operational limits."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/graphql/graphql-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "GraphQL"
    link: /backend-interview-questions/graphql/
  - label: "What are queries, mutations, and subscriptions?"
prev:
  text: "What status code should an API return?"
  link: "/backend-interview-questions/rest-api/rest-api-question-3"
next:
  text: "How do streams work in Node.js?"
  link: "/backend-interview-questions/node-js/node-js-question-4"
---
# What are queries, mutations, and subscriptions?

## Answer

Queries read data, mutations change data, and subscriptions stream server events to connected clients. Each should have clear authorization, input validation, error behavior, and operational limits.

## Example

Consider a production GraphQL change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
