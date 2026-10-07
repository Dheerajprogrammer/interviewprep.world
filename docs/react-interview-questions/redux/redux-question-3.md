---
layout: doc
question: true
title: "Why must Redux reducers be pure?"
questionTitle: "Why must Redux reducers be pure?"
description: "Learn Why must Redux reducers be pure? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "redux"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A pure reducer returns the same next state for the same inputs and has no side effects. That makes replay, testing, time-travel debugging, and predictable updates possible."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/redux/redux-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Redux"
    link: /react-interview-questions/redux/
  - label: "Why must Redux reducers be pure?"
prev:
  text: "How does Context affect re-renders?"
  link: "/react-interview-questions/context-api/context-api-question-3"
next:
  text: "What is a render prop?"
  link: "/react-interview-questions/advanced/advanced-question-3"
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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
