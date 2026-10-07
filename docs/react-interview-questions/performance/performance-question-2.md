---
layout: doc
question: true
title: "What does `React.memo` do?"
questionTitle: "What does `React.memo` do?"
description: "Learn What does `React.memo` do? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "performance"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What does `React.memo` do? is a practical React performance interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/performance/performance-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "Performance Optimization"
    link: /react-interview-questions/performance/
  - label: "What does `React.memo` do?"
prev:
  text: "What is lifting state up?"
  link: "/react-interview-questions/state-management/state-management-question-2"
next:
  text: "How do nested routes work in React Router?"
  link: "/react-interview-questions/react-router/react-router-question-2"
---
# What does `React.memo` do?

## Answer

React performance improvements should follow profiling. Preserve stable component identity, virtualize large collections, split slow code, and memoize only where measurements show repeated expensive work.

For **What does `React.memo` do?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```jsx
const visibleRows = useMemo(
  () => rows.filter(row => row.visible),
  [rows]
)
```

Memoize only after profiling shows this calculation is expensive or causes avoidable child work.

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
