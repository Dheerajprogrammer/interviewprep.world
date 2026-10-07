---
layout: doc
question: true
title: "How do you group an array of objects by a key?"
questionTitle: "How do you group an array of objects by a key?"
description: "Learn How do you group an array of objects by a key? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Reduce the array into a `Map` or object keyed by the selected property, appending each item to that group. Define behavior for missing keys and avoid mutating the source array."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/coding-challenges/coding-challenges-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Coding Challenges"
    link: /javascript-interview-questions/coding-challenges/
  - label: "How do you group an array of objects by a key?"
prev:
  text: "What is the factory pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-4"
next:
  text: "What is the temporal dead zone?"
  link: "/javascript-interview-questions/basics/basics-question-5"
---
# How do you group an array of objects by a key?

## Answer

Reduce the array into a `Map` or object keyed by the selected property, appending each item to that group. Define behavior for missing keys and avoid mutating the source array.

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
