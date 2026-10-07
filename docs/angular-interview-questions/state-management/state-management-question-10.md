---
layout: doc
question: true
title: "When should you avoid a global store?"
questionTitle: "When should you avoid a global store?"
description: "Learn When should you avoid a global store? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "state-management"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "When should you avoid a global store? is a practical Angular state interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/state-management/state-management-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "State Management"
    link: /angular-interview-questions/state-management/
  - label: "When should you avoid a global store?"
prev:
  text: "How do you preload lazy modules?"
  link: "/angular-interview-questions/routing/routing-question-10"
next:
  text: "When should you use a signal instead of an Observable?"
  link: "/angular-interview-questions/signals/signals-question-10"
---
# When should you avoid a global store?

## Answer

Angular state should have one clear owner and predictable update paths. A local signal or service is often sufficient; introduce a global store when multiple independent features need coordinated, observable transitions.

For **When should you avoid a global store?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```ts
@Injectable({ providedIn: "root" })
export class CartStore {
  readonly items = signal<CartItem[]>([])
  add(item: CartItem) { this.items.update(items => [...items, item]) }
}
```

A small feature store makes state ownership and updates explicit without a global store.

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
