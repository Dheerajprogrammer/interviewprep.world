---
layout: doc
question: true
title: "What is a decorator?"
questionTitle: "What is a decorator?"
description: "Learn What is a decorator? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "basics"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is a decorator? is a practical Angular fundamentals interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/basics/basics-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Basics"
    link: /angular-interview-questions/basics/
  - label: "What is a decorator?"
prev:
  text: "How do you separate smart and presentational components?"
  link: "/angular-interview-questions/architecture/architecture-question-4"
next:
  text: "What is `ViewChild`?"
  link: "/angular-interview-questions/components/components-question-5"
---
# What is a decorator?

## Answer

Angular combines declarative templates, dependency injection, and change detection. Explain which part owns data, which part renders it, and how an update is propagated through the view.

For **What is a decorator?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
@Component({ selector: "app-greeting", template: `<h1>Hello {{ name }}</h1>` })
export class GreetingComponent { name = "Ada" }
```

Interpolation binds a component value into the template.

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
