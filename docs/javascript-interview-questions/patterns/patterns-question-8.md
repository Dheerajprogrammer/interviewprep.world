---
layout: doc
question: true
title: "What is dependency injection in JavaScript?"
questionTitle: "What is dependency injection in JavaScript?"
description: "Learn What is dependency injection in JavaScript? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Dependency injection supplies collaborators such as HTTP clients, clocks, or repositories from outside a function or class rather than constructing them inside. It makes dependencies explicit and enables simple tests with fakes."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is dependency injection in JavaScript?"
prev:
  text: "What are secure cookie attributes?"
  link: "/javascript-interview-questions/security/security-question-8"
next:
  text: "How do you write a memoize function?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-8"
---
# What is dependency injection in JavaScript?

## Answer

Dependency injection supplies collaborators such as HTTP clients, clocks, or repositories from outside a function or class rather than constructing them inside. It makes dependencies explicit and enables simple tests with fakes.

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
