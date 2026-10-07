---
layout: doc
question: true
title: "Difference between Subject and BehaviorSubject"
questionTitle: "Difference between Subject and BehaviorSubject"
description: "Compare RxJS Subject vs BehaviorSubject with interview answers, examples, and when to use each in Angular apps."
difficulty: medium
experienceLevel: mid
tags: ["rxjs", "subject", "behaviorsubject", "angular"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "Subject has no initial value and does not replay to late subscribers; BehaviorSubject requires an initial value and emits the latest value immediately to new subscribers."
outline: deep
canonical: "https://interviewprep.world/angular-interview-questions/rxjs/subject-vs-behaviorsubject"
breadcrumbs:
  - label: Home
    link: /
  - label: "Angular"
    link: /angular-interview-questions/
  - label: "RxJS"
    link: /angular-interview-questions/rxjs/
  - label: "Difference between Subject and BehaviorSubject"
prev:
  text: "What is dependency injection?"
  link: "/angular-interview-questions/dependency-injection/dependency-injection-question-1"
next:
  text: "How does Angular Router work?"
  link: "/angular-interview-questions/routing/routing-question-1"
---
# Difference between Subject and BehaviorSubject

## Answer

Both **Subject** and **BehaviorSubject** are multicast observables you can use as both observer and observable.

| | `Subject` | `BehaviorSubject` |
|---|-----------|-------------------|
| Initial value | No | Required |
| Late subscriber | Misses prior emissions | Gets latest value immediately |
| Typical use | Fire-and-forget events | State snapshots, selected entity |

## Code Examples

```typescript
import { Subject, BehaviorSubject } from 'rxjs'

const subject = new Subject<number>()
subject.subscribe(v => console.log('A', v))
subject.next(1)
subject.subscribe(v => console.log('B', v)) // B does not log 1
subject.next(2)

const behavior = new BehaviorSubject(0)
behavior.subscribe(v => console.log('C', v))
behavior.next(1)
behavior.subscribe(v => console.log('D', v)) // D logs 1 immediately
```

```typescript
// Common Angular pattern: selected ID stream
private readonly selectedId$ = new BehaviorSubject<string | null>(null)
readonly selectedIdChanges$ = this.selectedId$.asObservable()
```

## Common Mistakes

- Using `Subject` for state that new components must hydrate immediately.
- Exposing the `BehaviorSubject` publicly instead of `asObservable()`.
- Forgetting `getValue()` is imperative—prefer reactive flows in templates with async pipe.

## Follow-up Questions

- When would you use `ReplaySubject` or `AsyncSubject`?
- How does this relate to NgRx/component stores?
- Hot vs cold observables—where do subjects fit?

## Real Interview Scenarios

You are given a broken dashboard where a child route loads late and never receives the current filter—fixing with `BehaviorSubject` or shared store state is a classic prompt.
