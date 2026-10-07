---
layout: doc
question: true
title: "When is a service with RxJS enough?"
questionTitle: "When is a service with RxJS enough?"
description: "Learn When is a service with RxJS enough? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: medium
experienceLevel: mid
tags: ["angular", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A service with an Observable or BehaviorSubject is enough when state belongs to one feature, transitions are simple, and the team can understand the update flow. Introduce a larger store when coordination, effects, or debugging needs justify its overhead."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/state-management/state-management-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "State Management"
    link: /angular-interview-questions/state-management/
  - label: "When is a service with RxJS enough?"
prev:
  text: "What is a router outlet?"
  link: "/angular-interview-questions/routing/routing-question-2"
next:
  text: "What is the difference between `signal`, `computed`, and `effect`?"
  link: "/angular-interview-questions/signals/signals-question-2"
---
# When is a service with RxJS enough?

## Answer

A service with an Observable or BehaviorSubject is enough when state belongs to one feature, transitions are simple, and the team can understand the update flow. Introduce a larger store when coordination, effects, or debugging needs justify its overhead.

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
