---
layout: doc
question: true
title: "What does `strict` mode enable?"
questionTitle: "What does `strict` mode enable?"
description: "Learn What does `strict` mode enable? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The `strict` compiler option enables a family of checks including strict nullability, safer function parameters, and definite assignment. It finds more defects early and should normally be enabled for new code."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What does `strict` mode enable?"
prev:
  text: "How do you avoid over-engineered types?"
  link: "/typescript-interview-questions/architecture/architecture-question-9"
next:
  text: "How do you model an API response?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-10"
---
# What does `strict` mode enable?

## Answer

The `strict` compiler option enables a family of checks including strict nullability, safer function parameters, and definite assignment. It finds more defects early and should normally be enabled for new code.

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
