---
layout: doc
question: true
title: "How does hierarchical DI work?"
questionTitle: "How does hierarchical DI work?"
description: "Learn How does hierarchical DI work? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Angular searches from the requesting injector upward through parent injectors until it finds a provider. A child provider can override a parent one, enabling feature-local configuration and test substitutions."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "How does hierarchical DI work?"
prev:
  text: "How do you test an Angular service?"
  link: "/angular-interview-questions/services/services-question-6"
next:
  text: "What is the difference between `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`?"
  link: "/angular-interview-questions/rxjs/rxjs-question-6"
---
# How does hierarchical DI work?

## Answer

Angular searches from the requesting injector upward through parent injectors until it finds a provider. A child provider can override a parent one, enabling feature-local configuration and test substitutions.

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
