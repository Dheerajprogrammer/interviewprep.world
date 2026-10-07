---
layout: doc
question: true
title: "What is lazy loading?"
questionTitle: "What is lazy loading?"
description: "Learn What is lazy loading? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is lazy loading? is a practical Angular routing interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "What is lazy loading?"
prev:
  text: "What is a ReplaySubject?"
  link: "/angular-interview-questions/rxjs/rxjs-question-5"
next:
  text: "Why should reducers be pure?"
  link: "/angular-interview-questions/state-management/state-management-question-5"
---
# What is lazy loading?

## Answer

Angular Router composes a route tree into router outlets. Route configuration should declare access control, data requirements, redirects, and lazy boundaries close to the feature they protect.

For **What is lazy loading?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
const routes: Routes = [
  { path: "projects/:id", component: ProjectComponent },
  { path: "", pathMatch: "full", redirectTo: "projects/1" }
]
```

Route parameters describe resource identity; redirects make a clear default URL.

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
