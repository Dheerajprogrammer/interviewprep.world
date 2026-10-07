---
layout: doc
question: true
title: "How do you protect a main branch?"
questionTitle: "How do you protect a main branch?"
description: "Learn How do you protect a main branch? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: easy
experienceLevel: junior
tags: ["devops", "git"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Require pull requests, passing status checks, approvals, and up-to-date branches before merge; restrict force pushes and direct commits; and use CODEOWNERS or required reviewers for sensitive areas. Protection should match the branch’s deployment significance."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/git/git-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Git"
    link: /devops-cloud-interview-questions/git/
  - label: "How do you protect a main branch?"
prev:
  text: "How do you control workflow permissions?"
  link: "/devops-cloud-interview-questions/github-actions/github-actions-question-9"
next:
  text: "How do you debug a failing container?"
  link: "/devops-cloud-interview-questions/docker/docker-question-10"
---
# How do you protect a main branch?

## Answer

Require pull requests, passing status checks, approvals, and up-to-date branches before merge; restrict force pushes and direct commits; and use CODEOWNERS or required reviewers for sensitive areas. Protection should match the branch’s deployment significance.

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
