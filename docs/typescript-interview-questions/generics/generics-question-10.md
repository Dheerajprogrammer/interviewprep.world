---
layout: doc
question: true
title: "When should you avoid generics?"
questionTitle: "When should you avoid generics?"
description: "Learn When should you avoid generics? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Avoid generics when a concrete type communicates the domain better, when no input-output relationship needs preserving, or when callers must supply complex annotations. A small explicit union is often clearer than an abstract generic API."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "When should you avoid generics?"
prev:
  text: "How do you model an API response?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-10"
next:
  text: "What are template literal types?"
  link: "/typescript-interview-questions/functions/functions-question-10"
---
# When should you avoid generics?

## Answer

Avoid generics when a concrete type communicates the domain better, when no input-output relationship needs preserving, or when callers must supply complex annotations. A small explicit union is often clearer than an abstract generic API.

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
