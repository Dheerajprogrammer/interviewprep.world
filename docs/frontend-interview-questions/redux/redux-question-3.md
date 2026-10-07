---
layout: doc
question: true
title: "Why must Redux reducers be pure?"
questionTitle: "Why must Redux reducers be pure?"
description: "Learn Why must Redux reducers be pure? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "redux"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A pure reducer returns the same next state for the same inputs and has no side effects. That makes replay, testing, time-travel debugging, and predictable updates possible."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/redux/redux-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Redux"
    link: /frontend-interview-questions/redux/
  - label: "Why must Redux reducers be pure?"
prev:
  text: "What are React Server Components in Next.js?"
  link: "/frontend-interview-questions/next-js/next-js-question-3"
next:
  text: "What is a Subject?"
  link: "/frontend-interview-questions/rxjs/rxjs-question-3"
---
# Why must Redux reducers be pure?

## Answer

A pure reducer returns the same next state for the same inputs and has no side effects. That makes replay, testing, time-travel debugging, and predictable updates possible.

## Example

```js
const todosSlice = createSlice({
  name: "todos", initialState: [],
  reducers: { added: (state, action) => { state.push(action.payload) } }
})
```

Redux Toolkit uses Immer, so this reducer syntax produces an immutable update.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
