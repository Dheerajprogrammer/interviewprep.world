---
layout: doc
question: true
title: "How do you handle reconnects?"
questionTitle: "How do you handle reconnects?"
description: "Learn How do you handle reconnects? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "realtime"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use exponential backoff with jitter, resume from the last acknowledged cursor where possible, reauthenticate on reconnect, and show connection state to users. Avoid reconnect storms after a shared outage."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/realtime/realtime-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Real-time Experiences"
    link: /frontend-system-design/realtime/
  - label: "How do you handle reconnects?"
prev:
  text: "How do you handle optimistic updates?"
  link: "/frontend-system-design/data/data-question-5"
next:
  text: "How do you make a frontend resilient to backend changes?"
  link: "/frontend-system-design/architecture/architecture-question-5"
---
# How do you handle reconnects?

## Answer

Use exponential backoff with jitter, resume from the last acknowledged cursor where possible, reauthenticate on reconnect, and show connection state to users. Avoid reconnect storms after a shared outage.

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
