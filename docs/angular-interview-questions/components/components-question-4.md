---
layout: doc
question: true
title: "What is content projection?"
questionTitle: "What is content projection?"
description: "Learn What is content projection? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Content projection lets a parent provide markup that a child component renders through `ng-content`. It is useful for reusable shells such as cards, dialogs, and layout components without forcing callers into a fixed template."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "What is content projection?"
prev:
  text: "What are Angular modules?"
  link: "/angular-interview-questions/basics/basics-question-4"
next:
  text: "What is the difference between a service and a factory provider?"
  link: "/angular-interview-questions/services/services-question-4"
---
# What is content projection?

## Answer

Content projection lets a parent provide markup that a child component renders through `ng-content`. It is useful for reusable shells such as cards, dialogs, and layout components without forcing callers into a fixed template.

## Example

```ts
@Component({ selector: "app-save", template: `<button (click)="saved.emit()">Save</button>` })
export class SaveComponent { @Output() saved = new EventEmitter<void>() }
```

The parent supplies data through inputs and reacts to child events through outputs.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
