---
layout: doc
question: true
title: "What is the difference between a service and a factory provider?"
questionTitle: "What is the difference between a service and a factory provider?"
description: "Learn What is the difference between a service and a factory provider? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A service is usually a class Angular instantiates; a factory provider creates a value through a function and can choose implementation from configuration or other dependencies. Both are resolved through the injector."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "What is the difference between a service and a factory provider?"
prev:
  text: "What is content projection?"
  link: "/angular-interview-questions/components/components-question-4"
next:
  text: "What is an injection token?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-4"
---
# What is the difference between a service and a factory provider?

## Answer

A service is usually a class Angular instantiates; a factory provider creates a value through a function and can choose implementation from configuration or other dependencies. Both are resolved through the injector.

## Example

```ts
@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}
  get(id: string) { return this.http.get<User>(`/api/users/${id}`) }
}
```

A root provider creates one application-wide service instance by default.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
