---
layout: doc
question: true
title: "What is `useRef` used for?"
questionTitle: "What is `useRef` used for?"
description: "Learn What is `useRef` used for? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is `useRef` used for? is a practical React hooks interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "What is `useRef` used for?"
prev:
  text: "What are keys and why are they important?"
  link: "/react-interview-questions/basics/basics-question-7"
next:
  text: "When should you use a client-state library?"
  link: "/react-interview-questions/state-management/state-management-question-7"
---
# What is `useRef` used for?

## Answer

Hooks let function components use state, effects, and reusable stateful logic. Call them unconditionally at the top level, keep dependencies accurate, and clean up subscriptions or timers created by effects.

For **What is `useRef` used for?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

The functional update reads the latest state, which is safe when updates are queued.

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

For this medium-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
