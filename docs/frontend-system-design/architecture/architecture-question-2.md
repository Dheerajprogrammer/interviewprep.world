---
layout: doc
question: true
title: "How do you organize a micro-frontend architecture?"
questionTitle: "How do you organize a micro-frontend architecture?"
description: "Learn How do you organize a micro-frontend architecture? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Split only at stable team and domain boundaries, define shared runtime contracts for routing, auth, design tokens, and observability, and preserve a coherent user experience. A modular monolith is often simpler until independent deployment is truly needed."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/architecture/architecture-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Architecture & Operations"
    link: /frontend-system-design/architecture/
  - label: "How do you organize a micro-frontend architecture?"
prev:
  text: "How do WebSockets compare with SSE?"
  link: "/frontend-system-design/realtime/realtime-question-2"
next:
  text: "What non-functional requirements matter for frontend systems?"
  link: "/frontend-system-design/requirements/requirements-question-3"
---
# How do you organize a micro-frontend architecture?

## Answer

Split only at stable team and domain boundaries, define shared runtime contracts for routing, auth, design tokens, and observability, and preserve a coherent user experience. A modular monolith is often simpler until independent deployment is truly needed.

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
