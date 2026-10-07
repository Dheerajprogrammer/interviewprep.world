---
layout: doc
question: true
title: "What are signal inputs?"
questionTitle: "What are signal inputs?"
description: "Learn What are signal inputs? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "signals"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What are signal inputs? is a practical Angular signals interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/signals-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "What are signal inputs?"
prev:
  text: "What is entity state normalization?"
  link: "/angular-interview-questions/state-management/state-management-question-8"
next:
  text: "What is zone.js and what role does it play?"
  link: "/angular-interview-questions/performance/performance-question-8"
---
# What are signal inputs?

## Answer

Signals hold synchronous reactive state; computed signals derive values and effects bridge reactive state to imperative work. Keep derivations pure and avoid effects that silently write more application state.

For **What are signal inputs?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
const count = signal(0)
const doubled = computed(() => count() * 2)
count.update(value => value + 1)
```

Signals are read by calling them; computed values automatically track the signals they read.

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
