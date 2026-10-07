---
layout: doc
question: true
title: "What is declaration merging?"
questionTitle: "What is declaration merging?"
description: "Learn What is declaration merging? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Declaration merging combines multiple declarations with the same interface or namespace name into one type. It is useful for extending library types, but should be used sparingly because global augmentation can make dependencies harder to understand."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "What is declaration merging?"
prev:
  text: "What is type inference?"
  link: "/typescript-interview-questions/basics/basics-question-4"
next:
  text: "What does `typeof` do in a type position?"
  link: "/typescript-interview-questions/generics/generics-question-4"
---
# What is declaration merging?

## Answer

Declaration merging combines multiple declarations with the same interface or namespace name into one type. It is useful for extending library types, but should be used sparingly because global augmentation can make dependencies harder to understand.

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
