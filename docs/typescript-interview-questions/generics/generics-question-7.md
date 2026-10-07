---
layout: doc
question: true
title: "How do generic defaults work?"
questionTitle: "How do generic defaults work?"
description: "Learn How do generic defaults work? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A generic default supplies a type argument when the caller does not provide one, such as `ApiResponse<T = unknown>`. Defaults should be safe and broad enough that omitted arguments do not create false certainty."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "How do generic defaults work?"
prev:
  text: "What are callable interfaces?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-7"
next:
  text: "How do you type callbacks?"
  link: "/typescript-interview-questions/functions/functions-question-7"
---
# How do generic defaults work?

## Answer

A generic default supplies a type argument when the caller does not provide one, such as `ApiResponse<T = unknown>`. Defaults should be safe and broad enough that omitted arguments do not create false certainty.

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
