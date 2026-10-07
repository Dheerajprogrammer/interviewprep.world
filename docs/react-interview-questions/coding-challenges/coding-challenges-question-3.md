---
layout: doc
question: true
title: "Build a reusable modal component."
questionTitle: "Build a reusable modal component."
description: "Learn Build a reusable modal component. with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Render the dialog in a portal, move focus into it, trap Tab navigation, close on Escape when appropriate, restore trigger focus, and expose an accessible name. Treat background content as inert while the dialog is open."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/coding-challenges/coding-challenges-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Coding Challenges"
    link: /react-interview-questions/coding-challenges/
  - label: "Build a reusable modal component."
prev:
  text: "How do you design reusable components?"
  link: "/react-interview-questions/architecture/architecture-question-3"
next:
  text: "What is JSX?"
  link: "/react-interview-questions/basics/basics-question-4"
---
# Build a reusable modal component.

## Answer

Render the dialog in a portal, move focus into it, trap Tab navigation, close on Escape when appropriate, restore trigger focus, and expose an accessible name. Treat background content as inert while the dialog is open.

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
