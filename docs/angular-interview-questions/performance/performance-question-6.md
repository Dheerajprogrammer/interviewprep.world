---
layout: doc
question: true
title: "How do you lazy load a feature?"
questionTitle: "How do you lazy load a feature?"
description: "Learn How do you lazy load a feature? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "performance"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "How do you lazy load a feature? is a practical Angular performance interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/performance/performance-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Performance"
    link: /angular-interview-questions/performance/
  - label: "How do you lazy load a feature?"
prev:
  text: "When should you use an effect?"
  link: "/angular-interview-questions/signals/signals-question-6"
next:
  text: "How do you create reusable form controls?"
  link: "/angular-interview-questions/architecture/architecture-question-6"
---
# How do you lazy load a feature?

## Answer

Angular performance comes from minimizing change-detection work and JavaScript delivered to the browser. Use stable list tracking, simple templates, lazy features, and measured profiling before adding complexity.

For **How do you lazy load a feature?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```html
@for (user of users; track user.id) {
  <app-user-row [user]="user" />
}
```

Tracking by a stable id lets Angular preserve DOM nodes when a list changes.

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
