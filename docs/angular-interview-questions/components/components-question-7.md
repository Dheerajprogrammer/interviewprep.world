---
layout: doc
question: true
title: "How do lifecycle hooks work?"
questionTitle: "How do lifecycle hooks work?"
description: "Learn How do lifecycle hooks work? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Angular calls lifecycle hooks at defined points, including input changes, view initialization, and destruction. Use `ngOnDestroy` to clean up external resources and prefer input setters or signals for straightforward reactive updates."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "How do lifecycle hooks work?"
prev:
  text: "What is data binding in Angular?"
  link: "/angular-interview-questions/basics/basics-question-7"
next:
  text: "What is `HttpClient`?"
  link: "/angular-interview-questions/services/services-question-7"
---
# How do lifecycle hooks work?

## Answer

Angular calls lifecycle hooks at defined points, including input changes, view initialization, and destruction. Use `ngOnDestroy` to clean up external resources and prefer input setters or signals for straightforward reactive updates.

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
