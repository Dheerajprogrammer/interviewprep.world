---
layout: doc
question: true
title: "What is `@Optional`?"
questionTitle: "What is `@Optional`?"
description: "Learn What is `@Optional`? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`@Optional` tells Angular to inject `null` instead of throwing when no provider exists. Use it only when the dependency is truly optional and the consumer has a safe behavior without it."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What is `@Optional`?"
prev:
  text: "What is `HttpClient`?"
  link: "/angular-interview-questions/services/services-question-7"
next:
  text: "What do `debounceTime` and `distinctUntilChanged` do?"
  link: "/angular-interview-questions/rxjs/rxjs-question-7"
---
# What is `@Optional`?

## Answer

`@Optional` tells Angular to inject `null` instead of throwing when no provider exists. Use it only when the dependency is truly optional and the consumer has a safe behavior without it.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
