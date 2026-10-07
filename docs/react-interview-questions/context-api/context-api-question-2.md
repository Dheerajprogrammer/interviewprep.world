---
layout: doc
question: true
title: "How do you create and consume Context?"
questionTitle: "How do you create and consume Context?"
description: "Learn How do you create and consume Context? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "context-api"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Create a context with a safe default, wrap consumers in a provider with the intended value, and read it with `useContext`. Keep the provider close to the feature that owns the value when it is not truly application-wide."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/context-api/context-api-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Context API"
    link: /react-interview-questions/context-api/
  - label: "How do you create and consume Context?"
prev:
  text: "How do nested routes work in React Router?"
  link: "/react-interview-questions/react-router/react-router-question-2"
next:
  text: "What are actions, reducers, and the store?"
  link: "/react-interview-questions/redux/redux-question-2"
---
# How do you create and consume Context?

## Answer

Create a context with a safe default, wrap consumers in a provider with the intended value, and read it with `useContext`. Keep the provider close to the feature that owns the value when it is not truly application-wide.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
