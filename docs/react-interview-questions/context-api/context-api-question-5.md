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
readingMinutes: 2
answerExcerpt: "When should Context not replace a state manager? is a practical React Context interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
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

Context is dependency injection for values shared down a component tree. It is excellent for relatively stable cross-cutting values; split frequently changing values or use a store to avoid broad re-renders.

For **When should Context not replace a state manager?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```jsx
const ThemeContext = createContext("light")
function Button() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>Save</button>
}
```

Context avoids passing a stable shared value through every intermediate component.

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

For this easy-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
