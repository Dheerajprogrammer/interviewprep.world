---
layout: doc
question: true
title: "What is dependency injection?"
questionTitle: "What is dependency injection?"
description: "Learn What is dependency injection? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Dependency injection supplies collaborators from outside a class or function instead of constructing them internally. It makes dependencies explicit, supports configuration, and allows tests to use controlled fakes."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What is dependency injection?"
prev:
  text: "What is an Angular service?"
  link: "/angular-interview-questions/services/services-question-1"
next:
  text: "Difference between Subject and BehaviorSubject"
  link: "/angular-interview-questions/rxjs/subject-vs-behaviorsubject"
---
# What is dependency injection?

## Answer

Dependency injection supplies collaborators from outside a class or function instead of constructing them internally. It makes dependencies explicit, supports configuration, and allows tests to use controlled fakes.

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
