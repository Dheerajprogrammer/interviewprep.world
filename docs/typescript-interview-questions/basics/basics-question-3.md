---
layout: doc
question: true
title: "What is the difference between `any`, `unknown`, and `never`?"
questionTitle: "What is the difference between `any`, `unknown`, and `never`?"
description: "Learn What is the difference between `any`, `unknown`, and `never`? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`any` opts out of checking, `unknown` accepts any value but requires narrowing before use, and `never` represents a value that cannot occur. Prefer `unknown` at untrusted boundaries and avoid `any` unless interoperating with untyped code."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is the difference between `any`, `unknown`, and `never`?"
prev:
  text: "How do you type environment variables?"
  link: "/typescript-interview-questions/architecture/architecture-question-2"
next:
  text: "What are readonly properties?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-3"
---
# What is the difference between `any`, `unknown`, and `never`?

## Answer

`any` opts out of checking, `unknown` accepts any value but requires narrowing before use, and `never` represents a value that cannot occur. Prefer `unknown` at untrusted boundaries and avoid `any` unless interoperating with untyped code.

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
