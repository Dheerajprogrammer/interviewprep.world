---
layout: doc
question: true
title: "How do you prioritize a first version?"
questionTitle: "How do you prioritize a first version?"
description: "Learn How do you prioritize a first version? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: easy
experienceLevel: junior
tags: ["system-design", "requirements"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Ship the smallest coherent workflow that proves user value and leaves a safe extension path. Defer scale, personalization, and edge features only after identifying the non-negotiable security, accessibility, and reliability baseline."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/requirements/requirements-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Requirements & Estimation"
    link: /frontend-system-design/requirements/
  - label: "How do you prioritize a first version?"
prev:
  text: "How do you deploy safely?"
  link: "/frontend-system-design/architecture/architecture-question-9"
next:
  text: "How do you build a performance budget?"
  link: "/frontend-system-design/performance/performance-question-10"
---
# How do you prioritize a first version?

## Answer

Ship the smallest coherent workflow that proves user value and leaves a safe extension path. Defer scale, personalization, and edge features only after identifying the non-negotiable security, accessibility, and reliability baseline.

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
