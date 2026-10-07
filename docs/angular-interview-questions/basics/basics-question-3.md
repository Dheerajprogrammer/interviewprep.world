---
layout: doc
question: true
title: "What is a standalone component?"
questionTitle: "What is a standalone component?"
description: "Learn What is a standalone component? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A standalone component declares its own template dependencies through its `imports` array and does not need to be declared in an NgModule. It simplifies feature composition and is the default approach for new Angular code."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/basics/basics-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Basics"
    link: /angular-interview-questions/basics/
  - label: "What is a standalone component?"
prev:
  text: "What is feature-based architecture?"
  link: "/angular-interview-questions/architecture/architecture-question-2"
next:
  text: "What is `EventEmitter` used for?"
  link: "/angular-interview-questions/components/components-question-3"
---
# What is a standalone component?

## Answer

A standalone component declares its own template dependencies through its `imports` array and does not need to be declared in an NgModule. It simplifies feature composition and is the default approach for new Angular code.

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
