---
layout: doc
question: true
title: "How does Angular change detection work?"
questionTitle: "How does Angular change detection work?"
description: "Learn How does Angular change detection work? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Angular checks bindings to determine whether rendered output needs updating after an event, async notification, signal change, or explicit trigger. Keep templates cheap and state updates predictable so a check does not do unnecessary work."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "How does Angular change detection work?"
prev:
  text: "What are Angular Signals?"
  link: "/angular-interview-questions/signals/angular-signals"
next:
  text: "How do you structure a large Angular application?"
  link: "/angular-interview-questions/architecture/architecture-question-1"
---
# How does Angular change detection work?

## Answer

Angular checks bindings to determine whether rendered output needs updating after an event, async notification, signal change, or explicit trigger. Keep templates cheap and state updates predictable so a check does not do unnecessary work.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
