---
layout: doc
question: true
title: "What are template literal types?"
questionTitle: "What are template literal types?"
description: "Learn What are template literal types? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Template literal types build string unions from other literal types, such as `` `get${Capitalize<Key>}` ``. They are useful for constrained naming conventions, but should not replace simple runtime validation for external strings."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "What are template literal types?"
prev:
  text: "When should you avoid generics?"
  link: "/typescript-interview-questions/generics/generics-question-10"
next:
  text: "How do you make TypeScript builds faster?"
  link: "/typescript-interview-questions/architecture/architecture-question-10"
---
# What are template literal types?

## Answer

Template literal types build string unions from other literal types, such as `` `get${Capitalize<Key>}` ``. They are useful for constrained naming conventions, but should not replace simple runtime validation for external strings.

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
