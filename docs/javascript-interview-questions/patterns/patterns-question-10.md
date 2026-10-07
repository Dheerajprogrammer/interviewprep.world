---
layout: doc
question: true
title: "How do you design a reusable API client?"
questionTitle: "How do you design a reusable API client?"
description: "Learn How do you design a reusable API client? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "How do you design a reusable API client? is a practical JavaScript patterns interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "How do you design a reusable API client?"
prev:
  text: "How do you validate and sanitize user input?"
  link: "/javascript-interview-questions/security/security-question-10"
next:
  text: "How do you implement an event emitter?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-10"
---
# How do you design a reusable API client?

## Answer

Patterns should make dependencies and behaviour easier to reason about. Prefer small composable modules and explicit interfaces; introduce a pattern only when it removes real duplication or coupling.

For **How do you design a reusable API client?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
function createApiClient(fetcher) {
  return { getUser: id => fetcher(`/users/${id}`) }
}
const api = createApiClient(fetch)
```

Injecting `fetcher` keeps the client small and makes it easy to test with a fake.

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
