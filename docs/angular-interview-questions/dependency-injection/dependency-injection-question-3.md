---
layout: doc
question: true
title: "What are provider scopes?"
questionTitle: "What are provider scopes?"
description: "Learn What are provider scopes? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What are provider scopes? is a practical Angular DI interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What are provider scopes?"
prev:
  text: "What does `providedIn: root` mean?"
  link: "/angular-interview-questions/services/services-question-3"
next:
  text: "What is a Subject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-3"
---
# What are provider scopes?

## Answer

Angular dependency injection resolves tokens through a hierarchy of injectors. Provider scope determines instance lifetime, while tokens and provider types let applications replace implementations cleanly.

For **What are provider scopes?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
export const API_URL = new InjectionToken<string>("api-url")
bootstrapApplication(AppComponent, { providers: [{ provide: API_URL, useValue: "/api" }] })
```

An injection token is a typed key for a dependency that is not a class.

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

For this hard-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
