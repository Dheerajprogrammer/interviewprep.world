---
layout: doc
question: true
title: "How do project references work?"
questionTitle: "How do project references work?"
description: "Learn How do project references work? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Project references split a TypeScript codebase into buildable units with declared dependencies. `tsc --build` can then type-check and rebuild only affected projects, improving scale and enforcing package boundaries."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/architecture/architecture-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Project Architecture"
    link: /typescript-interview-questions/architecture/
  - label: "How do project references work?"
prev:
  text: "How do you type callbacks?"
  link: "/typescript-interview-questions/functions/functions-question-7"
next:
  text: "What is a discriminated union?"
  link: "/typescript-interview-questions/basics/basics-question-8"
---
# How do project references work?

## Answer

Project references split a TypeScript codebase into buildable units with declared dependencies. `tsc --build` can then type-check and rebuild only affected projects, improving scale and enforcing package boundaries.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
