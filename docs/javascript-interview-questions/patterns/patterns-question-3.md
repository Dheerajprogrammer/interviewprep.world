---
layout: doc
question: true
title: "What is the pub/sub pattern?"
questionTitle: "What is the pub/sub pattern?"
description: "Learn What is the pub/sub pattern? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Publish/subscribe sends events through a broker or channel so publishers and subscribers do not know each other directly. It improves decoupling but makes ordering, delivery guarantees, and debugging important design concerns."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is the pub/sub pattern?"
prev:
  text: "What is cross-site scripting (XSS)?"
  link: "/javascript-interview-questions/security/security-question-3"
next:
  text: "How do you implement deep clone?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-3"
---
# What is the pub/sub pattern?

## Answer

Publish/subscribe sends events through a broker or channel so publishers and subscribers do not know each other directly. It improves decoupling but makes ordering, delivery guarantees, and debugging important design concerns.

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
