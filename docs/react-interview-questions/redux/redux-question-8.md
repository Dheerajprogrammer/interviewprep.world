---
layout: doc
question: true
title: "What is normalized state?"
questionTitle: "What is normalized state?"
description: "Learn What is normalized state? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "redux"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Normalized state stores each entity once by ID and keeps relationships as ID references. It prevents duplicated, inconsistent copies and makes targeted updates efficient."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/redux/redux-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Redux"
    link: /react-interview-questions/redux/
  - label: "What is normalized state?"
prev:
  text: "How do you give Context a safe default?"
  link: "/react-interview-questions/context-api/context-api-question-8"
next:
  text: "What is hydration?"
  link: "/react-interview-questions/advanced/advanced-question-8"
---
# What is normalized state?

## Answer

Normalized state stores each entity once by ID and keeps relationships as ID references. It prevents duplicated, inconsistent copies and makes targeted updates efficient.

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
