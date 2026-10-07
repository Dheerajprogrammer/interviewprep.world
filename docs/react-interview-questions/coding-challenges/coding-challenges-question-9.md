---
layout: doc
question: true
title: "Build an accessible tabs component."
questionTitle: "Build an accessible tabs component."
description: "Learn Build an accessible tabs component. with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use tab, tablist, and tabpanel roles with linked IDs; support arrow-key navigation, Home and End, visible focus, and the chosen activation model. Keep the selected tab state controlled by the parent or a clear compound-component boundary."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/coding-challenges/coding-challenges-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Coding Challenges"
    link: /react-interview-questions/coding-challenges/
  - label: "Build an accessible tabs component."
prev:
  text: "How do you design a design-system component?"
  link: "/react-interview-questions/architecture/architecture-question-9"
next:
  text: "What is React Strict Mode?"
  link: "/react-interview-questions/basics/basics-question-10"
---
# Build an accessible tabs component.

## Answer

Use tab, tablist, and tabpanel roles with linked IDs; support arrow-key navigation, Home and End, visible focus, and the chosen activation model. Keep the selected tab state controlled by the parent or a clear compound-component boundary.

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
