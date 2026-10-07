---
layout: doc
question: true
title: "How do you secure a Docker container?"
questionTitle: "How do you secure a Docker container?"
description: "Learn How do you secure a Docker container? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: hard
experienceLevel: senior
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Run as a non-root user, use a minimal patched base image, drop unneeded Linux capabilities, make the filesystem read-only where possible, and never put secrets in an image layer or build argument history."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "How do you secure a Docker container?"
prev:
  text: "What is a detached HEAD?"
  link: "/devops-cloud-interview-questions/git/git-question-8"
next:
  text: "How do rolling updates work?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-8"
---
# How do you secure a Docker container?

## Answer

Run as a non-root user, use a minimal patched base image, drop unneeded Linux capabilities, make the filesystem read-only where possible, and never put secrets in an image layer or build argument history.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
