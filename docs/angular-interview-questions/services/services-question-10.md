---
layout: doc
question: true
title: "When should a service be stateless?"
questionTitle: "When should a service be stateless?"
description: "Learn When should a service be stateless? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keep a service stateless when it performs a reusable calculation or request and does not own feature state. Stateful services are appropriate for a clearly scoped store or coordination boundary, but hidden shared mutable state makes tests and lifecycles harder."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "When should a service be stateless?"
prev:
  text: "How do you communicate between sibling components?"
  link: "/angular-interview-questions/components/components-question-10"
next:
  text: "How do you mock a dependency in a test?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-10"
---
# When should a service be stateless?

## Answer

Keep a service stateless when it performs a reusable calculation or request and does not own feature state. Stateful services are appropriate for a clearly scoped store or coordination boundary, but hidden shared mutable state makes tests and lifecycles harder.

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
