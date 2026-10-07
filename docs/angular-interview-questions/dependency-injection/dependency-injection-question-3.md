---
layout: doc
question: true
title: "What are provider scopes?"
questionTitle: "What are provider scopes?"
description: "Learn What are provider scopes? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Provider scope determines where a dependency is registered and therefore how long an instance lives: root for the application, route or environment for a feature boundary, and component for one component subtree. Choose the narrowest scope that matches the state lifetime."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What are provider scopes?"
prev:
  text: "What does `providedIn: root` mean?"
  link: "/angular-interview-questions/services/services-question-3"
next:
  text: "What is a Subject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-3"
---
# What are provider scopes?

## Answer

Provider scope determines where a dependency is registered and therefore how long an instance lives: root for the application, route or environment for a feature boundary, and component for one component subtree. Choose the narrowest scope that matches the state lifetime.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
