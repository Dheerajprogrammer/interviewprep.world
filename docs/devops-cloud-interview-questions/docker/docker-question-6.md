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
readingMinutes: 5
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

## Why this matters

The important idea behind **How do you pass configuration into a container** is not the terminology alone; it is the engineering decision the concept enables. Docker packages an application and its runtime dependencies into an image that runs as an isolated container. Build small, reproducible images, inject configuration at runtime, and run processes with the least privilege required. In a real system, the useful question is where the behaviour lives, what assumptions it relies on, and what becomes observable when those assumptions fail. Connecting the definition to those boundaries makes the answer useful for both an interview and day-to-day development.

A strong explanation should move in order from requirements to mechanism to verification. State the input and expected result, identify the component that owns the work, describe the important failure path, and finish with the test or measurement that proves the implementation behaves correctly. For a easy-level question, it is also worth naming one limitation. Doing so shows that you understand when the idea applies instead of treating it as a universal rule.

## How to reason about it

Start from the guarantee expressed in the direct answer: Inject non-secret configuration through environment variables or mounted config files at runtime, and inject secrets through the platform’s secret mechanism. Keep one image promotion-safe across environments rather than baking environment values into it. Then separate that guarantee from implementation details. Ask what initiates the behaviour, which state or resource it reads, who owns cleanup or recovery, and whether the result is synchronous, asynchronous, persistent, or temporary. These questions expose the edge cases that interviewers usually explore next.

Next, define success in observable terms. A correct solution should produce the intended result for the normal path, remain understandable when input is empty or invalid, and fail without corrupting state. If concurrency, caching, networking, rendering, or persistence is involved, discuss stale data, repeated work, ordering, and partial failure explicitly. The exact concerns vary, but they should follow from **How do you pass configuration into a container**, not from a memorized checklist.

## Worked example

Suppose a collaboration application must keep its interface and server state consistent during retries and reconnects. In this DevOps & Cloud example, the team needs to make a decision specifically about **How do you pass configuration into a container**. They begin with the rule above—Inject non-secret configuration through environment variables or mounted config files at runtime, and inject secrets through the platform’s secret mechanism. Keep one image promotion-safe across environments rather than baking environment values into it. Rather than applying it blindly, they write down the expected input, output, and failure behaviour. They then implement the smallest version that demonstrates the rule and exercise both the successful path and one realistic failure path.

During review, the team asks whether the example would still be correct with repeated requests, missing data, a slow dependency, or a larger workload. Only the cases relevant to this question are kept. Finally, they verify the result at the boundary a user or another system can observe. That may be a focused unit test, an integration test, a browser profile, a log or metric, or a rollback exercise. This turns the concept into evidence rather than an assertion.

## Common mistakes and trade-offs

A weak answer repeats a definition but never explains consequences. Another common mistake is choosing a tool or pattern before clarifying the requirement. Avoid claiming that one option is always faster, safer, or cleaner; describe the workload and constraints that make the claim true. Also distinguish correctness from optimization: first make the behaviour correct and testable, then use measurements to justify additional complexity.

In production, simpler implementations are generally easier to operate, but simplicity does not mean ignoring error handling, security, accessibility, cleanup, or observability. Add those controls at the boundary where the risk exists. If the solution introduces caching, retries, shared state, abstraction, or background work, explain the invalidation, ownership, or recovery rule as part of the design.

## Interview-ready summary

Lead with this sentence: Inject non-secret configuration through environment variables or mounted config files at runtime, and inject secrets through the platform’s secret mechanism. Keep one image promotion-safe across environments rather than baking environment values into it. Follow it with the mechanism, one concrete decision from the worked example, and one limitation or trade-off. That structure gives the interviewer a direct answer first while leaving clear openings for deeper follow-up questions.

## Copyable example

```dockerfile
# How do you pass configuration into a container? | devops-cloud-how-do-you-pass-configuration-into-a-container
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
