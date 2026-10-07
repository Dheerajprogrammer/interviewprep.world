---
layout: doc
question: true
title: "What are generics?"
questionTitle: "What are generics?"
description: "Learn What are generics? with answers, examples, and real interview scenarios for TypeScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["typescript", "generics"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What are generics? is a practical TypeScript generics interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/typescript-interview-questions/generics/generics-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "TypeScript"
    link: /typescript-interview-questions/
  - label: "Generics"
    link: /typescript-interview-questions/generics/
  - label: "What are generics?"
prev:
  text: "What is the difference between an interface and a type alias?"
  link: "/typescript-interview-questions/interfaces/interfaces-question-1"
next:
  text: "How do function overloads work?"
  link: "/typescript-interview-questions/functions/functions-question-1"
---
# What are generics?

## Answer

Generics preserve relationships between input and output types. Constrain a type parameter only when the implementation needs a capability, and choose names that reveal the relationship.

For **What are generics?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
function first<T>(items: readonly T[]): T | undefined {
  return items[0]
}
const user = first([{ id: "u1" }]) // { id: string } | undefined
```

`T` preserves the item type from the caller through the return value.

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
