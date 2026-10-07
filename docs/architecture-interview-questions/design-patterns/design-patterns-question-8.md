---
layout: doc
question: true
title: "When is the singleton pattern appropriate?"
questionTitle: "When is the singleton pattern appropriate?"
description: "Learn When is the singleton pattern appropriate? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: medium
experienceLevel: mid
tags: ["architecture", "design-patterns"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/design-patterns/design-patterns-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Design Patterns"
    link: /architecture-interview-questions/design-patterns/
  - label: "When is the singleton pattern appropriate?"
prev:
  text: "How do you document an API?"
  link: "/architecture-interview-questions/api-design/api-design-question-8"
next:
  text: "How do you manage shared data?"
  link: "/architecture-interview-questions/microservices/microservices-question-9"
---
# When is the singleton pattern appropriate?

## Answer

Use a singleton only for truly process-wide shared infrastructure with a clear lifecycle, such as a configured metrics registry. Prefer explicit dependency injection for ordinary services to avoid hidden global state.

## Example

Consider a production design patterns change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
