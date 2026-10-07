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
readingMinutes: 2
answerExcerpt: "Why must Redux reducers be pure? is a practical Redux interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
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

Redux centralizes state transitions as explicit actions reduced into immutable state. Keep reducers pure, derive views with selectors, and isolate I/O in middleware or async workflows.

For **Why must Redux reducers be pure?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
const todosSlice = createSlice({
  name: "todos", initialState: [],
  reducers: { added: (state, action) => { state.push(action.payload) } }
})
```

Redux Toolkit uses Immer, so this reducer syntax produces an immutable update.

## How to structure your answer

1. Define the concept in one or two sentences.
2. Explain when you would use it and when you would choose an alternative.
3. Walk through a small example, including an edge case.
4. Close with how you would test or measure the result.

## Common mistakes

- Repeating a definition without connecting it to real code.
- Treating an optimization or abstraction as a default rather than a trade-off.
- Omitting lifecycle, error, cleanup, accessibility, or testing considerations when they apply.

## Follow-up prompts

- What failure mode would you expect if this were implemented incorrectly?
- How would you test this behaviour?
- What changes when the feature must scale to a larger application or team?

## Interview tip

For this hard-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
