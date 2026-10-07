---
layout: doc
question: true
title: "What is a component lifecycle?"
questionTitle: "What is a component lifecycle?"
description: "Learn What is a component lifecycle? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A component lifecycle is the sequence of creation, input updates, view initialization, checking, and destruction. Use lifecycle hooks for integration with external resources, not for work that can happen declaratively during rendering."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/basics/basics-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Basics"
    link: /angular-interview-questions/basics/
  - label: "What is a component lifecycle?"
prev:
  text: "How do you organize core services?"
  link: "/angular-interview-questions/architecture/architecture-question-5"
next:
  text: "What is the difference between view and content children?"
  link: "/angular-interview-questions/components/components-question-6"
---
# What is a component lifecycle?

## Answer

A component lifecycle is the sequence of creation, input updates, view initialization, checking, and destruction. Use lifecycle hooks for integration with external resources, not for work that can happen declaratively during rendering.

## Example

```ts
@Component({ selector: "app-greeting", template: `<h1>Hello {{ name }}</h1>` })
export class GreetingComponent { name = "Ada" }
```

Interpolation binds a component value into the template.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
