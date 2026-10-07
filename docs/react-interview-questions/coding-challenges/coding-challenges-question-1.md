---
layout: doc
question: true
title: "Build a searchable, sortable React list."
questionTitle: "Build a searchable, sortable React list."
description: "Learn Build a searchable, sortable React list. with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keep the raw items, query, and sort choice as state; derive the filtered and sorted list during render, preserving stable item keys. Debounce only expensive remote search, and make sort controls keyboard accessible."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/coding-challenges/coding-challenges-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Coding Challenges"
    link: /react-interview-questions/coding-challenges/
  - label: "Build a searchable, sortable React list."
prev:
  text: "How do you organize a scalable React project?"
  link: "/react-interview-questions/architecture/architecture-question-1"
next:
  text: "What is the Virtual DOM?"
  link: "/react-interview-questions/basics/basics-question-2"
---
# Build a searchable, sortable React list.

## Answer

Keep the raw items, query, and sort choice as state; derive the filtered and sorted list during render, preserving stable item keys. Debounce only expensive remote search, and make sort controls keyboard accessible.

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
