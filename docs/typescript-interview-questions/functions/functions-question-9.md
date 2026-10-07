---
layout: doc
question: true
title: "How do you type `this` in a function?"
questionTitle: "How do you type `this` in a function?"
description: "Learn How do you type `this` in a function? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Declare a fake first parameter such as `function f(this: HTMLElement, event: Event)` to specify the required receiver without adding a runtime argument. Arrow functions capture lexical `this` and cannot declare their own receiver type."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "How do you type `this` in a function?"
prev:
  text: "How do you write a generic React component?"
  link: "/typescript-interview-questions/generics/generics-question-9"
next:
  text: "How do you avoid over-engineered types?"
  link: "/typescript-interview-questions/architecture/architecture-question-9"
---
# How do you type `this` in a function?

## Answer

Declare a fake first parameter such as `function f(this: HTMLElement, event: Event)` to specify the required receiver without adding a runtime argument. Arrow functions capture lexical `this` and cannot declare their own receiver type.

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
