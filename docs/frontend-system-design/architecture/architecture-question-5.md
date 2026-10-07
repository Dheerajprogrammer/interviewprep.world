---
layout: doc
question: true
title: "How do you make a frontend resilient to backend changes?"
questionTitle: "How do you make a frontend resilient to backend changes?"
description: "Learn How do you make a frontend resilient to backend changes? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use backward-compatible contracts, runtime validation at the boundary, tolerant handling of unknown fields, controlled fallbacks for missing optional data, and contract testing. Do not assume a typed client guarantees a compatible server response."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/architecture/architecture-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Architecture & Operations"
    link: /frontend-system-design/architecture/
  - label: "How do you make a frontend resilient to backend changes?"
prev:
  text: "How do you handle reconnects?"
  link: "/frontend-system-design/realtime/realtime-question-5"
next:
  text: "How do you define success metrics?"
  link: "/frontend-system-design/requirements/requirements-question-6"
---
# How do you make a frontend resilient to backend changes?

## Answer

Use backward-compatible contracts, runtime validation at the boundary, tolerant handling of unknown fields, controlled fallbacks for missing optional data, and contract testing. Do not assume a typed client guarantees a compatible server response.

## Example

```text
features/checkout/      # user-facing workflow
shared/ui/              # accessible primitives
platform/api/           # transport and auth boundary
```

Feature ownership stays clear while shared code is limited to genuinely reusable contracts.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
