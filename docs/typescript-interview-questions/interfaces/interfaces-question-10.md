---
layout: doc
question: true
title: "How do you model an API response?"
questionTitle: "How do you model an API response?"
description: "Learn How do you model an API response? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Model the transport envelope, success data, and failure cases explicitly, then validate untrusted JSON at runtime before treating it as that type. Keep API DTOs separate from domain models when their lifecycles differ."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "How do you model an API response?"
prev:
  text: "What does `strict` mode enable?"
  link: "/typescript-interview-questions/basics/basics-question-10"
next:
  text: "When should you avoid generics?"
  link: "/typescript-interview-questions/generics/generics-question-10"
---
# How do you model an API response?

## Answer

Model the transport envelope, success data, and failure cases explicitly, then validate untrusted JSON at runtime before treating it as that type. Keep API DTOs separate from domain models when their lifecycles differ.

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
