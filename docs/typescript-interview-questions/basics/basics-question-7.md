---
layout: doc
question: true
title: "What is type narrowing?"
questionTitle: "What is type narrowing?"
description: "Learn What is type narrowing? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Narrowing refines a broad type after a runtime check, such as `typeof`, `in`, equality against a discriminant, or a custom type predicate. It is how TypeScript keeps union handling safe without casts."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is type narrowing?"
prev:
  text: "What is module resolution?"
  link: "/typescript-interview-questions/architecture/architecture-question-6"
next:
  text: "What are callable interfaces?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-7"
---
# What is type narrowing?

## Answer

Narrowing refines a broad type after a runtime check, such as `typeof`, `in`, equality against a discriminant, or a custom type predicate. It is how TypeScript keeps union handling safe without casts.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
