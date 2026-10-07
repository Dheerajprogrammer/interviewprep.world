---
layout: doc
question: true
title: "What do `debounceTime` and `distinctUntilChanged` do?"
questionTitle: "What do `debounceTime` and `distinctUntilChanged` do?"
description: "Learn What do `debounceTime` and `distinctUntilChanged` do? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "rxjs"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What do `debounceTime` and `distinctUntilChanged` do? is a practical RxJS in Angular interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/rxjs-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "What do `debounceTime` and `distinctUntilChanged` do?"
prev:
  text: "What is `@Optional`?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-7"
next:
  text: "How do you create child routes?"
  link: "/angular-interview-questions/routing/routing-question-7"
---
# What do `debounceTime` and `distinctUntilChanged` do?

## Answer

Observables represent streams that can emit multiple values over time. Select the flattening operator from the desired concurrency rule, handle errors in the stream, and ensure subscriptions have a clear lifetime.

For **What do `debounceTime` and `distinctUntilChanged` do?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
results$ = this.query.valueChanges.pipe(
  debounceTime(250), distinctUntilChanged(),
  switchMap(query => this.api.search(query))
)
```

`switchMap` cancels the previous inner request when a newer query arrives.

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

For this medium-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
