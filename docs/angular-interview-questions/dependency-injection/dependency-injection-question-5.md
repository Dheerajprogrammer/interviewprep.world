---
layout: doc
question: true
title: "What are multi-providers?"
questionTitle: "What are multi-providers?"
description: "Learn What are multi-providers? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Multi-providers register several values under one token and inject them as an array. Angular uses them for extensible concerns such as HTTP interceptors, where multiple independent contributions form an ordered pipeline."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What are multi-providers?"
prev:
  text: "How do you share state with a service?"
  link: "/angular-interview-questions/services/services-question-5"
next:
  text: "What is a ReplaySubject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-5"
---
# What are multi-providers?

## Answer

Multi-providers register several values under one token and inject them as an array. Angular uses them for extensible concerns such as HTTP interceptors, where multiple independent contributions form an ordered pipeline.

## Example

```ts
export const API_URL = new InjectionToken<string>("api-url")
bootstrapApplication(AppComponent, { providers: [{ provide: API_URL, useValue: "/api" }] })
```

An injection token is a typed key for a dependency that is not a class.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
