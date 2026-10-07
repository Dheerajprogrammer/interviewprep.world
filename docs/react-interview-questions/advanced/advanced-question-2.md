---
layout: doc
question: true
title: "What are portals?"
questionTitle: "What are portals?"
description: "Learn What are portals? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "advanced"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What are portals? is a practical advanced React patterns interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/advanced/advanced-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Advanced React"
    link: /react-interview-questions/advanced/
  - label: "What are portals?"
prev:
  text: "What are actions, reducers, and the store?"
  link: "/react-interview-questions/redux/redux-question-2"
next:
  text: "How do you separate presentational and container concerns?"
  link: "/react-interview-questions/architecture/architecture-question-2"
---
# What are portals?

## Answer

Advanced React APIs solve composition and integration problems: rendering outside the tree, recovering from errors, exposing imperative bridges, or sharing behaviour. Choose the smallest abstraction that keeps ownership clear.

For **What are portals?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```jsx
function Modal({ children }) {
  return createPortal(children, document.body)
}
```

A portal changes where DOM is mounted while preserving React context and event behaviour.

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
