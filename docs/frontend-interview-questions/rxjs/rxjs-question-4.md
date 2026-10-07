---
layout: doc
question: true
title: "When do you use BehaviorSubject?"
questionTitle: "When do you use BehaviorSubject?"
description: "Learn When do you use BehaviorSubject? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a BehaviorSubject when subscribers need the current value immediately, such as a small state store. It requires an initial value and exposes the latest value, so avoid it for one-off event streams."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "When do you use BehaviorSubject?"
prev:
  text: "What is Redux Toolkit?"
  link: "/frontend-interview-questions/redux/redux-question-4"
next:
  text: "How do you improve Interaction to Next Paint?"
  link: "/frontend-interview-questions/performance/performance-question-4"
---
# When do you use BehaviorSubject?

## Answer

Use a BehaviorSubject when subscribers need the current value immediately, such as a small state store. It requires an initial value and exposes the latest value, so avoid it for one-off event streams.

## Example

```ts
const results$ = query$.pipe(
  debounceTime(250),
  distinctUntilChanged(),
  switchMap(query => api.search(query))
)
```

`switchMap` ensures an older search result cannot overwrite a newer query.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
