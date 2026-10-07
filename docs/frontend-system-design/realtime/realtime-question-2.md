---
layout: doc
question: true
title: "How do WebSockets compare with SSE?"
questionTitle: "How do WebSockets compare with SSE?"
description: "Learn How do WebSockets compare with SSE? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "realtime"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "WebSockets provide bidirectional persistent messaging; Server-Sent Events provide server-to-client streaming over HTTP with simpler reconnect behavior. Choose SSE for one-way updates and WebSockets when the client must send frequent real-time messages."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/realtime/realtime-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Real-time Experiences"
    link: /frontend-system-design/realtime/
  - label: "How do WebSockets compare with SSE?"
prev:
  text: "How do you design a client-side cache?"
  link: "/frontend-system-design/data/data-question-2"
next:
  text: "How do you organize a micro-frontend architecture?"
  link: "/frontend-system-design/architecture/architecture-question-2"
---
# How do WebSockets compare with SSE?

## Answer

WebSockets provide bidirectional persistent messaging; Server-Sent Events provide server-to-client streaming over HTTP with simpler reconnect behavior. Choose SSE for one-way updates and WebSockets when the client must send frequent real-time messages.

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
