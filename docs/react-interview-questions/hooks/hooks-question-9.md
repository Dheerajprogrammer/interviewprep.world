---
layout: doc
question: true
title: "How do stale closures happen in Hooks?"
questionTitle: "How do stale closures happen in Hooks?"
description: "Learn How do stale closures happen in Hooks? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "hooks"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "How do stale closures happen in Hooks? is a practical React hooks interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/hooks/hooks-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Hooks"
    link: /react-interview-questions/hooks/
  - label: "How do stale closures happen in Hooks?"
prev:
  text: "What is an uncontrolled component?"
  link: "/react-interview-questions/basics/basics-question-9"
next:
  text: "What is optimistic UI?"
  link: "/react-interview-questions/state-management/state-management-question-9"
---
# How do stale closures happen in Hooks?

## Answer

Hooks let function components use state, effects, and reusable stateful logic. Call them unconditionally at the top level, keep dependencies accurate, and clean up subscriptions or timers created by effects.

For **How do stale closures happen in Hooks?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this easy-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
