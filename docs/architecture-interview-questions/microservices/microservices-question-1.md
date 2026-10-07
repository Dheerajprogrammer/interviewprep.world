---
layout: doc
question: true
title: "What are microservices?"
questionTitle: "What are microservices?"
description: "Learn What are microservices? with answers, examples, and real interview scenarios for Architecture interviews."
difficulty: easy
experienceLevel: junior
tags: ["architecture", "microservices"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Microservices are independently deployable services organized around business capabilities, each owning its runtime and usually its data. They trade simple deployment boundaries for distributed-system complexity."
outline: deep
canonical: "https://interviewprep.world/architecture-interview-questions/microservices/microservices-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Architecture"
    link: /architecture-interview-questions/
  - label: "Microservices"
    link: /architecture-interview-questions/microservices/
  - label: "What are microservices?"
next:
  text: "What is a distributed system?"
  link: "/architecture-interview-questions/distributed-systems/distributed-systems-question-1"
---
# What are microservices?

## Answer

Microservices are independently deployable services organized around business capabilities, each owning its runtime and usually its data. They trade simple deployment boundaries for distributed-system complexity.

## Example

Consider a production microservices change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
