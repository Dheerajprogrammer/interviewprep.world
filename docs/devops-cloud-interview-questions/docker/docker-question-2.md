---
layout: doc
question: true
title: "What is the difference between an image and a container?"
questionTitle: "What is the difference between an image and a container?"
description: "Learn What is the difference between an image and a container? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: hard
experienceLevel: senior
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An image is an immutable filesystem and configuration template built from layers; a container is a running instance of that image with its own writable layer and runtime settings. One image can start many containers."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "What is the difference between an image and a container?"
prev:
  text: "What is a Git commit?"
  link: "/devops-cloud-interview-questions/git/git-question-2"
next:
  text: "What is the difference between a Pod and a Deployment?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-2"
---
# What is the difference between an image and a container?

## Answer

An image is an immutable filesystem and configuration template built from layers; a container is a running instance of that image with its own writable layer and runtime settings. One image can start many containers.

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
