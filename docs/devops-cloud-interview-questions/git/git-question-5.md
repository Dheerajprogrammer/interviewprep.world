---
layout: doc
question: true
title: "How do you resolve a merge conflict?"
questionTitle: "How do you resolve a merge conflict?"
description: "Learn How do you resolve a merge conflict? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: medium
experienceLevel: mid
tags: ["devops", "git"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "First understand both changes and the desired behavior, then edit the conflicted file to a single correct result, run relevant tests, stage the resolution, and complete the merge or rebase. Never resolve by choosing a side blindly."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/git/git-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Git"
    link: /devops-cloud-interview-questions/git/
  - label: "How do you resolve a merge conflict?"
prev:
  text: "How do you share data between jobs?"
  link: "/devops-cloud-interview-questions/github-actions/github-actions-question-4"
next:
  text: "How do Docker volumes work?"
  link: "/devops-cloud-interview-questions/docker/docker-question-5"
---
# How do you resolve a merge conflict?

## Answer

First understand both changes and the desired behavior, then edit the conflicted file to a single correct result, run relevant tests, stage the resolution, and complete the merge or rebase. Never resolve by choosing a side blindly.

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
