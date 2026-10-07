---
layout: doc
question: true
title: "What are utility types?"
questionTitle: "What are utility types?"
description: "Learn What are utility types? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Utility types such as `Pick`, `Omit`, `Partial`, `Required`, and `Record` derive common variations of an existing type. Use them when they clarify a relationship; avoid chains so complex that the source contract becomes unreadable."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "What are utility types?"
prev:
  text: "What is a type assertion?"
  link: "/typescript-interview-questions/basics/basics-question-9"
next:
  text: "How do you write a generic React component?"
  link: "/typescript-interview-questions/generics/generics-question-9"
---
# What are utility types?

## Answer

Utility types such as `Pick`, `Omit`, `Partial`, `Required`, and `Record` derive common variations of an existing type. Use them when they clarify a relationship; avoid chains so complex that the source contract becomes unreadable.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
