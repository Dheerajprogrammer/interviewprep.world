---
layout: doc
question: true
title: "How do you reduce Docker image size?"
questionTitle: "How do you reduce Docker image size?"
description: "Learn How do you reduce Docker image size? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: medium
experienceLevel: mid
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a minimal trusted base image, multi-stage builds, a `.dockerignore`, and only production dependencies in the final image. Smaller images build, scan, transfer, and start faster."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "How do you reduce Docker image size?"
prev:
  text: "How do you use git stash?"
  link: "/devops-cloud-interview-questions/git/git-question-7"
next:
  text: "What are requests and limits?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-7"
---
# How do you reduce Docker image size?

## Answer

Use a minimal trusted base image, multi-stage builds, a `.dockerignore`, and only production dependencies in the final image. Smaller images build, scan, transfer, and start faster.

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
