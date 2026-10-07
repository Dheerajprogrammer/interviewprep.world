---
layout: doc
question: true
title: "What is client-side routing?"
questionTitle: "What is client-side routing?"
description: "Learn What is client-side routing? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "react-router"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Client-side routing maps the browser location to UI without a full document navigation, while preserving browser history and shareable URLs. The server must still serve the application entry point for direct route visits."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/react-router/react-router-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Router"
    link: /react-interview-questions/react-router/
  - label: "What is client-side routing?"
prev:
  text: "How do you diagnose unnecessary React re-renders?"
  link: "/react-interview-questions/performance/performance-question-1"
next:
  text: "What problem does the Context API solve?"
  link: "/react-interview-questions/context-api/context-api-question-1"
---
# What is client-side routing?

## Answer

Client-side routing maps the browser location to UI without a full document navigation, while preserving browser history and shareable URLs. The server must still serve the application entry point for direct route visits.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
