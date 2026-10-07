---
layout: doc
question: true
title: "How do you design a reusable API client?"
questionTitle: "How do you design a reusable API client?"
description: "Learn How do you design a reusable API client? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Define a small transport boundary that handles base URL, authentication, serialization, timeouts, errors, and retries consistently, then expose domain-focused methods above it. Make dependencies injectable and keep server response parsing near the boundary."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "How do you design a reusable API client?"
prev:
  text: "How do you validate and sanitize user input?"
  link: "/javascript-interview-questions/security/security-question-10"
next:
  text: "How do you implement an event emitter?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-10"
---
# How do you design a reusable API client?

## Answer

Define a small transport boundary that handles base URL, authentication, serialization, timeouts, errors, and retries consistently, then expose domain-focused methods above it. Make dependencies injectable and keep server response parsing near the boundary.

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
