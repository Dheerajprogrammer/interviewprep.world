---
layout: doc
question: true
title: "How do nested routes work in React Router?"
questionTitle: "How do nested routes work in React Router?"
description: "Learn How do nested routes work in React Router? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "react-router"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Nested route definitions render parent layouts around matching child routes. The parent uses an Outlet to choose where the active child appears, which keeps shared navigation and data boundaries close to the feature hierarchy."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/react-router/react-router-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Router"
    link: /react-interview-questions/react-router/
  - label: "How do nested routes work in React Router?"
prev:
  text: "What does `React.memo` do?"
  link: "/react-interview-questions/performance/performance-question-2"
next:
  text: "How do you create and consume Context?"
  link: "/react-interview-questions/context-api/context-api-question-2"
---
# How do nested routes work in React Router?

## Answer

Nested route definitions render parent layouts around matching child routes. The parent uses an Outlet to choose where the active child appears, which keeps shared navigation and data boundaries close to the feature hierarchy.

## Example

```jsx
<Route path="projects/:projectId" element={<Project />} />
function Project() {
  const { projectId } = useParams()
  return <h1>Project {projectId}</h1>
}
```

The URL parameter is input to the route component and should be validated before use.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
