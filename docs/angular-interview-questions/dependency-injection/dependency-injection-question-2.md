---
layout: doc
question: true
title: "What is an injector?"
questionTitle: "What is an injector?"
description: "Learn What is an injector? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An injector is Angular’s resolver for dependency tokens. It looks up a provider in its hierarchy, creates or retrieves the configured value, and supplies it to constructors or `inject()` calls."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What is an injector?"
prev:
  text: "Why are services usually injectable?"
  link: "/angular-interview-questions/services/services-question-2"
next:
  text: "What is the difference between an Observable and a Promise?"
  link: "/angular-interview-questions/rxjs/rxjs-question-2"
---
# What is an injector?

## Answer

An injector is Angular’s resolver for dependency tokens. It looks up a provider in its hierarchy, creates or retrieves the configured value, and supplies it to constructors or `inject()` calls.

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
