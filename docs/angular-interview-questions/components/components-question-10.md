---
layout: doc
question: true
title: "How do you communicate between sibling components?"
questionTitle: "How do you communicate between sibling components?"
description: "Learn How do you communicate between sibling components? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Lift shared state to their nearest common parent, then pass data down through inputs and events up through outputs. Use a shared service or store only when the state genuinely spans a wider feature boundary."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "How do you communicate between sibling components?"
prev:
  text: "What are pipes?"
  link: "/angular-interview-questions/basics/basics-question-10"
next:
  text: "When should a service be stateless?"
  link: "/angular-interview-questions/services/services-question-10"
---
# How do you communicate between sibling components?

## Answer

Lift shared state to their nearest common parent, then pass data down through inputs and events up through outputs. Use a shared service or store only when the state genuinely spans a wider feature boundary.

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
