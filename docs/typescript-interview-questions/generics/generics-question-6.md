---
layout: doc
question: true
title: "What is the `infer` keyword?"
questionTitle: "What is the `infer` keyword?"
description: "Learn What is the `infer` keyword? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`infer` introduces a type variable inside a conditional type so TypeScript can extract part of a matched type, such as a function return type or array element. It is most useful inside small named utility types."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "What is the `infer` keyword?"
prev:
  text: "How do you extend an interface?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-6"
next:
  text: "How do you type async functions?"
  link: "/typescript-interview-questions/functions/functions-question-6"
---
# What is the `infer` keyword?

## Answer

`infer` introduces a type variable inside a conditional type so TypeScript can extract part of a matched type, such as a function return type or array element. It is most useful inside small named utility types.

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
