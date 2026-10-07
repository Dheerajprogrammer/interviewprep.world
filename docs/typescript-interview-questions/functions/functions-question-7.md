---
layout: doc
question: true
title: "How do you type callbacks?"
questionTitle: "How do you type callbacks?"
description: "Learn How do you type callbacks? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Describe callback parameters and return values explicitly, including whether callers may omit a value or return a Promise. Keep callback types narrow so implementations cannot depend on context the API does not guarantee."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "How do you type callbacks?"
prev:
  text: "How do generic defaults work?"
  link: "/typescript-interview-questions/generics/generics-question-7"
next:
  text: "How do project references work?"
  link: "/typescript-interview-questions/architecture/architecture-question-7"
---
# How do you type callbacks?

## Answer

Describe callback parameters and return values explicitly, including whether callers may omit a value or return a Promise. Keep callback types narrow so implementations cannot depend on context the API does not guarantee.

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
