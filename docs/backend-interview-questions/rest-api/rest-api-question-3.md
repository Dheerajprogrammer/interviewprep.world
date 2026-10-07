---
layout: doc
question: true
title: "What status code should an API return?"
questionTitle: "What status code should an API return?"
description: "Learn What status code should an API return? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: medium
experienceLevel: mid
tags: ["backend", "rest-api"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Return the status that describes the outcome: 2xx for success, 4xx for a client problem, and 5xx for a server failure. Use precise codes such as 201 for creation, 204 for no body, 400 for invalid input, 401 for missing authentication, and 403 for forbidden access."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/rest-api/rest-api-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "REST API"
    link: /backend-interview-questions/rest-api/
  - label: "What status code should an API return?"
prev:
  text: "What is the difference between a list and a tuple?"
  link: "/backend-interview-questions/python/python-question-3"
next:
  text: "What are queries, mutations, and subscriptions?"
  link: "/backend-interview-questions/graphql/graphql-question-3"
---
# What status code should an API return?

## Answer

Return the status that describes the outcome: 2xx for success, 4xx for a client problem, and 5xx for a server failure. Use precise codes such as 201 for creation, 204 for no body, 400 for invalid input, 401 for missing authentication, and 403 for forbidden access.

## Example

Consider a production REST API design change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
