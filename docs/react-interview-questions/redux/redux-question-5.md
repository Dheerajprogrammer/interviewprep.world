---
layout: doc
question: true
title: "What is a selector?"
questionTitle: "What is a selector?"
description: "Learn What is a selector? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "redux"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "A selector reads or derives a view of store state. Memoized selectors avoid repeating expensive derivations and give components a stable, focused subscription boundary."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/redux/redux-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Redux"
    link: /react-interview-questions/redux/
  - label: "What is a selector?"
prev:
  text: "When should Context not replace a state manager?"
  link: "/react-interview-questions/context-api/context-api-question-5"
next:
  text: "What are compound components?"
  link: "/react-interview-questions/advanced/advanced-question-5"
---
# What is a selector?

## Answer

A selector reads or derives a view of store state. Memoized selectors avoid repeating expensive derivations and give components a stable, focused subscription boundary.

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
