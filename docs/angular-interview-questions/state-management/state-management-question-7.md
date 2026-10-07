---
layout: doc
question: true
title: "How do you model loading and error state?"
questionTitle: "How do you model loading and error state?"
description: "Learn How do you model loading and error state? with answers, examples, and real interview scenarios for Angular interviews."
difficulty: easy
experienceLevel: junior
tags: ["angular", "state-management"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Model request state explicitly—such as idle, loading, success with data, and error with recoverable details—rather than using a single boolean. Keep stale data and refresh state separate when the UX needs them."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/state-management/state-management-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "State Management"
    link: /angular-interview-questions/state-management/
  - label: "How do you model loading and error state?"
prev:
  text: "How do you create child routes?"
  link: "/angular-interview-questions/routing/routing-question-7"
next:
  text: "How do signals interoperate with RxJS?"
  link: "/angular-interview-questions/signals/signals-question-7"
---
# How do you model loading and error state?

## Answer

Model request state explicitly—such as idle, loading, success with data, and error with recoverable details—rather than using a single boolean. Keep stale data and refresh state separate when the UX needs them.

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
