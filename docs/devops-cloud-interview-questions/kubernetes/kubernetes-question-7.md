---
layout: doc
question: true
title: "What are requests and limits?"
questionTitle: "What are requests and limits?"
description: "Learn What are requests and limits? with answers, examples, and real interview scenarios for DevOps & Cloud interviews."
difficulty: hard
experienceLevel: senior
tags: ["devops", "kubernetes"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Requests reserve scheduler capacity; limits cap container resource use. CPU limits can throttle and memory limits can cause termination, so tune them from observed behavior rather than copy-pasting defaults."
outline: deep
canonical: "https://interviewprep.world/devops-cloud-interview-questions/kubernetes/kubernetes-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "DevOps & Cloud"
    link: /devops-cloud-interview-questions/
  - label: "Kubernetes"
    link: /devops-cloud-interview-questions/kubernetes/
  - label: "What are requests and limits?"
prev:
  text: "How do you reduce Docker image size?"
  link: "/devops-cloud-interview-questions/docker/docker-question-7"
next:
  text: "How do you design for high availability on AWS?"
  link: "/devops-cloud-interview-questions/aws/aws-question-7"
---
# What are requests and limits?

## Answer

Requests reserve scheduler capacity; limits cap container resource use. CPU limits can throttle and memory limits can cause termination, so tune them from observed behavior rather than copy-pasting defaults.

## Example

Consider a production Kubernetes change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
