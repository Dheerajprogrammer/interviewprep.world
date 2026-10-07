---
layout: doc
question: true
title: "What are pipes?"
questionTitle: "What are pipes?"
description: "Learn What are pipes? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Pipes transform template values for display, such as formatting a date or currency. Keep pure pipes deterministic and inexpensive; use services or components for work that needs side effects, dependencies, or complex state."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/basics/basics-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Basics"
    link: /angular-interview-questions/basics/
  - label: "What are pipes?"
prev:
  text: "How do you test Angular components and services?"
  link: "/angular-interview-questions/architecture/architecture-question-9"
next:
  text: "How do you communicate between sibling components?"
  link: "/angular-interview-questions/components/components-question-10"
---
# What are pipes?

## Answer

Pipes transform template values for display, such as formatting a date or currency. Keep pure pipes deterministic and inexpensive; use services or components for work that needs side effects, dependencies, or complex state.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
