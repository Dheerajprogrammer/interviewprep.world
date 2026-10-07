---
layout: doc
question: true
title: "How do you order real-time events?"
questionTitle: "How do you order real-time events?"
description: "Learn How do you order real-time events? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: medium
experienceLevel: mid
tags: ["system-design", "realtime"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a server-issued monotonic sequence or per-entity version, buffer only briefly when ordering can be recovered, and request a snapshot when events are missing. Arrival order alone is not a reliable ordering guarantee."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/realtime/realtime-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Real-time Experiences"
    link: /frontend-system-design/realtime/
  - label: "How do you order real-time events?"
prev:
  text: "How do you manage pagination?"
  link: "/frontend-system-design/data/data-question-6"
next:
  text: "How do you plan for accessibility?"
  link: "/frontend-system-design/architecture/architecture-question-6"
---
# How do you order real-time events?

## Answer

Use a server-issued monotonic sequence or per-entity version, buffer only briefly when ordering can be recovered, and request a snapshot when events are missing. Arrival order alone is not a reliable ordering guarantee.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
