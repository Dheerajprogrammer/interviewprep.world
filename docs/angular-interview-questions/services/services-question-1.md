---
layout: doc
question: true
title: "What is an Angular service?"
questionTitle: "What is an Angular service?"
description: "Learn What is an Angular service? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An Angular service is a class that holds reusable behavior such as data access, business rules, shared state, or integration with a browser API. Components consume it through dependency injection instead of constructing it directly."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "What is an Angular service?"
prev:
  text: "What is the difference between a component and a directive?"
  link: "/angular-interview-questions/components/components-question-1"
next:
  text: "What is dependency injection?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-1"
---
# What is an Angular service?

## Answer

An Angular service is a class that holds reusable behavior such as data access, business rules, shared state, or integration with a browser API. Components consume it through dependency injection instead of constructing it directly.

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
