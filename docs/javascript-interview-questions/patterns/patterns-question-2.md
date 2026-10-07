---
layout: doc
question: true
title: "What is the observer pattern?"
questionTitle: "What is the observer pattern?"
description: "Learn What is the observer pattern? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The observer pattern lets subscribers receive change notifications from a subject. Define subscription ownership, error isolation, and cleanup so listeners do not leak or make changes unpredictable."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is the observer pattern?"
prev:
  text: "What is CORS?"
  link: "/javascript-interview-questions/security/security-question-2"
next:
  text: "How do you implement debounce?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-2"
---
# What is the observer pattern?

## Answer

The observer pattern lets subscribers receive change notifications from a subject. Define subscription ownership, error isolation, and cleanup so listeners do not leak or make changes unpredictable.

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
