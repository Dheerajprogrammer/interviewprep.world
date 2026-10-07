---
layout: doc
question: true
title: "How do you organize types in a large project?"
questionTitle: "How do you organize types in a large project?"
description: "Learn How do you organize types in a large project? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keep types close to the domain or feature that owns them, export stable contracts from clear module boundaries, and avoid a global dumping ground. Share types only when the dependency is intentional and versioned."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/architecture/architecture-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Project Architecture"
    link: /typescript-interview-questions/architecture/
  - label: "How do you organize types in a large project?"
prev:
  text: "How do function overloads work?"
  link: "/typescript-interview-questions/functions/functions-question-1"
next:
  text: "What is structural typing?"
  link: "/typescript-interview-questions/basics/basics-question-2"
---
# How do you organize types in a large project?

## Answer

Keep types close to the domain or feature that owns them, export stable contracts from clear module boundaries, and avoid a global dumping ground. Share types only when the dependency is intentional and versioned.

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
