---
layout: doc
question: true
title: "What is `@Self` and `@SkipSelf`?"
questionTitle: "What is `@Self` and `@SkipSelf`?"
description: "Learn What is `@Self` and `@SkipSelf`? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`@Self` restricts lookup to the current injector; `@SkipSelf` starts lookup at the parent. They are useful for advanced scoping or wrapper components, but ordinary dependencies should rely on normal hierarchical lookup."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What is `@Self` and `@SkipSelf`?"
prev:
  text: "How do HTTP interceptors work?"
  link: "/angular-interview-questions/services/services-question-8"
next:
  text: "How do you unsubscribe safely?"
  link: "/angular-interview-questions/rxjs/rxjs-question-8"
---
# What is `@Self` and `@SkipSelf`?

## Answer

`@Self` restricts lookup to the current injector; `@SkipSelf` starts lookup at the parent. They are useful for advanced scoping or wrapper components, but ordinary dependencies should rely on normal hierarchical lookup.

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
