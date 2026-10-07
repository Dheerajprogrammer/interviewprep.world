---
layout: doc
question: true
title: "What is content projection?"
questionTitle: "What is content projection?"
description: "Learn What is content projection? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "components"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is content projection? is a practical Angular components interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/components/components-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Components"
    link: /angular-interview-questions/components/
  - label: "What is content projection?"
prev:
  text: "What are Angular modules?"
  link: "/angular-interview-questions/basics/basics-question-4"
next:
  text: "What is the difference between a service and a factory provider?"
  link: "/angular-interview-questions/services/services-question-4"
---
# What is content projection?

## Answer

Components own a template and coordinate a focused piece of UI. Use inputs for data in, outputs for events out, and lifecycle hooks only when the component actually needs to synchronize with something outside rendering.

For **What is content projection?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
@Component({ selector: "app-save", template: `<button (click)="saved.emit()">Save</button>` })
export class SaveComponent { @Output() saved = new EventEmitter<void>() }
```

The parent supplies data through inputs and reacts to child events through outputs.

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
