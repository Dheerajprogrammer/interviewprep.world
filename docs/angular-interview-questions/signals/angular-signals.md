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
readingMinutes: 3
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

## How dependency tracking works

Reading a signal inside a computed value or template registers a dependency. When the signal changes, Angular marks the dependent computation or view so it can be evaluated again. Dependencies are dynamic: if a computed function takes one branch, only the signals read by that branch participate until the next evaluation. A computed value is lazy and memoized, so Angular recalculates it only when it is read after one of its dependencies changes.

Use writable signals for state that has a clear owner, computed signals for values that can be derived, and effects only to synchronize with an imperative external system such as logging, storage, or a non-Angular widget. An effect that writes other application state often creates hidden update chains; an event handler or computed value usually expresses that relationship more clearly.

Signals and RxJS solve overlapping but different problems. Signals are well suited to synchronous current values used by templates. Observables remain powerful for asynchronous event sequences, cancellation, time-based operators, and multicasting external sources. Angular interop utilities can convert at a boundary, but repeatedly converting back and forth makes ownership harder to understand.

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

In the cart example, `items` is the source of truth and `total` is derived state. Adding or removing an item invalidates the computed value; the total is recalculated when the template reads it. Storing `total` in a second writable signal would create two values that can disagree. The update should also return a new array or use an explicit update that Angular can observe rather than silently mutating nested data.

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

## Copyable example

```typescript
// What are Angular Signals?
// Signals are reactive primitives that hold values and notify dependents when they change, enabling fine-grained updates with signal, computed, and effect.
readonly count = signal(0)
readonly doubled = computed(() => this.count() * 2)
increment() { this.count.update(value => value + 1) }
```

This Angular snippet uses the APIs and patterns from the Angular signals section rather than a shared fallback component.
