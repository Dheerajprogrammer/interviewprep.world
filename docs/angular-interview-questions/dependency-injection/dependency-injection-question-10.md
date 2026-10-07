---
layout: doc
question: true
title: "How do you mock a dependency in a test?"
questionTitle: "How do you mock a dependency in a test?"
description: "Learn How do you mock a dependency in a test? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Override its provider in the test configuration with a fake, spy, or test implementation that exposes only the behavior the test needs. Assert the consumer’s observable outcome rather than the injector internals."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "How do you mock a dependency in a test?"
prev:
  text: "When should a service be stateless?"
  link: "/angular-interview-questions/services/services-question-10"
next:
  text: "How do you handle errors in RxJS?"
  link: "/angular-interview-questions/rxjs/rxjs-question-10"
---
# How do you mock a dependency in a test?

## Answer

Override its provider in the test configuration with a fake, spy, or test implementation that exposes only the behavior the test needs. Assert the consumer’s observable outcome rather than the injector internals.

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
