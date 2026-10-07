---
layout: doc
question: true
title: "How do selectors improve performance?"
questionTitle: "How do selectors improve performance?"
description: "Learn How do selectors improve performance? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: hard
experienceLevel: senior
tags: ["angular", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Selectors centralize derived state and can memoize a result until their inputs change. Components then subscribe to small, stable slices of state instead of recalculating or reacting to unrelated updates."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/state-management/state-management-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "State Management"
    link: /angular-interview-questions/state-management/
  - label: "How do selectors improve performance?"
prev:
  text: "What are resolvers?"
  link: "/angular-interview-questions/routing/routing-question-6"
next:
  text: "When should you use an effect?"
  link: "/angular-interview-questions/signals/signals-question-6"
---
# How do selectors improve performance?

## Answer

Selectors centralize derived state and can memoize a result until their inputs change. Components then subscribe to small, stable slices of state instead of recalculating or reacting to unrelated updates.

## Example

```ts
@Injectable({ providedIn: "root" })
export class CartStore {
  readonly items = signal<CartItem[]>([])
  add(item: CartItem) { this.items.update(items => [...items, item]) }
}
```

A small feature store makes state ownership and updates explicit without a global store.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
