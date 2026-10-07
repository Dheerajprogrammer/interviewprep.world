---
layout: doc
question: true
title: "What is the difference between a component and a directive?"
questionTitle: "What is the difference between a component and a directive?"
description: "Learn What is the difference between a component and a directive? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A component is a directive with its own template and view; an attribute directive adds behavior or styling to an existing host element. Use a component for a self-contained UI unit and a directive for reusable behavior that does not own markup."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "What is the difference between a component and a directive?"
prev:
  text: "What is Angular?"
  link: "/angular-interview-questions/basics/basics-question-1"
next:
  text: "What is an Angular service?"
  link: "/angular-interview-questions/services/services-question-1"
---
# What is the difference between a component and a directive?

## Answer

A component is a directive with its own template and view; an attribute directive adds behavior or styling to an existing host element. Use a component for a self-contained UI unit and a directive for reusable behavior that does not own markup.

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
