---
layout: doc
question: true
title: "What is the factory pattern?"
questionTitle: "What is the factory pattern?"
description: "Learn What is the factory pattern? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A factory centralizes creation of objects or services so callers depend on a stable abstraction rather than construction details. Use it when creation varies or dependencies need wiring; avoid it for a single trivial constructor."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is the factory pattern?"
prev:
  text: "How do you prevent XSS in a web application?"
  link: "/javascript-interview-questions/security/security-question-4"
next:
  text: "How do you group an array of objects by a key?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-4"
---
# What is the factory pattern?

## Answer

A factory centralizes creation of objects or services so callers depend on a stable abstraction rather than construction details. Use it when creation varies or dependencies need wiring; avoid it for a single trivial constructor.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
