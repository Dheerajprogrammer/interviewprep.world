---
layout: doc
question: true
title: "How do you handle conflicts?"
questionTitle: "How do you handle conflicts?"
description: "Learn How do you handle conflicts? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: medium
experienceLevel: mid
tags: ["system-design", "realtime"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "How do you handle conflicts? is a practical real-time frontend design interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/realtime/realtime-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Real-time Experiences"
    link: /frontend-system-design/realtime/
  - label: "How do you handle conflicts?"
prev:
  text: "How do you handle API errors?"
  link: "/frontend-system-design/data/data-question-9"
next:
  text: "How do you deploy safely?"
  link: "/frontend-system-design/architecture/architecture-question-9"
---
# How do you handle conflicts?

## Answer

Real-time UI needs a connection strategy, an event protocol, ordering rules, and a reconnection story. Treat messages as untrusted inputs and make duplicate or delayed events safe to process.

For **How do you handle conflicts?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
if (event.sequence > lastSequence) {
  apply(event)
  lastSequence = event.sequence
}
```

A monotonic sequence number lets the client ignore duplicate or out-of-order events.

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
