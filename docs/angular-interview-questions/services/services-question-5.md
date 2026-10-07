---
layout: doc
question: true
title: "How do you share state with a service?"
questionTitle: "How do you share state with a service?"
description: "Learn How do you share state with a service? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keep state private inside a feature-scoped service and expose readonly signals or Observables plus methods that perform valid updates. This makes ownership, mutation rules, and cleanup explicit."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "How do you share state with a service?"
prev:
  text: "What is `ViewChild`?"
  link: "/angular-interview-questions/components/components-question-5"
next:
  text: "What are multi-providers?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-5"
---
# How do you share state with a service?

## Answer

Keep state private inside a feature-scoped service and expose readonly signals or Observables plus methods that perform valid updates. This makes ownership, mutation rules, and cleanup explicit.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
