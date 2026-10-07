---
layout: doc
question: true
title: "What are directives?"
questionTitle: "What are directives?"
description: "Learn What are directives? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Directives add behavior to existing elements or control template structure. Components are directives with templates; attribute directives change appearance or behavior, while structural directives add or remove rendered views."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/basics/basics-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Basics"
    link: /angular-interview-questions/basics/
  - label: "What are directives?"
prev:
  text: "How do you handle application-wide errors?"
  link: "/angular-interview-questions/architecture/architecture-question-8"
next:
  text: "How do you build a reusable Angular component?"
  link: "/angular-interview-questions/components/components-question-9"
---
# What are directives?

## Answer

Directives add behavior to existing elements or control template structure. Components are directives with templates; attribute directives change appearance or behavior, while structural directives add or remove rendered views.

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
