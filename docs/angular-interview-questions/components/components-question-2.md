---
layout: doc
question: true
title: "How do `@Input` and `@Output` work?"
questionTitle: "How do `@Input` and `@Output` work?"
description: "Learn How do `@Input` and `@Output` work? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`@Input` receives data from a parent and `@Output` exposes events for the parent to handle. This keeps components reusable by separating incoming state from outgoing intent."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "How do `@Input` and `@Output` work?"
prev:
  text: "What is the difference between Angular and AngularJS?"
  link: "/angular-interview-questions/basics/basics-question-2"
next:
  text: "Why are services usually injectable?"
  link: "/angular-interview-questions/services/services-question-2"
---
# How do `@Input` and `@Output` work?

## Answer

`@Input` receives data from a parent and `@Output` exposes events for the parent to handle. This keeps components reusable by separating incoming state from outgoing intent.

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
