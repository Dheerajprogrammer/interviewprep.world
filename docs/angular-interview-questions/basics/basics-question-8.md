---
layout: doc
question: true
title: "What is the difference between property and attribute binding?"
questionTitle: "What is the difference between property and attribute binding?"
description: "Learn What is the difference between property and attribute binding? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "basics"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Property binding updates a live DOM property or directive input, such as `[disabled]`; attribute binding writes an HTML attribute, such as `[attr.aria-label]`. Use attributes for semantics that have no matching property or for ARIA values."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/basics/basics-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Basics"
    link: /angular-interview-questions/basics/
  - label: "What is the difference between property and attribute binding?"
prev:
  text: "How do you define API models and mappers?"
  link: "/angular-interview-questions/architecture/architecture-question-7"
next:
  text: "What is the `OnPush` change-detection strategy?"
  link: "/angular-interview-questions/components/components-question-8"
---
# What is the difference between property and attribute binding?

## Answer

Property binding updates a live DOM property or directive input, such as `[disabled]`; attribute binding writes an HTML attribute, such as `[attr.aria-label]`. Use attributes for semantics that have no matching property or for ARIA values.

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
