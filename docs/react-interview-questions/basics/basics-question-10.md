---
layout: doc
question: true
title: "What is React Strict Mode?"
questionTitle: "What is React Strict Mode?"
description: "Learn What is React Strict Mode? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "basics"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is React Strict Mode? is a practical React fundamentals interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/basics-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is React Strict Mode?"
prev:
  text: "Build an accessible tabs component."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-9"
next:
  text: "How do you avoid an infinite effect loop?"
  link: "/react-interview-questions/hooks/hooks-question-10"
---
# What is React Strict Mode?

## Answer

React renders a UI description from props and state, then reconciles it with the previous tree. Predictable data flow, stable identity, and rendering without side effects are the foundations of reliable components.

For **What is React Strict Mode?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this easy-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
