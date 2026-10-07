---
layout: doc
question: true
title: "How do you define API models and mappers?"
questionTitle: "How do you define API models and mappers?"
description: "Learn How do you define API models and mappers? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Treat API DTOs as transport contracts, validate or normalize them at the boundary, and map them to domain or view models when their shape or semantics differ. This prevents backend changes from leaking through every component."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/architecture/architecture-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Architecture"
    link: /angular-interview-questions/architecture/
  - label: "How do you define API models and mappers?"
prev:
  text: "How do you profile an Angular app?"
  link: "/angular-interview-questions/performance/performance-question-7"
next:
  text: "What is the difference between property and attribute binding?"
  link: "/angular-interview-questions/basics/basics-question-8"
---
# How do you define API models and mappers?

## Answer

Treat API DTOs as transport contracts, validate or normalize them at the boundary, and map them to domain or view models when their shape or semantics differ. This prevents backend changes from leaking through every component.

## Example

```ts
// projects/data-access/project-api.service.ts
// projects/feature-list/project-list.component.ts
// shared/ui/empty-state.component.ts
```

Organizing by feature and responsibility prevents unrelated code from becoming coupled through a large shared folder.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
