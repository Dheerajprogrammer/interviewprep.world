---
layout: doc
question: true
title: "What is `EventEmitter` used for?"
questionTitle: "What is `EventEmitter` used for?"
description: "Learn What is `EventEmitter` used for? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "EventEmitter is Angular’s event stream utility commonly used by an output to emit component events. It communicates that something happened; the parent decides how to update application state."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "What is `EventEmitter` used for?"
prev:
  text: "What is a standalone component?"
  link: "/angular-interview-questions/basics/basics-question-3"
next:
  text: "What does `providedIn: root` mean?"
  link: "/angular-interview-questions/services/services-question-3"
---
# What is `EventEmitter` used for?

## Answer

EventEmitter is Angular’s event stream utility commonly used by an output to emit component events. It communicates that something happened; the parent decides how to update application state.

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
