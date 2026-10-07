---
layout: doc
question: true
title: "How do you handle HTTP errors?"
questionTitle: "How do you handle HTTP errors?"
description: "Learn How do you handle HTTP errors? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Handle expected errors near the feature so the UI can show useful recovery states, and use an interceptor for consistent transport-level behavior. Preserve enough error context for logging without exposing sensitive server details."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "How do you handle HTTP errors?"
prev:
  text: "How do you build a reusable Angular component?"
  link: "/angular-interview-questions/components/components-question-9"
next:
  text: "How do you provide a configuration object?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-9"
---
# How do you handle HTTP errors?

## Answer

Handle expected errors near the feature so the UI can show useful recovery states, and use an interceptor for consistent transport-level behavior. Preserve enough error context for logging without exposing sensitive server details.

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
