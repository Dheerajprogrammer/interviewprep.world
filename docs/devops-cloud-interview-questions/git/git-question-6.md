---
layout: doc
question: true
title: "What is Git reset versus revert?"
questionTitle: "What is Git reset versus revert?"
description: "Learn What is Git reset versus revert? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: hard
experienceLevel: senior
tags: ["devops", "git"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`git reset` moves a branch pointer and can rewrite local history; `git revert` adds a new commit that undoes an earlier commit while preserving shared history. Prefer revert for changes that have already been pushed to a shared branch."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/git/git-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Git"
    link: /devops-cloud-interview-questions/git/
  - label: "What is Git reset versus revert?"
prev:
  text: "How do you cache dependencies?"
  link: "/devops-cloud-interview-questions/github-actions/github-actions-question-5"
next:
  text: "How do you pass configuration into a container?"
  link: "/devops-cloud-interview-questions/docker/docker-question-6"
---
# What is Git reset versus revert?

## Answer

`git reset` moves a branch pointer and can rewrite local history; `git revert` adds a new commit that undoes an earlier commit while preserving shared history. Prefer revert for changes that have already been pushed to a shared branch.

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
