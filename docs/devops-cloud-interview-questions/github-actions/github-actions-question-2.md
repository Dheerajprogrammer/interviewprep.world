---
layout: doc
question: true
title: "How do workflows, jobs, and steps differ?"
questionTitle: "How do workflows, jobs, and steps differ?"
description: "Learn How do workflows, jobs, and steps differ? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: medium
experienceLevel: mid
tags: ["devops", "github-actions"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "GitHub Actions automates workflows from repository events using jobs, steps, runners, and actions. Pin trusted actions, grant minimal token permissions, cache safely, and keep deploy credentials out of workflow code."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/github-actions/github-actions-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "GitHub Actions"
    link: /devops-cloud-interview-questions/github-actions/
  - label: "How do workflows, jobs, and steps differ?"
prev:
  text: "What should a continuous integration pipeline include?"
  link: "/devops-cloud-interview-questions/ci-cd/ci-cd-question-2"
next:
  text: "How do branches work in Git?"
  link: "/devops-cloud-interview-questions/git/git-question-3"
---
# How do workflows, jobs, and steps differ?

## Answer

GitHub Actions automates workflows from repository events using jobs, steps, runners, and actions. Pin trusted actions, grant minimal token permissions, cache safely, and keep deploy credentials out of workflow code.

## Example

Consider a production GitHub Actions change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
