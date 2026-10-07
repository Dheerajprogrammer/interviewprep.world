---
layout: doc
question: true
title: "What does `providedIn: root` mean?"
questionTitle: "What does `providedIn: root` mean?"
description: "Learn What does `providedIn: root` mean? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "It registers the service with the application root injector, usually creating one shared instance for the app and allowing unused services to be tree-shaken. Use a narrower provider when the service state should be scoped to a route or component."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "What does `providedIn: root` mean?"
prev:
  text: "What is `EventEmitter` used for?"
  link: "/angular-interview-questions/components/components-question-3"
next:
  text: "What are provider scopes?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-3"
---
# What does `providedIn: root` mean?

## Answer

It registers the service with the application root injector, usually creating one shared instance for the app and allowing unused services to be tree-shaken. Use a narrower provider when the service state should be scoped to a route or component.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
