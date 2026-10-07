---
layout: doc
question: true
title: "How do you extend an interface?"
questionTitle: "How do you extend an interface?"
description: "Learn How do you extend an interface? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `extends` to inherit members from another interface, then add or refine compatible members. Prefer small composable interfaces over one broad base type that forces unrelated consumers to depend on fields they do not need."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "How do you extend an interface?"
prev:
  text: "What is an intersection type?"
  link: "/typescript-interview-questions/basics/basics-question-6"
next:
  text: "What is the `infer` keyword?"
  link: "/typescript-interview-questions/generics/generics-question-6"
---
# How do you extend an interface?

## Answer

Use `extends` to inherit members from another interface, then add or refine compatible members. Prefer small composable interfaces over one broad base type that forces unrelated consumers to depend on fields they do not need.

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
