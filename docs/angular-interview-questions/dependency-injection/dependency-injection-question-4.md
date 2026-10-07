---
layout: doc
question: true
title: "What is an injection token?"
questionTitle: "What is an injection token?"
description: "Learn What is an injection token? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An InjectionToken is a typed runtime key for dependencies that are not classes, such as configuration values or interfaces. It avoids relying on erased TypeScript interfaces and makes providers explicit."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What is an injection token?"
prev:
  text: "What is the difference between a service and a factory provider?"
  link: "/angular-interview-questions/services/services-question-4"
next:
  text: "What is the difference between Subject and BehaviorSubject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-4"
---
# What is an injection token?

## Answer

An InjectionToken is a typed runtime key for dependencies that are not classes, such as configuration values or interfaces. It avoids relying on erased TypeScript interfaces and makes providers explicit.

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
