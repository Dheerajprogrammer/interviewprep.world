---
layout: doc
question: true
title: "What is the strategy pattern?"
questionTitle: "What is the strategy pattern?"
description: "Learn What is the strategy pattern? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The strategy pattern encapsulates interchangeable algorithms behind one interface and selects one at runtime. It is useful when behavior varies independently and a growing conditional would obscure responsibility."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is the strategy pattern?"
prev:
  text: "Why is `eval` dangerous?"
  link: "/javascript-interview-questions/security/security-question-6"
next:
  text: "How do you implement `Array.prototype.map`?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-6"
---
# What is the strategy pattern?

## Answer

The strategy pattern encapsulates interchangeable algorithms behind one interface and selects one at runtime. It is useful when behavior varies independently and a growing conditional would obscure responsibility.

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
