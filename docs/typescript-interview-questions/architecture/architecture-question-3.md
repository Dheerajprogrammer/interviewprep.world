---
layout: doc
question: true
title: "How do you validate untrusted runtime data?"
questionTitle: "How do you validate untrusted runtime data?"
description: "Learn How do you validate untrusted runtime data? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Parse untrusted input with a runtime schema library or explicit validator at the boundary, return a controlled error when it fails, and use the validated result in the domain. Type assertions do not validate JSON."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/architecture/architecture-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Project Architecture"
    link: /typescript-interview-questions/architecture/
  - label: "How do you validate untrusted runtime data?"
prev:
  text: "What is an assertion function?"
  link: "/typescript-interview-questions/functions/functions-question-3"
next:
  text: "What is type inference?"
  link: "/typescript-interview-questions/basics/basics-question-4"
---
# How do you validate untrusted runtime data?

## Answer

Parse untrusted input with a runtime schema library or explicit validator at the boundary, return a controlled error when it fails, and use the validated result in the domain. Type assertions do not validate JSON.

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
