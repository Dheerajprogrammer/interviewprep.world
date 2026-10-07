---
layout: doc
question: true
title: "What is a decorator?"
questionTitle: "What is a decorator?"
description: "Learn What is a decorator? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A decorator attaches metadata to a class, property, method, or parameter so Angular can understand how to compile or inject it. Examples include `@Component`, `@Injectable`, `@Input`, and `@Output`."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/basics/basics-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Basics"
    link: /angular-interview-questions/basics/
  - label: "What is a decorator?"
prev:
  text: "How do you separate smart and presentational components?"
  link: "/angular-interview-questions/architecture/architecture-question-4"
next:
  text: "What is `ViewChild`?"
  link: "/angular-interview-questions/components/components-question-5"
---
# What is a decorator?

## Answer

A decorator attaches metadata to a class, property, method, or parameter so Angular can understand how to compile or inject it. Examples include `@Component`, `@Injectable`, `@Input`, and `@Output`.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
