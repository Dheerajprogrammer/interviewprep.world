---
layout: doc
question: true
title: "What are the core Redux principles?"
questionTitle: "What are the core Redux principles?"
description: "Learn What are the core Redux principles? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "redux"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Redux keeps state in one store, updates it through dispatched actions, and calculates the next state with pure reducers. The model makes state changes explicit, inspectable, and easier to test."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/redux/redux-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Redux"
    link: /frontend-interview-questions/redux/
  - label: "What are the core Redux principles?"
prev:
  text: "What is Next.js?"
  link: "/frontend-interview-questions/next-js/next-js-question-1"
next:
  text: "What is an Observable?"
  link: "/frontend-interview-questions/rxjs/rxjs-question-1"
---
# What are the core Redux principles?

## Answer

Redux keeps state in one store, updates it through dispatched actions, and calculates the next state with pure reducers. The model makes state changes explicit, inspectable, and easier to test.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
