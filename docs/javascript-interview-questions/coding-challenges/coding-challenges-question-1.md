---
layout: doc
question: true
title: "How do you flatten a nested array?"
questionTitle: "How do you flatten a nested array?"
description: "Learn How do you flatten a nested array? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Traverse each item recursively or iteratively; append primitives and recursively flatten nested arrays. State whether depth is unlimited, whether sparse arrays matter, and whether the original array must remain unchanged."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/coding-challenges/coding-challenges-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Coding Challenges"
    link: /javascript-interview-questions/coding-challenges/
  - label: "How do you flatten a nested array?"
prev:
  text: "What is the module pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-1"
next:
  text: "What is the difference between `==` and `===`?"
  link: "/javascript-interview-questions/basics/basics-question-2"
---
# How do you flatten a nested array?

## Answer

Traverse each item recursively or iteratively; append primitives and recursively flatten nested arrays. State whether depth is unlimited, whether sparse arrays matter, and whether the original array must remain unchanged.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
