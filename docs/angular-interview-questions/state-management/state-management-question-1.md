---
layout: doc
question: true
title: "How do you manage state in Angular?"
questionTitle: "How do you manage state in Angular?"
description: "Learn How do you manage state in Angular? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Give each piece of state one clear owner: local component state for local UI, a feature service or signal store for shared feature state, and a global store only for cross-feature coordination. Keep updates explicit and derive values instead of storing duplicates."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/state-management/state-management-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "State Management"
    link: /angular-interview-questions/state-management/
  - label: "How do you manage state in Angular?"
prev:
  text: "How does Angular Router work?"
  link: "/angular-interview-questions/routing/routing-question-1"
next:
  text: "What are Angular Signals?"
  link: "/angular-interview-questions/signals/angular-signals"
---
# How do you manage state in Angular?

## Answer

Give each piece of state one clear owner: local component state for local UI, a feature service or signal store for shared feature state, and a global store only for cross-feature coordination. Keep updates explicit and derive values instead of storing duplicates.

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
