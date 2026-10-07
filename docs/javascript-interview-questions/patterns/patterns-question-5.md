---
layout: doc
question: true
title: "What is the singleton pattern and its trade-offs?"
questionTitle: "What is the singleton pattern and its trade-offs?"
description: "Learn What is the singleton pattern and its trade-offs? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A singleton ensures one shared instance, often for configuration or a connection manager. It can hide dependencies and create global mutable state, so prefer explicit injection unless one process-wide instance is truly required."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is the singleton pattern and its trade-offs?"
prev:
  text: "What is CSRF and how can it be mitigated?"
  link: "/javascript-interview-questions/security/security-question-5"
next:
  text: "How do you find duplicate values in an array?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-5"
---
# What is the singleton pattern and its trade-offs?

## Answer

A singleton ensures one shared instance, often for configuration or a connection manager. It can hide dependencies and create global mutable state, so prefer explicit injection unless one process-wide instance is truly required.

## Example

```js
function createApiClient(fetcher) {
  return { getUser: id => fetcher(`/users/${id}`) }
}
const api = createApiClient(fetch)
```

Injecting `fetcher` keeps the client small and makes it easy to test with a fake.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
