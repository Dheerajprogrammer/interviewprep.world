---
layout: doc
question: true
title: "What is an index signature?"
questionTitle: "What is an index signature?"
description: "Learn What is an index signature? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An index signature describes objects whose keys are not known ahead of time, such as `Record<string, number>`. The value type applies to every matching key, so it should be used only when arbitrary keys are truly valid."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "What is an index signature?"
prev:
  text: "What is a union type?"
  link: "/typescript-interview-questions/basics/basics-question-5"
next:
  text: "What are conditional types?"
  link: "/typescript-interview-questions/generics/generics-question-5"
---
# What is an index signature?

## Answer

An index signature describes objects whose keys are not known ahead of time, such as `Record<string, number>`. The value type applies to every matching key, so it should be used only when arbitrary keys are truly valid.

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
