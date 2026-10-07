---
layout: doc
question: true
title: "What is Docker?"
questionTitle: "What is Docker?"
description: "Learn What is Docker? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: medium
experienceLevel: mid
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Docker packages an application and its dependencies into a portable image that runs as an isolated container. It improves deployment consistency, but it does not replace secure configuration, observability, or orchestration."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "What is Docker?"
prev:
  text: "What is the difference between Git merge and rebase?"
  link: "/devops-cloud-interview-questions/git/git-question-1"
next:
  text: "What is Kubernetes?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-1"
---
# What is Docker?

## Answer

Docker packages an application and its dependencies into a portable image that runs as an isolated container. It improves deployment consistency, but it does not replace secure configuration, observability, or orchestration.

## Example

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
USER node
WORKDIR /app
COPY --from=build --chown=node:node /app/dist ./dist
CMD ["node", "dist/server.js"]
```

A multi-stage build keeps build tooling out of the final non-root runtime image.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
