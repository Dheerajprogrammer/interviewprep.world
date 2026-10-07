---
layout: doc
question: true
title: "How do you implement `Array.prototype.map`?"
questionTitle: "How do you implement `Array.prototype.map`?"
description: "Learn How do you implement `Array.prototype.map`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Create a result array of the same length, visit existing indexes in order, call the callback with value, index, and source array, and preserve holes. Do not mutate the source and validate that the callback is callable."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/coding-challenges/coding-challenges-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Coding Challenges"
    link: /javascript-interview-questions/coding-challenges/
  - label: "How do you implement `Array.prototype.map`?"
prev:
  text: "What is the strategy pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-6"
next:
  text: "What is strict mode?"
  link: "/javascript-interview-questions/basics/basics-question-7"
---
# How do you implement `Array.prototype.map`?

## Answer

Create a result array of the same length, visit existing indexes in order, call the callback with value, index, and source array, and preserve holes. Do not mutate the source and validate that the callback is callable.

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
