---
layout: doc
question: true
title: "What are generics?"
questionTitle: "What are generics?"
description: "Learn What are generics? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Generics parameterize a type, function, or class so it can preserve the relationship between values without giving up type safety. For example, `Array<T>` says the output elements have the same type `T` supplied by the caller."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "What are generics?"
prev:
  text: "What is the difference between an interface and a type alias?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-1"
next:
  text: "How do function overloads work?"
  link: "/typescript-interview-questions/functions/functions-question-1"
---
# What are generics?

## Answer

Generics parameterize a type, function, or class so it can preserve the relationship between values without giving up type safety. For example, `Array<T>` says the output elements have the same type `T` supplied by the caller.

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
