---
layout: doc
question: true
title: "Build an optimistic todo list."
questionTitle: "Build an optimistic todo list."
description: "Learn Build an optimistic todo list. with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Apply the local change with a temporary ID or pending state, send an idempotent mutation, reconcile with the server result, and roll back or show a recoverable error on failure. Guard against concurrent edits and stale responses."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/coding-challenges/coding-challenges-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Coding Challenges"
    link: /react-interview-questions/coding-challenges/
  - label: "Build an optimistic todo list."
prev:
  text: "How do you migrate a legacy React application?"
  link: "/react-interview-questions/architecture/architecture-question-10"
---
# Build an optimistic todo list.

## Answer

Apply the local change with a temporary ID or pending state, send an idempotent mutation, reconcile with the server result, and roll back or show a recoverable error on failure. Guard against concurrent edits and stale responses.

## Example

```jsx
function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("")
  return <input value={query} onChange={e => {
    setQuery(e.target.value); onSearch(e.target.value)
  }} />
}
```

Start with a controlled, accessible interaction; add debounce, loading, and errors around it.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
