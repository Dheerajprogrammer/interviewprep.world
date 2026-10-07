---
layout: doc
question: true
title: "What are actions, reducers, selectors, and effects?"
questionTitle: "What are actions, reducers, selectors, and effects?"
description: "Learn What are actions, reducers, selectors, and effects? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Actions describe events, reducers calculate the next immutable state, selectors derive views of state, and effects perform asynchronous or external work in response to actions. This separation keeps state changes predictable and side effects testable."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/state-management/state-management-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "State Management"
    link: /angular-interview-questions/state-management/
  - label: "What are actions, reducers, selectors, and effects?"
prev:
  text: "What are route guards?"
  link: "/angular-interview-questions/routing/routing-question-4"
next:
  text: "How do you update a writable signal?"
  link: "/angular-interview-questions/signals/signals-question-4"
---
# What are actions, reducers, selectors, and effects?

## Answer

Actions describe events, reducers calculate the next immutable state, selectors derive views of state, and effects perform asynchronous or external work in response to actions. This separation keeps state changes predictable and side effects testable.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
