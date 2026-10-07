---
layout: doc
question: true
title: "How do you share types between frontend and backend?"
questionTitle: "How do you share types between frontend and backend?"
description: "Learn How do you share types between frontend and backend? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["typescript", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Share stable contract definitions in a versioned package or generate them from an API schema, while keeping server-only domain details private. Validate data at the network boundary because shared TypeScript types disappear at runtime."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/architecture/architecture-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Project Architecture"
    link: /typescript-interview-questions/architecture/
  - label: "How do you share types between frontend and backend?"
prev:
  text: "How do rest parameters work in TypeScript?"
  link: "/typescript-interview-questions/functions/functions-question-8"
next:
  text: "What is a type assertion?"
  link: "/typescript-interview-questions/basics/basics-question-9"
---
# How do you share types between frontend and backend?

## Answer

Share stable contract definitions in a versioned package or generate them from an API schema, while keeping server-only domain details private. Validate data at the network boundary because shared TypeScript types disappear at runtime.

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
