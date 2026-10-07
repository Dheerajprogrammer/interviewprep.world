---
layout: doc
question: true
title: "What is `ViewChild`?"
questionTitle: "What is `ViewChild`?"
description: "Learn What is `ViewChild`? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "ViewChild queries a directive, component, template, or element from a component’s own view. Use it for focused imperative integration such as a DOM API or child method, not as a substitute for normal input/output data flow."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "What is `ViewChild`?"
prev:
  text: "What is a decorator?"
  link: "/angular-interview-questions/basics/basics-question-5"
next:
  text: "How do you share state with a service?"
  link: "/angular-interview-questions/services/services-question-5"
---
# What is `ViewChild`?

## Answer

ViewChild queries a directive, component, template, or element from a component’s own view. Use it for focused imperative integration such as a DOM API or child method, not as a substitute for normal input/output data flow.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
