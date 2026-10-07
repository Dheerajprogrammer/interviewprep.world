---
layout: doc
question: true
title: "How do you reconcile real-time updates?"
questionTitle: "How do you reconcile real-time updates?"
description: "Learn How do you reconcile real-time updates? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "realtime"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Apply updates using version, sequence, or timestamp rules, ignore duplicates, and refetch or resync when a gap is detected. Keep local optimistic changes distinguishable until the server confirms their canonical result."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/realtime/realtime-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Real-time Experiences"
    link: /frontend-system-design/realtime/
  - label: "How do you reconcile real-time updates?"
prev:
  text: "How do you design infinite scrolling?"
  link: "/frontend-system-design/data/data-question-4"
next:
  text: "How do you define frontend API boundaries?"
  link: "/frontend-system-design/architecture/architecture-question-4"
---
# How do you reconcile real-time updates?

## Answer

Apply updates using version, sequence, or timestamp rules, ignore duplicates, and refetch or resync when a gap is detected. Keep local optimistic changes distinguishable until the server confirms their canonical result.

## Example

```ts
if (event.sequence > lastSequence) {
  apply(event)
  lastSequence = event.sequence
}
```

A monotonic sequence number lets the client ignore duplicate or out-of-order events.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
