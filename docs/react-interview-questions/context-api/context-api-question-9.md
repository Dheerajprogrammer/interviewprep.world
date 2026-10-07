---
layout: doc
question: true
title: "How do you update Context from a child?"
questionTitle: "How do you update Context from a child?"
description: "Learn How do you update Context from a child? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "context-api"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Provide an explicit callback, dispatch function, or store API as part of the context value and call it from the child. Keep state ownership in the provider rather than letting consumers mutate shared objects directly."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/context-api/context-api-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Context API"
    link: /react-interview-questions/context-api/
  - label: "How do you update Context from a child?"
prev:
  text: "How do you preserve query parameters?"
  link: "/react-interview-questions/react-router/react-router-question-9"
next:
  text: "How do you avoid unnecessary Redux re-renders?"
  link: "/react-interview-questions/redux/redux-question-9"
---
# How do you update Context from a child?

## Answer

Provide an explicit callback, dispatch function, or store API as part of the context value and call it from the child. Keep state ownership in the provider rather than letting consumers mutate shared objects directly.

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
