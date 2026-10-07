---
layout: doc
question: true
title: "Build a paginated data table."
questionTitle: "Build a paginated data table."
description: "Learn Build a paginated data table. with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "coding-challenges"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Model page, page size, loading, data, and error state explicitly, derive request parameters from them, and provide accessible table semantics and pagination controls. Reset or clamp the page when filters change the result set."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/coding-challenges/coding-challenges-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Coding Challenges"
    link: /react-interview-questions/coding-challenges/
  - label: "Build a paginated data table."
prev:
  text: "How do you handle feature flags?"
  link: "/react-interview-questions/architecture/architecture-question-4"
next:
  text: "What is the difference between props and state?"
  link: "/react-interview-questions/basics/basics-question-5"
---
# Build a paginated data table.

## Answer

Model page, page size, loading, data, and error state explicitly, derive request parameters from them, and provide accessible table semantics and pagination controls. Reset or clamp the page when filters change the result set.

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
