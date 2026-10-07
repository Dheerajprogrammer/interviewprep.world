---
layout: doc
question: true
title: "When should Context not replace a state manager?"
questionTitle: "When should Context not replace a state manager?"
description: "Learn When should Context not replace a state manager? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "context-api"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Do not use Context as a full state manager when many features need coordinated updates, derived selectors, persistence, devtools, or independent subscriptions. Context is a transport mechanism, not an opinionated state-transition system."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/context-api/context-api-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Context API"
    link: /react-interview-questions/context-api/
  - label: "When should Context not replace a state manager?"
prev:
  text: "How do you protect a route?"
  link: "/react-interview-questions/react-router/react-router-question-5"
next:
  text: "What is a selector?"
  link: "/react-interview-questions/redux/redux-question-5"
---
# When should Context not replace a state manager?

## Answer

Do not use Context as a full state manager when many features need coordinated updates, derived selectors, persistence, devtools, or independent subscriptions. Context is a transport mechanism, not an opinionated state-transition system.

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
