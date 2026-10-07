---
layout: doc
question: true
title: "How do branches work in Git?"
questionTitle: "How do branches work in Git?"
description: "Learn How do branches work in Git? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: hard
experienceLevel: senior
tags: ["devops", "git"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A branch is a movable name pointing to a commit. Creating a branch is inexpensive; new commits advance that branch pointer, letting work proceed independently until it is reviewed and integrated."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/git/git-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Git"
    link: /devops-cloud-interview-questions/git/
  - label: "How do branches work in Git?"
prev:
  text: "How do workflows, jobs, and steps differ?"
  link: "/devops-cloud-interview-questions/github-actions/github-actions-question-2"
next:
  text: "How do Docker layers and caching work?"
  link: "/devops-cloud-interview-questions/docker/docker-question-3"
---
# How do branches work in Git?

## Answer

A branch is a movable name pointing to a commit. Creating a branch is inexpensive; new commits advance that branch pointer, letting work proceed independently until it is reviewed and integrated.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
