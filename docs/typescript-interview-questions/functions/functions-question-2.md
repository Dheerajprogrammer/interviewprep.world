---
layout: doc
question: true
title: "What is a type predicate?"
questionTitle: "What is a type predicate?"
description: "Learn What is a type predicate? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "functions"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is a type predicate? is a practical TypeScript functions interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/functions/functions-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Functions & Narrowing"
    link: /typescript-interview-questions/functions/
  - label: "What is a type predicate?"
prev:
  text: "How do generic constraints work?"
  link: "/typescript-interview-questions/generics/generics-question-2"
next:
  text: "How do you type environment variables?"
  link: "/typescript-interview-questions/architecture/architecture-question-2"
---
# What is a type predicate?

## Answer

Function types describe parameters, return values, and narrowing behaviour. Overloads and type predicates should make call sites safer without obscuring the implementation.

For **What is a type predicate?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
function isError(value: unknown): value is Error {
  return value instanceof Error
}
try { throw new Error("Network failed") } catch (error) {
  if (isError(error)) console.error(error.message)
}
```

A type predicate safely narrows an `unknown` value after a runtime check.

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
