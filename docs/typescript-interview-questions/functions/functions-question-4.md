---
layout: doc
question: true
title: "What is a function return type?"
questionTitle: "What is a function return type?"
description: "Learn What is a function return type? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A function return type describes the value a caller can receive. TypeScript often infers it, but annotating exported or complex functions documents the contract and catches accidental return-path changes."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "What is a function return type?"
prev:
  text: "What does `typeof` do in a type position?"
  link: "/typescript-interview-questions/generics/generics-question-4"
next:
  text: "How do you migrate JavaScript to TypeScript?"
  link: "/typescript-interview-questions/architecture/architecture-question-4"
---
# What is a function return type?

## Answer

A function return type describes the value a caller can receive. TypeScript often infers it, but annotating exported or complex functions documents the contract and catches accidental return-path changes.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
