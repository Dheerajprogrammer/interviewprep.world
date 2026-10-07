---
layout: doc
question: true
title: "How do worker threads differ from child processes?"
questionTitle: "How do worker threads differ from child processes?"
description: "Learn How do worker threads differ from child processes? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: easy
experienceLevel: junior
tags: ["backend", "node-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Worker threads run JavaScript in separate threads inside one process and can share memory deliberately; child processes are separate OS processes with stronger isolation and IPC. Use workers for CPU-bound tasks and child processes when process isolation is useful."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/node-js/node-js-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Node.js"
    link: /backend-interview-questions/node-js/
  - label: "How do worker threads differ from child processes?"
prev:
  text: "How do DataLoaders work?"
  link: "/backend-interview-questions/graphql/graphql-question-6"
next:
  text: "How do you version an Express API?"
  link: "/backend-interview-questions/express/express-question-7"
---
# How do worker threads differ from child processes?

## Answer

Worker threads run JavaScript in separate threads inside one process and can share memory deliberately; child processes are separate OS processes with stronger isolation and IPC. Use workers for CPU-bound tasks and child processes when process isolation is useful.

## Example

Consider a production Node.js change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
