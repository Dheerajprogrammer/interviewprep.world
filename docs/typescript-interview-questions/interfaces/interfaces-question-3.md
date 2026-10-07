---
layout: doc
question: true
title: "What are readonly properties?"
questionTitle: "What are readonly properties?"
description: "Learn What are readonly properties? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "interfaces"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What are readonly properties? is a practical TypeScript object types interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/interfaces/interfaces-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Interfaces & Object Types"
    link: /typescript-interview-questions/interfaces/
  - label: "What are readonly properties?"
prev:
  text: "What is the difference between `any`, `unknown`, and `never`?"
  link: "/typescript-interview-questions/basics/basics-question-3"
next:
  text: "What does `keyof` do?"
  link: "/typescript-interview-questions/generics/generics-question-3"
---
# What are readonly properties?

## Answer

Interfaces and type aliases describe object shapes and composition. Model the domain precisely, keep public contracts stable, and prefer utility types when they clarify an existing type.

For **What are readonly properties?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
type User = { id: string; name: string; readonly role?: "admin" | "member" }
type UserPreview = Pick<User, "id" | "name">
```

`Pick` derives a focused view without duplicating the source model.

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
