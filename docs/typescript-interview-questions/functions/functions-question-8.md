---
layout: doc
question: true
title: "How do rest parameters work in TypeScript?"
questionTitle: "How do rest parameters work in TypeScript?"
description: "Learn How do rest parameters work in TypeScript? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A rest parameter is typed as an array or tuple and gathers remaining arguments. A tuple preserves each argument position and type, making it useful for forwarding calls or modeling a known variable-length signature."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "How do rest parameters work in TypeScript?"
prev:
  text: "How do you write a generic function?"
  link: "/typescript-interview-questions/generics/generics-question-8"
next:
  text: "How do you share types between frontend and backend?"
  link: "/typescript-interview-questions/architecture/architecture-question-8"
---
# How do rest parameters work in TypeScript?

## Answer

A rest parameter is typed as an array or tuple and gathers remaining arguments. A tuple preserves each argument position and type, making it useful for forwarding calls or modeling a known variable-length signature.

## Example

```ts
function isError(value: unknown): value is Error {
  return value instanceof Error
}
try { throw new Error("Network failed") } catch (error) {
  if (isError(error)) console.error(error.message)
}
```

A type predicate safely narrows an `unknown` value after a runtime check.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
