---
layout: doc
question: true
title: "How do you debug a failing container?"
questionTitle: "How do you debug a failing container?"
description: "Learn How do you debug a failing container? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: medium
experienceLevel: mid
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Start with container logs, exit code, image and environment configuration, then inspect process state and network connectivity. Reproduce with the same image and command, and verify health-check failures separately from application crashes."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "How do you debug a failing container?"
prev:
  text: "How do you protect a main branch?"
  link: "/devops-cloud-interview-questions/git/git-question-10"
next:
  text: "How do you debug a failing Pod?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-10"
---
# How do you debug a failing container?

## Answer

Start with container logs, exit code, image and environment configuration, then inspect process state and network connectivity. Reproduce with the same image and command, and verify health-check failures separately from application crashes.

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
