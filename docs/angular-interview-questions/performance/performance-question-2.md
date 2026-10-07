---
layout: doc
question: true
title: "What does `OnPush` change detection do?"
questionTitle: "What does `OnPush` change detection do?"
description: "Learn What does `OnPush` change detection do? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "OnPush limits checks to meaningful triggers such as changed input references, events in the component, signals it reads, async-pipe emissions, or explicit marking. It rewards immutable data flow and component boundaries."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "What does `OnPush` change detection do?"
prev:
  text: "What is the difference between `signal`, `computed`, and `effect`?"
  link: "/angular-interview-questions/signals/signals-question-2"
next:
  text: "What is feature-based architecture?"
  link: "/angular-interview-questions/architecture/architecture-question-2"
---
# What does `OnPush` change detection do?

## Answer

OnPush limits checks to meaningful triggers such as changed input references, events in the component, signals it reads, async-pipe emissions, or explicit marking. It rewards immutable data flow and component boundaries.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
