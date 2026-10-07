---
layout: doc
question: true
title: "What is an injection token?"
questionTitle: "What is an injection token?"
description: "Learn What is an injection token? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "dependency-injection"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is an injection token? is a practical Angular DI interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/dependency-injection/dependency-injection-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Dependency Injection"
    link: /angular-interview-questions/dependency-injection/
  - label: "What is an injection token?"
prev:
  text: "What is the difference between a service and a factory provider?"
  link: "/angular-interview-questions/services/services-question-4"
next:
  text: "What is the difference between Subject and BehaviorSubject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-4"
---
# What is an injection token?

## Answer

Angular dependency injection resolves tokens through a hierarchy of injectors. Provider scope determines instance lifetime, while tokens and provider types let applications replace implementations cleanly.

For **What is an injection token?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this easy-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
