---
layout: doc
question: true
title: "How do you handle application-wide errors?"
questionTitle: "How do you handle application-wide errors?"
description: "Learn How do you handle application-wide errors? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Handle expected errors at the feature boundary with recovery UI, and send unexpected errors to a centralized ErrorHandler and monitoring system with useful context. Avoid one global handler that hides every failure from users."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/architecture/architecture-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Architecture"
    link: /angular-interview-questions/architecture/
  - label: "How do you handle application-wide errors?"
prev:
  text: "What is zone.js and what role does it play?"
  link: "/angular-interview-questions/performance/performance-question-8"
next:
  text: "What are directives?"
  link: "/angular-interview-questions/basics/basics-question-9"
---
# How do you handle application-wide errors?

## Answer

Handle expected errors at the feature boundary with recovery UI, and send unexpected errors to a centralized ErrorHandler and monitoring system with useful context. Avoid one global handler that hides every failure from users.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
