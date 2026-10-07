---
layout: doc
question: true
title: "What are Angular Signals?"
questionTitle: "What are Angular Signals?"
description: "Learn Angular Signals interview questions with reactive primitives, computed values, and change detection trade-offs."
difficulty: medium
experienceLevel: mid
tags: ["angular", "signals", "reactivity"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "Signals are reactive primitives that hold values and notify dependents when they change, enabling fine-grained updates with signal, computed, and effect."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/signals/angular-signals"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "Angular Signals"
    link: /angular-interview-questions/signals/
  - label: "What are Angular Signals?"
prev:
  text: "How do you manage state in Angular?"
  link: "/angular-interview-questions/state-management/state-management-question-1"
next:
  text: "How does Angular change detection work?"
  link: "/angular-interview-questions/performance/performance-question-1"
---
# What are Angular Signals?

## Answer

**Angular Signals** provide a reactive model for state: a **signal** holds a value, **computed** derives values from other signals, and **effect** runs side effects when dependencies change.

Signals integrate with modern Angular change detection—often paired with `OnPush`—and can reduce reliance on Zone.js for many update paths.

## Code Examples

```typescript
import { signal, computed, effect } from '@angular/core'

const count = signal(0)
const double = computed(() => count() * 2)

effect(() => {
  console.log('count:', count(), 'double:', double())
})

count.set(count() + 1)
```

```typescript
@Component({
  template: `<p>{{ total() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSummary {
  items = signal<CartItem[]>([])
  total = computed(() =>
    this.items().reduce((sum, i) => sum + i.price * i.qty, 0),
  )
}
```

## Common Mistakes

- Mutating objects inside signals without producing a new reference when needed.
- Using `effect` for business logic that belongs in services or explicit handlers.
- Assuming signals replace RxJS everywhere—streams still fit async events and multicasting.

## Follow-up Questions

- How do signals compare to observables for UI state?
- What is `linkedSignal` / input signals (version-dependent)?
- How do signals interact with SSR and hydration?

## Real Interview Scenarios

You might refactor a component that overuses async pipe and global state into signal-based local state and justify when to keep RxJS.
