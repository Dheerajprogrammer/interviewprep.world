---
layout: doc
question: true
title: "What is a detached HEAD?"
questionTitle: "What is a detached HEAD?"
description: "Learn What is a detached HEAD? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: medium
experienceLevel: mid
tags: ["devops", "git"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "HEAD is detached when it points directly to a commit rather than a branch. You can inspect or experiment safely, but create a branch before making work you intend to keep because new commits otherwise have no branch name."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/git/git-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Git"
    link: /devops-cloud-interview-questions/git/
  - label: "What is a detached HEAD?"
prev:
  text: "What are reusable workflows?"
  link: "/devops-cloud-interview-questions/github-actions/github-actions-question-7"
next:
  text: "How do you secure a Docker container?"
  link: "/devops-cloud-interview-questions/docker/docker-question-8"
---
# What is a detached HEAD?

## Answer

HEAD is detached when it points directly to a commit rather than a branch. You can inspect or experiment safely, but create a branch before making work you intend to keep because new commits otherwise have no branch name.

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
