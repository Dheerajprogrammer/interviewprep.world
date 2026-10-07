---
layout: doc
question: true
title: "Build a virtualized list."
questionTitle: "Build a virtualized list."
description: "Learn Build a virtualized list. with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Render only visible rows plus overscan, calculate their offset within a full-height scroll area, and use stable keys. Handle variable row height, focus, and screen-reader access deliberately or use a well-tested virtualization library."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/coding-challenges/coding-challenges-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Coding Challenges"
    link: /react-interview-questions/coding-challenges/
  - label: "Build a virtualized list."
prev:
  text: "How do you handle global errors?"
  link: "/react-interview-questions/architecture/architecture-question-8"
next:
  text: "What is an uncontrolled component?"
  link: "/react-interview-questions/basics/basics-question-9"
---
# Build a virtualized list.

## Answer

Render only visible rows plus overscan, calculate their offset within a full-height scroll area, and use stable keys. Handle variable row height, focus, and screen-reader access deliberately or use a well-tested virtualization library.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
