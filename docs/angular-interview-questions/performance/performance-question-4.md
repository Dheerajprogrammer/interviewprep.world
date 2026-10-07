---
layout: doc
question: true
title: "How do you avoid expensive template expressions?"
questionTitle: "How do you avoid expensive template expressions?"
description: "Learn How do you avoid expensive template expressions? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keep templates declarative and cheap: precompute or use computed signals, pure pipes, or selectors for derived values, and avoid calling allocating or expensive methods during every change-detection pass."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "How do you avoid expensive template expressions?"
prev:
  text: "How do you update a writable signal?"
  link: "/angular-interview-questions/signals/signals-question-4"
next:
  text: "How do you separate smart and presentational components?"
  link: "/angular-interview-questions/architecture/architecture-question-4"
---
# How do you avoid expensive template expressions?

## Answer

Keep templates declarative and cheap: precompute or use computed signals, pure pipes, or selectors for derived values, and avoid calling allocating or expensive methods during every change-detection pass.

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
