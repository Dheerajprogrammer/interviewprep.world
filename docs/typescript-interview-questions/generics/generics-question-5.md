---
layout: doc
question: true
title: "What are conditional types?"
questionTitle: "What are conditional types?"
description: "Learn What are conditional types? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Conditional types choose one type or another based on assignability, using `T extends U ? X : Y`. They power reusable utilities but should be kept understandable because distributive behavior over unions can be surprising."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "What are conditional types?"
prev:
  text: "What is an index signature?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-5"
next:
  text: "What is the difference between `void` and `never`?"
  link: "/typescript-interview-questions/functions/functions-question-5"
---
# What are conditional types?

## Answer

Conditional types choose one type or another based on assignability, using `T extends U ? X : Y`. They power reusable utilities but should be kept understandable because distributive behavior over unions can be surprising.

## Example

```ts
function first<T>(items: readonly T[]): T | undefined {
  return items[0]
}
const user = first([{ id: "u1" }]) // { id: string } | undefined
```

`T` preserves the item type from the caller through the return value.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
