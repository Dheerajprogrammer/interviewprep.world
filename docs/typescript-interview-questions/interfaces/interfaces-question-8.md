---
layout: doc
question: true
title: "What are mapped types?"
questionTitle: "What are mapped types?"
description: "Learn What are mapped types? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Mapped types create a new type by transforming every property of another type, such as making all fields optional or readonly. They reduce duplication when the transformation follows a uniform rule."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "What are mapped types?"
prev:
  text: "What is a discriminated union?"
  link: "/typescript-interview-questions/basics/basics-question-8"
next:
  text: "How do you write a generic function?"
  link: "/typescript-interview-questions/generics/generics-question-8"
---
# What are mapped types?

## Answer

Mapped types create a new type by transforming every property of another type, such as making all fields optional or readonly. They reduce duplication when the transformation follows a uniform rule.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
