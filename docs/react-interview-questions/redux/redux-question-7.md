---
layout: doc
question: true
title: "What is middleware?"
questionTitle: "What is middleware?"
description: "Learn What is middleware? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "redux"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Middleware sits between dispatch and reducers, where it can observe actions, trigger side effects, transform actions, or add logging. It should not hide core business state transitions from reducers."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/redux/redux-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Redux"
    link: /react-interview-questions/redux/
  - label: "What is middleware?"
prev:
  text: "How do you compose multiple providers?"
  link: "/react-interview-questions/context-api/context-api-question-7"
next:
  text: "What is `useImperativeHandle`?"
  link: "/react-interview-questions/advanced/advanced-question-7"
---
# What is middleware?

## Answer

Middleware sits between dispatch and reducers, where it can observe actions, trigger side effects, transform actions, or add logging. It should not hide core business state transitions from reducers.

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
