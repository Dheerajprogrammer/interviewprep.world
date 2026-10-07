---
layout: doc
question: true
title: "How do you separate smart and presentational components?"
questionTitle: "How do you separate smart and presentational components?"
description: "Learn How do you separate smart and presentational components? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Smart components coordinate data, state, and routing; presentational components receive inputs and emit events while focusing on rendering. This is a guideline, not a rigid rule: keep a component’s dependencies proportional to its responsibility."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/architecture/architecture-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Architecture"
    link: /angular-interview-questions/architecture/
  - label: "How do you separate smart and presentational components?"
prev:
  text: "How do you avoid expensive template expressions?"
  link: "/angular-interview-questions/performance/performance-question-4"
next:
  text: "What is a decorator?"
  link: "/angular-interview-questions/basics/basics-question-5"
---
# How do you separate smart and presentational components?

## Answer

Smart components coordinate data, state, and routing; presentational components receive inputs and emit events while focusing on rendering. This is a guideline, not a rigid rule: keep a component’s dependencies proportional to its responsibility.

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
