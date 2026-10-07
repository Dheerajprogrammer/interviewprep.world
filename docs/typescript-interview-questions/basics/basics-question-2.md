---
layout: doc
question: true
title: "What is structural typing?"
questionTitle: "What is structural typing?"
description: "Learn What is structural typing? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "TypeScript checks whether a value has the required shape rather than requiring an explicit declaration that it implements a named type. Two independently declared objects are compatible when their members are compatible."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is structural typing?"
prev:
  text: "How do you organize types in a large project?"
  link: "/typescript-interview-questions/architecture/architecture-question-1"
next:
  text: "How do optional properties work?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-2"
---
# What is structural typing?

## Answer

TypeScript checks whether a value has the required shape rather than requiring an explicit declaration that it implements a named type. Two independently declared objects are compatible when their members are compatible.

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
