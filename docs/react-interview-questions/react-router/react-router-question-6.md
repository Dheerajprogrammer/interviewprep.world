---
layout: doc
question: true
title: "How do you navigate programmatically?"
questionTitle: "How do you navigate programmatically?"
description: "Learn How do you navigate programmatically? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "react-router"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use the router navigation API after an explicit user action or completed workflow, and preserve useful history behavior by choosing push or replace deliberately. Prefer links for ordinary navigation because they retain browser semantics."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/react-router/react-router-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Router"
    link: /react-interview-questions/react-router/
  - label: "How do you navigate programmatically?"
prev:
  text: "How do you optimize Context consumers?"
  link: "/react-interview-questions/performance/performance-question-6"
next:
  text: "How do you test a component that consumes Context?"
  link: "/react-interview-questions/context-api/context-api-question-6"
---
# How do you navigate programmatically?

## Answer

Use the router navigation API after an explicit user action or completed workflow, and preserve useful history behavior by choosing push or replace deliberately. Prefer links for ordinary navigation because they retain browser semantics.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
