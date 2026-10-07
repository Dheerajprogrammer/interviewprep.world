---
layout: doc
question: true
title: "How do you protect a route?"
questionTitle: "How do you protect a route?"
description: "Learn How do you protect a route? with answers, examples, and real interview scenarios for React interviews."
difficulty: hard
experienceLevel: senior
tags: ["react", "react-router"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Use a route-level loader, wrapper, or redirect to keep unauthorized users out of protected UI and send them to sign-in or an access-denied page. This is only a UX layer; the API must enforce authorization independently."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/react-router/react-router-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Router"
    link: /react-interview-questions/react-router/
  - label: "How do you protect a route?"
prev:
  text: "What is code splitting with `lazy` and `Suspense`?"
  link: "/react-interview-questions/performance/performance-question-5"
next:
  text: "When should Context not replace a state manager?"
  link: "/react-interview-questions/context-api/context-api-question-5"
---
# How do you protect a route?

## Answer

Use a route-level loader, wrapper, or redirect to keep unauthorized users out of protected UI and send them to sign-in or an access-denied page. This is only a UX layer; the API must enforce authorization independently.

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
