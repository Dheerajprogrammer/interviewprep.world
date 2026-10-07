---
layout: doc
question: true
title: "How do you lazy load a feature?"
questionTitle: "How do you lazy load a feature?"
description: "Learn How do you lazy load a feature? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Configure a route with `loadComponent` or `loadChildren` so its code is fetched on navigation. Add loading and error UI, and split at user-meaningful route boundaries rather than creating tiny chunks everywhere."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "How do you lazy load a feature?"
prev:
  text: "When should you use an effect?"
  link: "/angular-interview-questions/signals/signals-question-6"
next:
  text: "How do you create reusable form controls?"
  link: "/angular-interview-questions/architecture/architecture-question-6"
---
# How do you lazy load a feature?

## Answer

Configure a route with `loadComponent` or `loadChildren` so its code is fetched on navigation. Add loading and error UI, and split at user-meaningful route boundaries rather than creating tiny chunks everywhere.

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
