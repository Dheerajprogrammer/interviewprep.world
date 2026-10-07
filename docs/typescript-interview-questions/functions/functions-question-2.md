---
layout: doc
question: true
title: "What is a type predicate?"
questionTitle: "What is a type predicate?"
description: "Learn What is a type predicate? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A type predicate is a function return type such as `value is User` that tells TypeScript a runtime check narrows a value. Its implementation must actually verify the claimed shape; otherwise it creates unsound code."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "What is a type predicate?"
prev:
  text: "How do generic constraints work?"
  link: "/typescript-interview-questions/generics/generics-question-2"
next:
  text: "How do you type environment variables?"
  link: "/typescript-interview-questions/architecture/architecture-question-2"
---
# What is a type predicate?

## Answer

A type predicate is a function return type such as `value is User` that tells TypeScript a runtime check narrows a value. Its implementation must actually verify the claimed shape; otherwise it creates unsound code.

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
