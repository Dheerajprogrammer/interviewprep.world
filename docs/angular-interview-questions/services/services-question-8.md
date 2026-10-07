---
layout: doc
question: true
title: "How do HTTP interceptors work?"
questionTitle: "How do HTTP interceptors work?"
description: "Learn How do HTTP interceptors work? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An interceptor wraps outgoing requests and incoming responses in a chain. Use it for cross-cutting concerns such as authentication headers, tracing, retries, and centralized error translation, while avoiding feature-specific business rules."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "How do HTTP interceptors work?"
prev:
  text: "What is the `OnPush` change-detection strategy?"
  link: "/angular-interview-questions/components/components-question-8"
next:
  text: "What is `@Self` and `@SkipSelf`?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-8"
---
# How do HTTP interceptors work?

## Answer

An interceptor wraps outgoing requests and incoming responses in a chain. Use it for cross-cutting concerns such as authentication headers, tracing, retries, and centralized error translation, while avoiding feature-specific business rules.

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
