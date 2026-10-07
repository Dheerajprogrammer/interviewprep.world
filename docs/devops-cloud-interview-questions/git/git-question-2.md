---
layout: doc
question: true
title: "What is a Git commit?"
questionTitle: "What is a Git commit?"
description: "Learn What is a Git commit? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: medium
experienceLevel: mid
tags: ["devops", "git"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A Git commit is an immutable snapshot of the staged project state, with a parent reference, author information, message, and content hash. A small commit should represent one coherent, reviewable change."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/git/git-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Git"
    link: /devops-cloud-interview-questions/git/
  - label: "What is a Git commit?"
prev:
  text: "What are GitHub Actions?"
  link: "/devops-cloud-interview-questions/github-actions/github-actions-question-1"
next:
  text: "What is the difference between an image and a container?"
  link: "/devops-cloud-interview-questions/docker/docker-question-2"
---
# What is a Git commit?

## Answer

A Git commit is an immutable snapshot of the staged project state, with a parent reference, author information, message, and content hash. A small commit should represent one coherent, reviewable change.

## Example

```bash
git switch feature/search
git fetch origin
git rebase origin/main
# resolve and test conflicts if prompted
git push --force-with-lease
```

Rebasing a private feature branch onto the current main branch keeps its commits linear; `--force-with-lease` avoids overwriting work pushed by someone else.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
