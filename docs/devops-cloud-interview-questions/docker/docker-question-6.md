---
layout: doc
question: true
title: "How do you pass configuration into a container?"
questionTitle: "How do you pass configuration into a container?"
description: "Learn How do you pass configuration into a container? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: easy
experienceLevel: junior
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Inject non-secret configuration through environment variables or mounted config files at runtime, and inject secrets through the platform’s secret mechanism. Keep one image promotion-safe across environments rather than baking environment values into it."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "How do you pass configuration into a container?"
prev:
  text: "What is Git reset versus revert?"
  link: "/devops-cloud-interview-questions/git/git-question-6"
next:
  text: "How do you scale a Kubernetes workload?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-6"
---
# How do you pass configuration into a container?

## Answer

Inject non-secret configuration through environment variables or mounted config files at runtime, and inject secrets through the platform’s secret mechanism. Keep one image promotion-safe across environments rather than baking environment values into it.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
