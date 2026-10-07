---
layout: doc
question: true
title: "How do you roll back a deployment?"
questionTitle: "How do you roll back a deployment?"
description: "Learn How do you roll back a deployment? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: hard
experienceLevel: senior
tags: ["devops", "ci-cd"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "CI/CD automates integration, verification, and delivery so every change is reproducible. A safe pipeline runs fast checks first, protects secrets, produces an immutable artifact, and supports observable rollout and rollback."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/ci-cd/ci-cd-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "CI/CD"
    link: /devops-cloud-interview-questions/ci-cd/
  - label: "How do you roll back a deployment?"
prev:
  text: "How do you monitor applications in Azure?"
  link: "/devops-cloud-interview-questions/azure/azure-question-7"
next:
  text: "What are reusable workflows?"
  link: "/devops-cloud-interview-questions/github-actions/github-actions-question-7"
---
# How do you roll back a deployment?

## Answer

CI/CD automates integration, verification, and delivery so every change is reproducible. A safe pipeline runs fast checks first, protects secrets, produces an immutable artifact, and supports observable rollout and rollback.

## Example

Consider a production CI/CD change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
