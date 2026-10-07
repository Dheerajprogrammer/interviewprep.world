---
layout: doc
question: true
title: "How does Java garbage collection work?"
questionTitle: "How does Java garbage collection work?"
description: "Learn How does Java garbage collection work? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: hard
experienceLevel: senior
tags: ["backend", "java"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The JVM automatically reclaims objects no longer reachable from GC roots, using generational collectors optimized for short-lived allocations. Developers still manage resources such as files and sockets explicitly with try-with-resources."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/java/java-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Java"
    link: /backend-interview-questions/java/
  - label: "How does Java garbage collection work?"
prev:
  text: "How do you handle errors centrally in Express?"
  link: "/backend-interview-questions/express/express-question-4"
next:
  text: "How do you create a REST controller?"
  link: "/backend-interview-questions/spring-boot/spring-boot-question-4"
---
# How does Java garbage collection work?

## Answer

The JVM automatically reclaims objects no longer reachable from GC roots, using generational collectors optimized for short-lived allocations. Developers still manage resources such as files and sockets explicitly with try-with-resources.

## Example

Consider a production Java change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
