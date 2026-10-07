---
layout: doc
question: true
title: "What functional requirements should you clarify?"
questionTitle: "What functional requirements should you clarify?"
description: "Learn What functional requirements should you clarify? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "requirements"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Clarify the users, primary flows, data shown and changed, real-time needs, roles and permissions, offline behavior, error states, and success criteria. Separate must-have behavior from nice-to-have scope before choosing architecture."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/requirements/requirements-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Requirements & Estimation"
    link: /frontend-system-design/requirements/
  - label: "What functional requirements should you clarify?"
prev:
  text: "How would you design a scalable design system?"
  link: "/frontend-system-design/architecture/architecture-question-1"
next:
  text: "How do you optimize initial page load?"
  link: "/frontend-system-design/performance/performance-question-2"
---
# What functional requirements should you clarify?

## Answer

Clarify the users, primary flows, data shown and changed, real-time needs, roles and permissions, offline behavior, error states, and success criteria. Separate must-have behavior from nice-to-have scope before choosing architecture.

## Example

```text
Browser → CDN → Web app → API gateway → services
                 ↘ analytics / error monitoring
```

Start with the request path, then add only the components required by the clarified requirements.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
