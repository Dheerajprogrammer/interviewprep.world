---
layout: doc
question: true
title: "How do you evolve a legacy frontend?"
questionTitle: "How do you evolve a legacy frontend?"
description: "Learn How do you evolve a legacy frontend? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: medium
experienceLevel: mid
tags: ["system-design", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Identify seams, add tests around critical behavior, migrate feature by feature behind stable interfaces, remove old paths after verification, and measure user and performance regressions throughout the transition."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/architecture/architecture-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Architecture & Operations"
    link: /frontend-system-design/architecture/
  - label: "How do you evolve a legacy frontend?"
prev:
  text: "How do you observe real-time reliability?"
  link: "/frontend-system-design/realtime/realtime-question-10"
---
# How do you evolve a legacy frontend?

## Answer

Identify seams, add tests around critical behavior, migrate feature by feature behind stable interfaces, remove old paths after verification, and measure user and performance regressions throughout the transition.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
