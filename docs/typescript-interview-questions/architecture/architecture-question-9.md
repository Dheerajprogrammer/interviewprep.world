---
layout: doc
question: true
title: "How do you avoid over-engineered types?"
questionTitle: "How do you avoid over-engineered types?"
description: "Learn How do you avoid over-engineered types? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Optimize for readable errors and common use, not for modeling every theoretical case. Prefer straightforward discriminated unions and concrete domain types; introduce advanced conditional or generic types only when they remove real repetition safely."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/architecture/architecture-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Project Architecture"
    link: /typescript-interview-questions/architecture/
  - label: "How do you avoid over-engineered types?"
prev:
  text: "How do you type `this` in a function?"
  link: "/typescript-interview-questions/functions/functions-question-9"
next:
  text: "What does `strict` mode enable?"
  link: "/typescript-interview-questions/basics/basics-question-10"
---
# How do you avoid over-engineered types?

## Answer

Optimize for readable errors and common use, not for modeling every theoretical case. Prefer straightforward discriminated unions and concrete domain types; introduce advanced conditional or generic types only when they remove real repetition safely.

## Example

```ts
const ConfigSchema = z.object({ API_URL: z.string().url() })
const config = ConfigSchema.parse(import.meta.env)
```

Types describe expected values; runtime validation protects the boundary where data enters the application.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
