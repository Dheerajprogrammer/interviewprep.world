---
layout: doc
question: true
title: "What is the difference between view and content children?"
questionTitle: "What is the difference between view and content children?"
description: "Learn What is the difference between view and content children? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "View children are declared in a component’s own template; content children are projected into the component by its parent. Query them with ViewChild or ContentChild according to where the target is declared."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "What is the difference between view and content children?"
prev:
  text: "What is a component lifecycle?"
  link: "/angular-interview-questions/basics/basics-question-6"
next:
  text: "How do you test an Angular service?"
  link: "/angular-interview-questions/services/services-question-6"
---
# What is the difference between view and content children?

## Answer

View children are declared in a component’s own template; content children are projected into the component by its parent. Query them with ViewChild or ContentChild according to where the target is declared.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
