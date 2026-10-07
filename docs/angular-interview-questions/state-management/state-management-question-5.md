---
layout: doc
question: true
title: "Why should reducers be pure?"
questionTitle: "Why should reducers be pure?"
description: "Learn Why should reducers be pure? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Pure reducers return the same next state for the same prior state and action without performing I/O or mutation. That makes replay, tests, debugging, and state inspection reliable."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/state-management/state-management-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "State Management"
    link: /angular-interview-questions/state-management/
  - label: "Why should reducers be pure?"
prev:
  text: "What is lazy loading?"
  link: "/angular-interview-questions/routing/routing-question-5"
next:
  text: "What is a computed signal?"
  link: "/angular-interview-questions/signals/signals-question-5"
---
# Why should reducers be pure?

## Answer

Pure reducers return the same next state for the same prior state and action without performing I/O or mutation. That makes replay, tests, debugging, and state inspection reliable.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
