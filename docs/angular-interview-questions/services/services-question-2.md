---
layout: doc
question: true
title: "Why are services usually injectable?"
questionTitle: "Why are services usually injectable?"
description: "Learn Why are services usually injectable? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "services"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Injection makes a service’s dependencies explicit and lets Angular supply, scope, replace, or mock them. That improves reuse and testing compared with hard-coding collaborators inside components."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/services/services-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Services"
    link: /angular-interview-questions/services/
  - label: "Why are services usually injectable?"
prev:
  text: "How do `@Input` and `@Output` work?"
  link: "/angular-interview-questions/components/components-question-2"
next:
  text: "What is an injector?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-2"
---
# Why are services usually injectable?

## Answer

Injection makes a service’s dependencies explicit and lets Angular supply, scope, replace, or mock them. That improves reuse and testing compared with hard-coding collaborators inside components.

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
