---
layout: doc
question: true
title: "What is an intersection type?"
questionTitle: "What is an intersection type?"
description: "Learn What is an intersection type? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An intersection type combines requirements from multiple types, so a value must satisfy all of them. It is useful for composing compatible object contracts, but conflicting property types can produce an impossible type."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is an intersection type?"
prev:
  text: "What is `tsconfig.json` for?"
  link: "/typescript-interview-questions/architecture/architecture-question-5"
next:
  text: "How do you extend an interface?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-6"
---
# What is an intersection type?

## Answer

An intersection type combines requirements from multiple types, so a value must satisfy all of them. It is useful for composing compatible object contracts, but conflicting property types can produce an impossible type.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
