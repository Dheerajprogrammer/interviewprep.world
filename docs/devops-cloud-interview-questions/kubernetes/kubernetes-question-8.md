---
layout: doc
question: true
title: "How do rolling updates work?"
questionTitle: "How do rolling updates work?"
description: "Learn How do rolling updates work? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: easy
experienceLevel: junior
tags: ["devops", "kubernetes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Deployment gradually creates new Pods and removes old ones according to surge and unavailable settings, waiting for readiness before progressing. Use compatible changes and monitor rollout status so a bad version can be paused or rolled back."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/kubernetes/kubernetes-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Kubernetes"
    link: /devops-cloud-interview-questions/kubernetes/
  - label: "How do rolling updates work?"
prev:
  text: "How do you secure a Docker container?"
  link: "/devops-cloud-interview-questions/docker/docker-question-8"
next:
  text: "What is CloudWatch used for?"
  link: "/devops-cloud-interview-questions/aws/aws-question-8"
---
# How do rolling updates work?

## Answer

A Deployment gradually creates new Pods and removes old ones according to surge and unavailable settings, waiting for readiness before progressing. Use compatible changes and monitor rollout status so a bad version can be paused or rolled back.

## Example

Consider a production Kubernetes change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
