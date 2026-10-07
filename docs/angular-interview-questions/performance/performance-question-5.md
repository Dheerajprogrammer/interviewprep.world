---
layout: doc
question: true
title: "How do pure pipes improve performance?"
questionTitle: "How do pure pipes improve performance?"
description: "Learn How do pure pipes improve performance? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A pure pipe runs only when an input reference or primitive value changes, so it can avoid repeated deterministic transformations. It must not depend on hidden mutable state, or its output can become stale."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "How do pure pipes improve performance?"
prev:
  text: "What is a computed signal?"
  link: "/angular-interview-questions/signals/signals-question-5"
next:
  text: "How do you organize core services?"
  link: "/angular-interview-questions/architecture/architecture-question-5"
---
# How do pure pipes improve performance?

## Answer

A pure pipe runs only when an input reference or primitive value changes, so it can avoid repeated deterministic transformations. It must not depend on hidden mutable state, or its output can become stale.

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
