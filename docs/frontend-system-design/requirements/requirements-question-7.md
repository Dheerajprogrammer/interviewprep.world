---
layout: doc
question: true
title: "How do you choose an architecture?"
questionTitle: "How do you choose an architecture?"
description: "Learn How do you choose an architecture? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "requirements"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Choose the simplest architecture that meets clarified constraints, team capabilities, and expected change rate. Compare alternatives by data ownership, deployment independence, performance, failure isolation, and operational cost—not novelty."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/requirements/requirements-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Requirements & Estimation"
    link: /frontend-system-design/requirements/
  - label: "How do you choose an architecture?"
prev:
  text: "How do you plan for accessibility?"
  link: "/frontend-system-design/architecture/architecture-question-6"
next:
  text: "How do you measure Core Web Vitals?"
  link: "/frontend-system-design/performance/performance-question-7"
---
# How do you choose an architecture?

## Answer

Choose the simplest architecture that meets clarified constraints, team capabilities, and expected change rate. Compare alternatives by data ownership, deployment independence, performance, failure isolation, and operational cost—not novelty.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
