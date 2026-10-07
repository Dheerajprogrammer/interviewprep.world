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
readingMinutes: 2
answerExcerpt: "How do you compose multiple providers? is a practical React Context interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
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

Context is dependency injection for values shared down a component tree. It is excellent for relatively stable cross-cutting values; split frequently changing values or use a store to avoid broad re-renders.

For **How do you compose multiple providers?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this hard-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
