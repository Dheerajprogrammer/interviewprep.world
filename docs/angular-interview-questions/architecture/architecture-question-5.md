---
layout: doc
question: true
title: "How do you organize core services?"
questionTitle: "How do you organize core services?"
description: "Learn How do you organize core services? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Place application-wide concerns such as authentication, configuration, logging, error handling, and HTTP infrastructure in a small core layer. Do not let it become a catch-all for feature business logic."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/architecture/architecture-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Architecture"
    link: /angular-interview-questions/architecture/
  - label: "How do you organize core services?"
prev:
  text: "How do pure pipes improve performance?"
  link: "/angular-interview-questions/performance/performance-question-5"
next:
  text: "What is a component lifecycle?"
  link: "/angular-interview-questions/basics/basics-question-6"
---
# How do you organize core services?

## Answer

Place application-wide concerns such as authentication, configuration, logging, error handling, and HTTP infrastructure in a small core layer. Do not let it become a catch-all for feature business logic.

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
