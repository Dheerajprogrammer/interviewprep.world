---
layout: doc
question: true
title: "What is the adapter pattern?"
questionTitle: "What is the adapter pattern?"
description: "Learn What is the adapter pattern? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An adapter translates one interface into another expected by a caller. It isolates third-party, legacy, or transport-specific code so the rest of the system depends on a stable internal contract."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is the adapter pattern?"
prev:
  text: "How should sensitive data be stored in the browser?"
  link: "/javascript-interview-questions/security/security-question-7"
next:
  text: "How do you implement a Promise pool with concurrency limits?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-7"
---
# What is the adapter pattern?

## Answer

An adapter translates one interface into another expected by a caller. It isolates third-party, legacy, or transport-specific code so the rest of the system depends on a stable internal contract.

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
