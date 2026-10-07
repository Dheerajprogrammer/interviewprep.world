---
layout: doc
question: true
title: "What is immutability and why does it matter?"
questionTitle: "What is immutability and why does it matter?"
description: "Learn What is immutability and why does it matter? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Immutability means representing changes by creating new values instead of mutating existing ones. It makes state transitions easier to reason about, enables reliable equality checks, and reduces accidental shared-state bugs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is immutability and why does it matter?"
prev:
  text: "What is Content Security Policy?"
  link: "/javascript-interview-questions/security/security-question-9"
next:
  text: "How do you compare two objects deeply?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-9"
---
# What is immutability and why does it matter?

## Answer

Immutability means representing changes by creating new values instead of mutating existing ones. It makes state transitions easier to reason about, enables reliable equality checks, and reduces accidental shared-state bugs.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
