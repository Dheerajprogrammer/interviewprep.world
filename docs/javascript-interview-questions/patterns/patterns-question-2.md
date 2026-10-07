---
layout: doc
question: true
title: "What is the observer pattern?"
questionTitle: "What is the observer pattern?"
description: "Learn What is the observer pattern? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "patterns"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is the observer pattern? is a practical JavaScript patterns interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/patterns/patterns-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Design Patterns"
    link: /javascript-interview-questions/patterns/
  - label: "What is the observer pattern?"
prev:
  text: "What is CORS?"
  link: "/javascript-interview-questions/security/security-question-2"
next:
  text: "How do you implement debounce?"
  link: "/javascript-interview-questions/coding-challenges/coding-challenges-question-2"
---
# What is the observer pattern?

## Answer

Patterns should make dependencies and behaviour easier to reason about. Prefer small composable modules and explicit interfaces; introduce a pattern only when it removes real duplication or coupling.

For **What is the observer pattern?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this easy-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
