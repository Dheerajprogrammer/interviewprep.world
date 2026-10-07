---
layout: doc
question: true
title: "What is a multi-stage build?"
questionTitle: "What is a multi-stage build?"
description: "Learn What is a multi-stage build? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: medium
experienceLevel: mid
tags: ["devops", "docker"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A multi-stage build uses one image to compile or package an application and a later, smaller image to run only the artifact. It reduces runtime size, attack surface, and accidental inclusion of build tools or secrets."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/docker/docker-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Docker"
    link: /devops-cloud-interview-questions/docker/
  - label: "What is a multi-stage build?"
prev:
  text: "What is a pull request workflow?"
  link: "/devops-cloud-interview-questions/git/git-question-4"
next:
  text: "How do ConfigMaps and Secrets differ?"
  link: "/devops-cloud-interview-questions/kubernetes/kubernetes-question-4"
---
# What is a multi-stage build?

## Answer

A multi-stage build uses one image to compile or package an application and a later, smaller image to run only the artifact. It reduces runtime size, attack surface, and accidental inclusion of build tools or secrets.

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
