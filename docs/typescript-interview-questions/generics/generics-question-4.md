---
layout: doc
question: true
title: "What does `typeof` do in a type position?"
questionTitle: "What does `typeof` do in a type position?"
description: "Learn What does `typeof` do in a type position? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "In a type position, `typeof value` captures the static type of an existing value or function. It is useful when a value is the source of truth for a type, such as a configuration object or factory."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "What does `typeof` do in a type position?"
prev:
  text: "What is declaration merging?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-4"
next:
  text: "What is a function return type?"
  link: "/typescript-interview-questions/functions/functions-question-4"
---
# What does `typeof` do in a type position?

## Answer

In a type position, `typeof value` captures the static type of an existing value or function. It is useful when a value is the source of truth for a type, such as a configuration object or factory.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
