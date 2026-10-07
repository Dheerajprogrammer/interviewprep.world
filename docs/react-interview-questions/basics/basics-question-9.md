---
layout: doc
question: true
title: "What is an uncontrolled component?"
questionTitle: "What is an uncontrolled component?"
description: "Learn What is an uncontrolled component? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is an uncontrolled component? is a practical React fundamentals interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is an uncontrolled component?"
prev:
  text: "Build a virtualized list."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-8"
next:
  text: "How do stale closures happen in Hooks?"
  link: "/react-interview-questions/hooks/hooks-question-9"
---
# What is an uncontrolled component?

## Answer

React renders a UI description from props and state, then reconciles it with the previous tree. Predictable data flow, stable identity, and rendering without side effects are the foundations of reliable components.

For **What is an uncontrolled component?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}
// <Greeting name="Ada" />
```

A React component is a function of its props and state that returns UI.

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
