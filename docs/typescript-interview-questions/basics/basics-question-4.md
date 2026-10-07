---
layout: doc
question: true
title: "What is type inference?"
questionTitle: "What is type inference?"
description: "Learn What is type inference? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Type inference lets TypeScript derive types from values, assignments, and control flow, so annotations are needed mainly at public boundaries or when they clarify intent. It preserves safety without making ordinary code verbose."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is type inference?"
prev:
  text: "How do you validate untrusted runtime data?"
  link: "/typescript-interview-questions/architecture/architecture-question-3"
next:
  text: "What is declaration merging?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-4"
---
# What is type inference?

## Answer

Type inference lets TypeScript derive types from values, assignments, and control flow, so annotations are needed mainly at public boundaries or when they clarify intent. It preserves safety without making ordinary code verbose.

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
