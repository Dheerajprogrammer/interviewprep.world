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
readingMinutes: 2
answerExcerpt: "How do HTTP interceptors work? is a practical Angular services interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
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

Services separate reusable behaviour, data access, and shared state from components. Define a narrow API, inject dependencies rather than constructing them, and keep HTTP and error handling consistent.

For **How do HTTP interceptors work?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}
  get(id: string) { return this.http.get<User>(`/api/users/${id}`) }
}
```

A root provider creates one application-wide service instance by default.

## How to structure your answer

1. Define the concept in one or two sentences.
2. Explain when you would use it and when you would choose an alternative.
3. Walk through a small example, including an edge case.
4. Close with how you would test or measure the result.

## Common mistakes

- Repeating a definition without connecting it to real code.
- Treating an optimization or abstraction as a default rather than a trade-off.
- Omitting lifecycle, error, cleanup, accessibility, or testing considerations when they apply.

## Follow-up prompts

- What failure mode would you expect if this were implemented incorrectly?
- How would you test this behaviour?
- What changes when the feature must scale to a larger application or team?

## Interview tip

For this easy-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
