---
layout: doc
question: true
title: "How do you write a generic React component?"
questionTitle: "How do you write a generic React component?"
description: "Learn How do you write a generic React component? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Parameterize the component’s props with the data type and expose callbacks that use that same type, such as `Table<T>`. Keep generic inference easy at the call site and constrain `T` only when rendering needs a known field."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "How do you write a generic React component?"
prev:
  text: "What are utility types?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-9"
next:
  text: "How do you type `this` in a function?"
  link: "/typescript-interview-questions/functions/functions-question-9"
---
# How do you write a generic React component?

## Answer

Parameterize the component’s props with the data type and expose callbacks that use that same type, such as `Table<T>`. Keep generic inference easy at the call site and constrain `T` only when rendering needs a known field.

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
