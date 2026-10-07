---
layout: doc
question: true
title: "What is a union type?"
questionTitle: "What is a union type?"
description: "Learn What is a union type? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A union type represents a value that may be one of several types, such as `string | number`. Code must narrow the union with a discriminant, `typeof`, or another runtime check before using members unique to one option."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is a union type?"
prev:
  text: "How do you migrate JavaScript to TypeScript?"
  link: "/typescript-interview-questions/architecture/architecture-question-4"
next:
  text: "What is an index signature?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-5"
---
# What is a union type?

## Answer

A union type represents a value that may be one of several types, such as `string | number`. Code must narrow the union with a discriminant, `typeof`, or another runtime check before using members unique to one option.

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
