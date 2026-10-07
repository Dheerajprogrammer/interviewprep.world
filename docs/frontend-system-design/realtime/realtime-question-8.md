---
layout: doc
question: true
title: "How do you design presence indicators?"
questionTitle: "How do you design presence indicators?"
description: "Learn How do you design presence indicators? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "realtime"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Treat presence as approximate and ephemeral: send heartbeats, expire inactive clients, scope visibility by permission, and avoid implying exact availability. Update UI at a bounded rate to prevent churn."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/realtime/realtime-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Real-time Experiences"
    link: /frontend-system-design/realtime/
  - label: "How do you design presence indicators?"
prev:
  text: "How do you design offline support?"
  link: "/frontend-system-design/data/data-question-8"
next:
  text: "How do you handle authentication state?"
  link: "/frontend-system-design/architecture/architecture-question-8"
---
# How do you design presence indicators?

## Answer

Treat presence as approximate and ephemeral: send heartbeats, expire inactive clients, scope visibility by permission, and avoid implying exact availability. Update UI at a bounded rate to prevent churn.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
