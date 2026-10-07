---
layout: doc
question: true
title: "How do Docker layers and caching work?"
questionTitle: "How do Docker layers and caching work?"
description: "Learn How do Docker layers and caching work? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: easy
experienceLevel: junior
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Each Dockerfile instruction creates a cacheable layer. Put stable dependency manifests before frequently changing source code so dependency installation is reused, and avoid copying unnecessary files into the build context."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "How do Docker layers and caching work?"
prev:
  text: "How do branches work in Git?"
  link: "/devops-cloud-interview-questions/git/git-question-3"
next:
  text: "What are Services and Ingress used for?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-3"
---
# How do Docker layers and caching work?

## Answer

Each Dockerfile instruction creates a cacheable layer. Put stable dependency manifests before frequently changing source code so dependency installation is reused, and avoid copying unnecessary files into the build context.

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
