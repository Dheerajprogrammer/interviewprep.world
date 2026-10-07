---
layout: doc
question: true
title: "Where should state live in a React application?"
questionTitle: "Where should state live in a React application?"
description: "Learn Where should state live in a React application? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "state-management"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "Where should state live in a React application? is a practical React state interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/state-management/state-management-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "State Management"
    link: /react-interview-questions/state-management/
  - label: "Where should state live in a React application?"
prev:
  text: "Explain the useEffect Hook"
  link: "/react-interview-questions/hooks/use-effect"
next:
  text: "How do you diagnose unnecessary React re-renders?"
  link: "/react-interview-questions/performance/performance-question-1"
---
# Where should state live in a React application?

## Answer

Keep state close to the components that need it and store the minimum source of truth. Derive values during render where possible, update immutably, and model pending, successful, and failed async states distinctly.

For **Where should state live in a React application?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```jsx
setTodos(current => current.map(todo =>
  todo.id === id ? { ...todo, done: !todo.done } : todo
))
```

Create new objects for changed values so React can detect the update by identity.

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
