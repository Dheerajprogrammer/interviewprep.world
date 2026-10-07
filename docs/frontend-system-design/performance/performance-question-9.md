---
layout: doc
question: true
title: "How do you handle low-end devices?"
questionTitle: "How do you handle low-end devices?"
description: "Learn How do you handle low-end devices? with answers, examples, and real interview scenarios for Frontend System Design interviews."
difficulty: hard
experienceLevel: senior
tags: ["system-design", "performance"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "How do you handle low-end devices? is a practical frontend performance design interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/frontend-system-design/performance/performance-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend System Design"
    link: /frontend-system-design/
  - label: "Performance & Delivery"
    link: /frontend-system-design/performance/
  - label: "How do you handle low-end devices?"
prev:
  text: "How do you handle progressive delivery?"
  link: "/frontend-system-design/requirements/requirements-question-9"
next:
  text: "How do you handle API errors?"
  link: "/frontend-system-design/data/data-question-9"
---
# How do you handle low-end devices?

## Answer

Performance design protects the critical rendering path and measures user-visible outcomes. Deliver less JavaScript, prioritize useful content, and verify changes with field and lab metrics.

For **How do you handle low-end devices?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
const ProductGallery = lazy(() => import("./ProductGallery"))
// render it behind <Suspense> after the primary product information
```

This defers non-critical code so the primary content can become interactive sooner.

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
