---
layout: doc
question: true
title: "How do you type environment variables?"
questionTitle: "How do you type environment variables?"
description: "Learn How do you type environment variables? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Declare the expected environment shape for editor support, then validate actual values at startup with a runtime schema. Environment variables are strings at runtime, so types alone cannot prove a URL, number, or secret is valid."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/architecture/architecture-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Project Architecture"
    link: /typescript-interview-questions/architecture/
  - label: "How do you type environment variables?"
prev:
  text: "What is a type predicate?"
  link: "/typescript-interview-questions/functions/functions-question-2"
next:
  text: "What is the difference between `any`, `unknown`, and `never`?"
  link: "/typescript-interview-questions/basics/basics-question-3"
---
# How do you type environment variables?

## Answer

Declare the expected environment shape for editor support, then validate actual values at startup with a runtime schema. Environment variables are strings at runtime, so types alone cannot prove a URL, number, or secret is valid.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
