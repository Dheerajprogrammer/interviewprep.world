---
layout: doc
question: true
title: "How do generic constraints work?"
questionTitle: "How do generic constraints work?"
description: "Learn How do generic constraints work? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A constraint such as `T extends { id: string }` limits a type parameter to values with capabilities the implementation needs. It keeps a generic reusable while allowing safe access to the constrained members."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "How do generic constraints work?"
prev:
  text: "How do optional properties work?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-2"
next:
  text: "What is a type predicate?"
  link: "/typescript-interview-questions/functions/functions-question-2"
---
# How do generic constraints work?

## Answer

A constraint such as `T extends { id: string }` limits a type parameter to values with capabilities the implementation needs. It keeps a generic reusable while allowing safe access to the constrained members.

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
