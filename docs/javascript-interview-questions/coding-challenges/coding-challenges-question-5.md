---
layout: doc
question: true
title: "How do you find duplicate values in an array?"
questionTitle: "How do you find duplicate values in an array?"
description: "Learn How do you find duplicate values in an array? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Track seen values in a `Set`; if a value is already present, add it to a duplicates set. This is O(n) time with O(n) additional space and works when the equality semantics of `Set` are acceptable."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/coding-challenges/coding-challenges-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Coding Challenges"
    link: /javascript-interview-questions/coding-challenges/
  - label: "How do you find duplicate values in an array?"
prev:
  text: "What is the singleton pattern and its trade-offs?"
  link: "/javascript-interview-questions/patterns/patterns-question-5"
next:
  text: "How do `var`, `let`, and `const` differ?"
  link: "/javascript-interview-questions/basics/basics-question-6"
---
# How do you find duplicate values in an array?

## Answer

Track seen values in a `Set`; if a value is already present, add it to a duplicates set. This is O(n) time with O(n) additional space and works when the equality semantics of `Set` are acceptable.

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
