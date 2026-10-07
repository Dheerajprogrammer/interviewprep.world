---
layout: doc
question: true
title: "How do you use git stash?"
questionTitle: "How do you use git stash?"
description: "Learn How do you use git stash? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: easy
experienceLevel: junior
tags: ["devops", "git"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use `git stash` to temporarily save uncommitted changes so you can switch context without creating a partial commit. Apply or pop the stash later, and prefer a small WIP commit or branch when the work must be shared or kept for long."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/git/git-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Git"
    link: /devops-cloud-interview-questions/git/
  - label: "How do you use git stash?"
prev:
  text: "How do you use secrets safely?"
  link: "/devops-cloud-interview-questions/github-actions/github-actions-question-6"
next:
  text: "How do you reduce Docker image size?"
  link: "/devops-cloud-interview-questions/docker/docker-question-7"
---
# How do you use git stash?

## Answer

Use `git stash` to temporarily save uncommitted changes so you can switch context without creating a partial commit. Apply or pop the stash later, and prefer a small WIP commit or branch when the work must be shared or kept for long.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
