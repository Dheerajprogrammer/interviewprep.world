---
layout: doc
question: true
title: "How do you reduce bundle size?"
questionTitle: "How do you reduce bundle size?"
description: "Learn How do you reduce bundle size? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Lazy-load features, remove unused dependencies, use production builds and modern targets, import only required library pieces, optimize assets, and inspect bundle analysis before making assumptions about the largest cost."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "How do you reduce bundle size?"
prev:
  text: "How do you avoid effects that write state?"
  link: "/angular-interview-questions/signals/signals-question-9"
next:
  text: "How do you test Angular components and services?"
  link: "/angular-interview-questions/architecture/architecture-question-9"
---
# How do you reduce bundle size?

## Answer

Lazy-load features, remove unused dependencies, use production builds and modern targets, import only required library pieces, optimize assets, and inspect bundle analysis before making assumptions about the largest cost.

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
