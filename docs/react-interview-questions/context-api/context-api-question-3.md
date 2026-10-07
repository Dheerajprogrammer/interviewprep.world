---
layout: doc
question: true
title: "How does Context affect re-renders?"
questionTitle: "How does Context affect re-renders?"
description: "Learn How does Context affect re-renders? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "context-api"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "When a provider value changes by reference, React re-renders every descendant consumer of that context. Context bypasses prop drilling, not rendering cost, so avoid placing frequently changing unrelated state in one provider."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/context-api/context-api-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Context API"
    link: /react-interview-questions/context-api/
  - label: "How does Context affect re-renders?"
prev:
  text: "What is an outlet?"
  link: "/react-interview-questions/react-router/react-router-question-3"
next:
  text: "Why must Redux reducers be pure?"
  link: "/react-interview-questions/redux/redux-question-3"
---
# How does Context affect re-renders?

## Answer

When a provider value changes by reference, React re-renders every descendant consumer of that context. Context bypasses prop drilling, not rendering cost, so avoid placing frequently changing unrelated state in one provider.

## Example

```jsx
const ThemeContext = createContext("light")
function Button() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>Save</button>
}
```

Context avoids passing a stable shared value through every intermediate component.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
