---
layout: doc
question: true
title: "How do Docker volumes work?"
questionTitle: "How do Docker volumes work?"
description: "Learn How do Docker volumes work? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: hard
experienceLevel: senior
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Volumes store data outside a container’s writable layer so it survives container replacement and can be managed by Docker. Use named volumes for durable service data and bind mounts mainly for local development."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "How do Docker volumes work?"
prev:
  text: "How do you resolve a merge conflict?"
  link: "/devops-cloud-interview-questions/git/git-question-5"
next:
  text: "What are liveness and readiness probes?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-5"
---
# How do Docker volumes work?

## Answer

Volumes store data outside a container’s writable layer so it survives container replacement and can be managed by Docker. Use named volumes for durable service data and bind mounts mainly for local development.

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
