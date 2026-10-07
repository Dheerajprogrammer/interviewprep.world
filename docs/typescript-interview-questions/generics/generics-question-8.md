---
layout: doc
question: true
title: "How do you write a generic function?"
questionTitle: "How do you write a generic function?"
description: "Learn How do you write a generic function? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Declare the type parameter before the arguments and use it where input and output must be related. For example, `function first<T>(items: readonly T[]): T | undefined` preserves the element type for every caller."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "How do you write a generic function?"
prev:
  text: "What are mapped types?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-8"
next:
  text: "How do rest parameters work in TypeScript?"
  link: "/typescript-interview-questions/functions/functions-question-8"
---
# How do you write a generic function?

## Answer

Declare the type parameter before the arguments and use it where input and output must be related. For example, `function first<T>(items: readonly T[]): T | undefined` preserves the element type for every caller.

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
