---
layout: doc
question: true
title: "How do you compare two objects deeply?"
questionTitle: "How do you compare two objects deeply?"
description: "Learn How do you compare two objects deeply? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "First compare primitives and identity, then compare constructors or supported types, key sets, and recursively compare corresponding values while tracking visited pairs for cycles. Define how dates, maps, sets, functions, and prototypes should be treated."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/coding-challenges/coding-challenges-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Coding Challenges"
    link: /javascript-interview-questions/coding-challenges/
  - label: "How do you compare two objects deeply?"
prev:
  text: "What is immutability and why does it matter?"
  link: "/javascript-interview-questions/patterns/patterns-question-9"
next:
  text: "What is the difference between shallow and deep equality?"
  link: "/javascript-interview-questions/basics/basics-question-10"
---
# How do you compare two objects deeply?

## Answer

First compare primitives and identity, then compare constructors or supported types, key sets, and recursively compare corresponding values while tracking visited pairs for cycles. Define how dates, maps, sets, functions, and prototypes should be treated.

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
