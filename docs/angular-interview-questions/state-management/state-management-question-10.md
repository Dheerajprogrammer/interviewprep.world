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
readingMinutes: 1
answerExcerpt: "Avoid a global store for short-lived local UI state, isolated forms, or state with one obvious component owner. A global store can make simple features harder to trace and couples unrelated parts of the app."
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

Avoid a global store for short-lived local UI state, isolated forms, or state with one obvious component owner. A global store can make simple features harder to trace and couples unrelated parts of the app.

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
