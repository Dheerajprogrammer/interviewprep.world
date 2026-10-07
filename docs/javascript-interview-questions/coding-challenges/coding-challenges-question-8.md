---
layout: doc
question: true
title: "How do you write a memoize function?"
questionTitle: "How do you write a memoize function?"
description: "Learn How do you write a memoize function? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Cache results in a `Map` keyed by a stable representation of the arguments or by argument identity for object keys. Bound the cache or expose invalidation when inputs are unbounded, and avoid memoizing impure functions."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/coding-challenges/coding-challenges-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Coding Challenges"
    link: /javascript-interview-questions/coding-challenges/
  - label: "How do you write a memoize function?"
prev:
  text: "What is dependency injection in JavaScript?"
  link: "/javascript-interview-questions/patterns/patterns-question-8"
next:
  text: "What makes a value truthy or falsy?"
  link: "/javascript-interview-questions/basics/basics-question-9"
---
# How do you write a memoize function?

## Answer

Cache results in a `Map` keyed by a stable representation of the arguments or by argument identity for object keys. Bound the cache or expose invalidation when inputs are unbounded, and avoid memoizing impure functions.

## Example

```js
function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key]
    ;(groups[value] ??= []).push(item)
    return groups
  }, {})
}
```

This is a linear-time grouping solution and does not mutate the input array.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
