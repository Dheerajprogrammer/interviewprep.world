---
layout: doc
question: true
title: "What is an assertion function?"
questionTitle: "What is an assertion function?"
description: "Learn What is an assertion function? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An assertion function throws when a condition is not met and declares that the condition holds afterward, such as `asserts value is string`. Use it for boundary validation and invariants, not to silence legitimate uncertainty."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "What is an assertion function?"
prev:
  text: "What does `keyof` do?"
  link: "/typescript-interview-questions/generics/generics-question-3"
next:
  text: "How do you validate untrusted runtime data?"
  link: "/typescript-interview-questions/architecture/architecture-question-3"
---
# What is an assertion function?

## Answer

An assertion function throws when a condition is not met and declares that the condition holds afterward, such as `asserts value is string`. Use it for boundary validation and invariants, not to silence legitimate uncertainty.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
