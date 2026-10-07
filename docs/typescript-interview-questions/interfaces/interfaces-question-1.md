---
layout: doc
question: true
title: "What is the difference between an interface and a type alias?"
questionTitle: "What is the difference between an interface and a type alias?"
description: "Learn What is the difference between an interface and a type alias? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Both can describe object shapes. Interfaces are designed for object contracts and can be declaration-merged; type aliases can name unions, intersections, primitives, and mapped types. Use the form that communicates the contract most clearly."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "What is the difference between an interface and a type alias?"
prev:
  text: "What is TypeScript and why use it?"
  link: "/typescript-interview-questions/basics/basics-question-1"
next:
  text: "What are generics?"
  link: "/typescript-interview-questions/generics/generics-question-1"
---
# What is the difference between an interface and a type alias?

## Answer

Both can describe object shapes. Interfaces are designed for object contracts and can be declaration-merged; type aliases can name unions, intersections, primitives, and mapped types. Use the form that communicates the contract most clearly.

## Example

```ts
type User = { id: string; name: string; readonly role?: "admin" | "member" }
type UserPreview = Pick<User, "id" | "name">
```

`Pick` derives a focused view without duplicating the source model.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
