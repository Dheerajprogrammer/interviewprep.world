---
layout: doc
question: true
title: "What is a discriminated union?"
questionTitle: "What is a discriminated union?"
description: "Learn What is a discriminated union? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A discriminated union gives each variant a shared literal tag, such as `status: \"loading\" | \"success\" | \"error\"`. Switching on that tag narrows each branch and lets the compiler check exhaustiveness."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is a discriminated union?"
prev:
  text: "How do project references work?"
  link: "/typescript-interview-questions/architecture/architecture-question-7"
next:
  text: "What are mapped types?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-8"
---
# What is a discriminated union?

## Answer

A discriminated union gives each variant a shared literal tag, such as `status: "loading" | "success" | "error"`. Switching on that tag narrows each branch and lets the compiler check exhaustiveness.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
