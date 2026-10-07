---
layout: doc
question: true
title: "How do you handle graceful shutdown in Express?"
questionTitle: "How do you handle graceful shutdown in Express?"
description: "Learn How do you handle graceful shutdown in Express? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: medium
experienceLevel: mid
tags: ["backend", "express"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Stop accepting new connections after SIGTERM, allow in-flight requests a bounded time to finish, close database and queue clients, then exit. A readiness check should fail first so load balancers stop sending new traffic."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/express/express-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Express"
    link: /backend-interview-questions/express/
  - label: "How do you handle graceful shutdown in Express?"
prev:
  text: "How do you secure a Node.js application?"
  link: "/backend-interview-questions/node-js/node-js-question-10"
next:
  text: "What are records and sealed classes?"
  link: "/backend-interview-questions/java/java-question-10"
---
# How do you handle graceful shutdown in Express?

## Answer

Stop accepting new connections after SIGTERM, allow in-flight requests a bounded time to finish, close database and queue clients, then exit. A readiness check should fail first so load balancers stop sending new traffic.

## Example

Consider a production Express change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
