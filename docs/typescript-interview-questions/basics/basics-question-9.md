---
layout: doc
question: true
title: "What is a type assertion?"
questionTitle: "What is a type assertion?"
description: "Learn What is a type assertion? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A type assertion tells TypeScript to treat a value as a specified type without changing it at runtime or validating it. Use assertions only when you have stronger knowledge than the compiler; validate untrusted data instead."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is a type assertion?"
prev:
  text: "How do you share types between frontend and backend?"
  link: "/typescript-interview-questions/architecture/architecture-question-8"
next:
  text: "What are utility types?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-9"
---
# What is a type assertion?

## Answer

A type assertion tells TypeScript to treat a value as a specified type without changing it at runtime or validating it. Use assertions only when you have stronger knowledge than the compiler; validate untrusted data instead.

## Example

```ts
function formatId(id: string | number) {
  return typeof id === "string" ? id.trim() : id.toString()
}
```

The `typeof` check narrows the union, so each branch gets the operations valid for that type.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
