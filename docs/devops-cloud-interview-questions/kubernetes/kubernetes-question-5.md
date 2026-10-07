---
layout: doc
question: true
title: "What are liveness and readiness probes?"
questionTitle: "What are liveness and readiness probes?"
description: "Learn What are liveness and readiness probes? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: easy
experienceLevel: junior
tags: ["devops", "kubernetes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A liveness probe tells Kubernetes when to restart a stuck container; a readiness probe tells it when a healthy container may receive traffic. Readiness should fail during startup, overload, or dependency unavailability without causing restart loops."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/kubernetes/kubernetes-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Kubernetes"
    link: /devops-cloud-interview-questions/kubernetes/
  - label: "What are liveness and readiness probes?"
prev:
  text: "How do Docker volumes work?"
  link: "/devops-cloud-interview-questions/docker/docker-question-5"
next:
  text: "How do VPCs and security groups work?"
  link: "/devops-cloud-interview-questions/aws/aws-question-5"
---
# What are liveness and readiness probes?

## Answer

A liveness probe tells Kubernetes when to restart a stuck container; a readiness probe tells it when a healthy container may receive traffic. Readiness should fail during startup, overload, or dependency unavailability without causing restart loops.

## Example

Consider a production Kubernetes change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
