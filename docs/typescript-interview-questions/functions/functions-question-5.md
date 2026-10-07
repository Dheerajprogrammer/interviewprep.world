---
layout: doc
question: true
title: "What is the difference between `void` and `never`?"
questionTitle: "What is the difference between `void` and `never`?"
description: "Learn What is the difference between `void` and `never`? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`void` means a function returns no useful value but may finish normally; `never` means it cannot complete normally, such as a function that always throws or loops forever. `never` is useful for exhaustive checks."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "What is the difference between `void` and `never`?"
prev:
  text: "What are conditional types?"
  link: "/typescript-interview-questions/generics/generics-question-5"
next:
  text: "What is `tsconfig.json` for?"
  link: "/typescript-interview-questions/architecture/architecture-question-5"
---
# What is the difference between `void` and `never`?

## Answer

`void` means a function returns no useful value but may finish normally; `never` means it cannot complete normally, such as a function that always throws or loops forever. `never` is useful for exhaustive checks.

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
