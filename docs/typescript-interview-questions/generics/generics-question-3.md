---
layout: doc
question: true
title: "What does `keyof` do?"
questionTitle: "What does `keyof` do?"
description: "Learn What does `keyof` do? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`keyof T` produces a union of the property names of `T`. Combine it with a generic constraint to write safe property-access helpers that reject keys the object does not have."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "What does `keyof` do?"
prev:
  text: "What are readonly properties?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-3"
next:
  text: "What is an assertion function?"
  link: "/typescript-interview-questions/functions/functions-question-3"
---
# What does `keyof` do?

## Answer

`keyof T` produces a union of the property names of `T`. Combine it with a generic constraint to write safe property-access helpers that reject keys the object does not have.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
