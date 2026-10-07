---
layout: doc
question: true
title: "What are actions, reducers, and the store?"
questionTitle: "What are actions, reducers, and the store?"
description: "Learn What are actions, reducers, and the store? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "redux"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An action describes an event, a reducer returns the next state for that action, and the store holds state and notifies subscribers. Application code dispatches actions instead of mutating the store directly."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/redux/redux-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Redux"
    link: /react-interview-questions/redux/
  - label: "What are actions, reducers, and the store?"
prev:
  text: "How do you create and consume Context?"
  link: "/react-interview-questions/context-api/context-api-question-2"
next:
  text: "What are portals?"
  link: "/react-interview-questions/advanced/advanced-question-2"
---
# What are actions, reducers, and the store?

## Answer

An action describes an event, a reducer returns the next state for that action, and the store holds state and notifies subscribers. Application code dispatches actions instead of mutating the store directly.

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
