---
layout: doc
question: true
title: "How do you provide a configuration object?"
questionTitle: "How do you provide a configuration object?"
description: "Learn How do you provide a configuration object? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Create an InjectionToken for a typed configuration contract and register a value or factory provider at the intended scope. Validate environment-derived values at startup rather than assuming the TypeScript type makes them valid."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "How do you provide a configuration object?"
prev:
  text: "How do you handle HTTP errors?"
  link: "/angular-interview-questions/services/services-question-9"
next:
  text: "What is the `async` pipe?"
  link: "/angular-interview-questions/rxjs/rxjs-question-9"
---
# How do you provide a configuration object?

## Answer

Create an InjectionToken for a typed configuration contract and register a value or factory provider at the intended scope. Validate environment-derived values at startup rather than assuming the TypeScript type makes them valid.

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
