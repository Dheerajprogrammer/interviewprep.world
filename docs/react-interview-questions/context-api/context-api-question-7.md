---
layout: doc
question: true
title: "How do you compose multiple providers?"
questionTitle: "How do you compose multiple providers?"
description: "Learn How do you compose multiple providers? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "context-api"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Nest providers in a stable application or feature shell, or create a small composed provider component when the grouping is meaningful. Keep unrelated providers separate enough that ownership and test setup remain clear."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/context-api/context-api-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Context API"
    link: /react-interview-questions/context-api/
  - label: "How do you compose multiple providers?"
prev:
  text: "What are loaders and actions?"
  link: "/react-interview-questions/react-router/react-router-question-7"
next:
  text: "What is middleware?"
  link: "/react-interview-questions/redux/redux-question-7"
---
# How do you compose multiple providers?

## Answer

Nest providers in a stable application or feature shell, or create a small composed provider component when the grouping is meaningful. Keep unrelated providers separate enough that ownership and test setup remain clear.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
