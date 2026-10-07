---
layout: doc
question: true
title: "What do debounceTime and distinctUntilChanged do?"
questionTitle: "What do debounceTime and distinctUntilChanged do?"
description: "Learn What do debounceTime and distinctUntilChanged do? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "rxjs"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`debounceTime` waits for a quiet period before emitting, while `distinctUntilChanged` suppresses consecutive equal values. Together they prevent search or autosave work from running for every keystroke."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/rxjs/rxjs-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "RxJS"
    link: /frontend-interview-questions/rxjs/
  - label: "What do debounceTime and distinctUntilChanged do?"
prev:
  text: "How do you handle async logic with Redux?"
  link: "/frontend-interview-questions/redux/redux-question-6"
next:
  text: "When should you lazy load code or images?"
  link: "/frontend-interview-questions/performance/performance-question-6"
---
# What do debounceTime and distinctUntilChanged do?

## Answer

`debounceTime` waits for a quiet period before emitting, while `distinctUntilChanged` suppresses consecutive equal values. Together they prevent search or autosave work from running for every keystroke.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
