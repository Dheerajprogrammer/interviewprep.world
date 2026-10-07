---
layout: doc
question: true
title: "How do you share data between jobs?"
questionTitle: "How do you share data between jobs?"
description: "Learn How do you share data between jobs? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: easy
experienceLevel: junior
tags: ["devops", "github-actions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "GitHub Actions automates workflows from repository events using jobs, steps, runners, and actions. Pin trusted actions, grant minimal token permissions, cache safely, and keep deploy credentials out of workflow code."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/github-actions/github-actions-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "GitHub Actions"
    link: /devops-cloud-interview-questions/github-actions/
  - label: "How do you share data between jobs?"
prev:
  text: "How do you design a reliable deployment pipeline?"
  link: "/devops-cloud-interview-questions/ci-cd/ci-cd-question-4"
next:
  text: "How do you resolve a merge conflict?"
  link: "/devops-cloud-interview-questions/git/git-question-5"
---
# How do you share data between jobs?

## Answer

GitHub Actions automates workflows from repository events using jobs, steps, runners, and actions. Pin trusted actions, grant minimal token permissions, cache safely, and keep deploy credentials out of workflow code.

## Example

Consider a production GitHub Actions change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
