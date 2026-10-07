---
layout: doc
question: true
title: "What is TypeScript and why use it?"
questionTitle: "What is TypeScript and why use it?"
description: "Learn What is TypeScript and why use it? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "TypeScript is JavaScript with static type checking. It catches mismatched contracts before runtime, improves editor tooling and refactoring, but must be paired with runtime validation for data from APIs, users, and environment variables."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is TypeScript and why use it?"
next:
  text: "What is the difference between an interface and a type alias?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-1"
---
# What is TypeScript and why use it?

## Answer

TypeScript is JavaScript with static type checking. It catches mismatched contracts before runtime, improves editor tooling and refactoring, but must be paired with runtime validation for data from APIs, users, and environment variables.

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
