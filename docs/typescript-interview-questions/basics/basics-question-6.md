---
layout: doc
question: true
title: "What is an intersection type?"
questionTitle: "What is an intersection type?"
description: "Learn What is an intersection type? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["typescript", "basics"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is an intersection type? is a practical TypeScript fundamentals interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/basics/basics-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "TypeScript Basics"
    link: /typescript-interview-questions/basics/
  - label: "What is an intersection type?"
prev:
  text: "What is `tsconfig.json` for?"
  link: "/typescript-interview-questions/architecture/architecture-question-5"
next:
  text: "How do you extend an interface?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-6"
---
# What is an intersection type?

## Answer

TypeScript adds a static type system to JavaScript. Explain the compile-time guarantee, distinguish it from runtime validation, and use narrow, readable types instead of escaping to `any`.

For **What is an intersection type?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
function formatId(id: string | number) {
  return typeof id === "string" ? id.trim() : id.toString()
}
```

The `typeof` check narrows the union, so each branch gets the operations valid for that type.

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
