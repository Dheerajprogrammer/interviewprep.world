---
layout: doc
question: true
title: "How do you handle conflicts?"
questionTitle: "How do you handle conflicts?"
description: "Learn How do you handle conflicts? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: medium
experienceLevel: mid
tags: ["system-design", "realtime"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Choose a domain-specific policy such as last-write-wins, field-level merge, user resolution, or CRDT merge; surface meaningful conflicts to users; and preserve enough history to recover. Do not silently discard valuable concurrent edits."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/realtime/realtime-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Real-time Experiences"
    link: /frontend-system-design/realtime/
  - label: "How do you handle conflicts?"
prev:
  text: "How do you handle API errors?"
  link: "/frontend-system-design/data/data-question-9"
next:
  text: "How do you deploy safely?"
  link: "/frontend-system-design/architecture/architecture-question-9"
---
# How do you handle conflicts?

## Answer

Choose a domain-specific policy such as last-write-wins, field-level merge, user resolution, or CRDT merge; surface meaningful conflicts to users; and preserve enough history to recover. Do not silently discard valuable concurrent edits.

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
