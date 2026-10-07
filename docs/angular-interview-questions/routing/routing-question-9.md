---
layout: doc
question: true
title: "How do you handle a not-found route?"
questionTitle: "How do you handle a not-found route?"
description: "Learn How do you handle a not-found route? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "routing"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "How do you handle a not-found route? is a practical Angular routing interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/routing/routing-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Routing"
    link: /angular-interview-questions/routing/
  - label: "How do you handle a not-found route?"
prev:
  text: "What is the `async` pipe?"
  link: "/angular-interview-questions/rxjs/rxjs-question-9"
next:
  text: "How do signals fit state management?"
  link: "/angular-interview-questions/state-management/state-management-question-9"
---
# How do you handle a not-found route?

## Answer

Angular Router composes a route tree into router outlets. Route configuration should declare access control, data requirements, redirects, and lazy boundaries close to the feature they protect.

For **How do you handle a not-found route?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this medium-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
