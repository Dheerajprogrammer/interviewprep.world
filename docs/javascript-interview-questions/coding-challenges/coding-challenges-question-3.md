---
layout: doc
question: true
title: "How do you implement deep clone?"
questionTitle: "How do you implement deep clone?"
description: "Learn How do you implement deep clone? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `structuredClone` when its supported types meet the requirement; otherwise define the exact value types to support and copy recursively while tracking cycles. JSON serialization is not a general deep clone because it loses many JavaScript values."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/coding-challenges/coding-challenges-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Coding Challenges"
    link: /javascript-interview-questions/coding-challenges/
  - label: "How do you implement deep clone?"
prev:
  text: "What is the pub/sub pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-3"
next:
  text: "What is hoisting in JavaScript?"
  link: "/javascript-interview-questions/basics/basics-question-4"
---
# How do you implement deep clone?

## Answer

Use `structuredClone` when its supported types meet the requirement; otherwise define the exact value types to support and copy recursively while tracking cycles. JSON serialization is not a general deep clone because it loses many JavaScript values.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
