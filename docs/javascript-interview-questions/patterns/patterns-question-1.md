---
layout: doc
question: true
title: "What is the module pattern?"
questionTitle: "What is the module pattern?"
description: "Learn What is the module pattern? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The module pattern groups private state and public functions inside a closure, exposing only the intended API. Modern ES modules provide the same encapsulation more directly and should be preferred for new code."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is the module pattern?"
prev:
  text: "What is the same-origin policy?"
  link: "/javascript-interview-questions/security/security-question-1"
next:
  text: "How do you flatten a nested array?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-1"
---
# What is the module pattern?

## Answer

The module pattern groups private state and public functions inside a closure, exposing only the intended API. Modern ES modules provide the same encapsulation more directly and should be preferred for new code.

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
