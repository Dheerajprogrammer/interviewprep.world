---
layout: doc
question: true
title: "How do you track list items efficiently?"
questionTitle: "How do you track list items efficiently?"
description: "Learn How do you track list items efficiently? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Track each repeated item with a stable unique ID so Angular can preserve existing DOM nodes when items are reordered or updated. Do not track by index when the list can change order or receive insertions."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "How do you track list items efficiently?"
prev:
  text: "How do signals work with OnPush?"
  link: "/angular-interview-questions/signals/signals-question-3"
next:
  text: "How do you design a shared module or shared library?"
  link: "/angular-interview-questions/architecture/architecture-question-3"
---
# How do you track list items efficiently?

## Answer

Track each repeated item with a stable unique ID so Angular can preserve existing DOM nodes when items are reordered or updated. Do not track by index when the list can change order or receive insertions.

## Example

```html
@for (user of users; track user.id) {
  <app-user-row [user]="user" />
}
```

Tracking by a stable id lets Angular preserve DOM nodes when a list changes.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
