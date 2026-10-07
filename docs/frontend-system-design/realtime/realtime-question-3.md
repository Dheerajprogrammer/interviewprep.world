---
layout: doc
question: true
title: "How do you design a collaborative editor?"
questionTitle: "How do you design a collaborative editor?"
description: "Learn How do you design a collaborative editor? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: medium
experienceLevel: mid
tags: ["system-design", "realtime"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Separate document model, presence, transport, persistence, and conflict resolution. Use operational transforms or CRDTs when concurrent offline edits must merge, and define permissions, ordering, snapshots, and recovery before optimizing the UI."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/realtime/realtime-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Real-time Experiences"
    link: /frontend-system-design/realtime/
  - label: "How do you design a collaborative editor?"
prev:
  text: "How do you handle stale data?"
  link: "/frontend-system-design/data/data-question-3"
next:
  text: "How do you manage feature flags?"
  link: "/frontend-system-design/architecture/architecture-question-3"
---
# How do you design a collaborative editor?

## Answer

Separate document model, presence, transport, persistence, and conflict resolution. Use operational transforms or CRDTs when concurrent offline edits must merge, and define permissions, ordering, snapshots, and recovery before optimizing the UI.

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
