---
layout: doc
question: true
title: "What are loaders and actions?"
questionTitle: "What are loaders and actions?"
description: "Learn What are loaders and actions? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "react-router"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Loaders fetch route data before rendering and actions handle route-scoped mutations such as form submissions. They centralize pending, error, and revalidation behavior at the routing boundary."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/react-router/react-router-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Router"
    link: /react-interview-questions/react-router/
  - label: "What are loaders and actions?"
prev:
  text: "How do stable keys improve rendering?"
  link: "/react-interview-questions/performance/performance-question-7"
next:
  text: "How do you compose multiple providers?"
  link: "/react-interview-questions/context-api/context-api-question-7"
---
# What are loaders and actions?

## Answer

Loaders fetch route data before rendering and actions handle route-scoped mutations such as form submissions. They centralize pending, error, and revalidation behavior at the routing boundary.

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
