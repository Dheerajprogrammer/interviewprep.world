---
layout: doc
question: true
title: "What is the `OnPush` change-detection strategy?"
questionTitle: "What is the `OnPush` change-detection strategy?"
description: "Learn What is the `OnPush` change-detection strategy? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "OnPush tells Angular to check a component when an input reference changes, an event occurs in its view, a signal it reads changes, or it is explicitly marked. It encourages immutable updates and reduces unnecessary checking."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "What is the `OnPush` change-detection strategy?"
prev:
  text: "What is the difference between property and attribute binding?"
  link: "/angular-interview-questions/basics/basics-question-8"
next:
  text: "How do HTTP interceptors work?"
  link: "/angular-interview-questions/services/services-question-8"
---
# What is the `OnPush` change-detection strategy?

## Answer

OnPush tells Angular to check a component when an input reference changes, an event occurs in its view, a signal it reads changes, or it is explicitly marked. It encourages immutable updates and reduces unnecessary checking.

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
