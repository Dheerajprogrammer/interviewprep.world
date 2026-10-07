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
readingMinutes: 2
answerExcerpt: "How do nested routes work in React Router? is a practical React Router interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
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

A router maps location to nested UI. Good routing keeps URL state shareable, loads data at route boundaries, handles missing and unauthorized routes, and delays feature code until it is needed.

For **How do nested routes work in React Router?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```jsx
<Route path="projects/:projectId" element={<Project />} />
function Project() {
  const { projectId } = useParams()
  return <h1>Project {projectId}</h1>
}
```

The URL parameter is input to the route component and should be validated before use.

## How to structure your answer

1. Define the concept in one or two sentences.
2. Explain when you would use it and when you would choose an alternative.
3. Walk through a small example, including an edge case.
4. Close with how you would test or measure the result.

## Common mistakes

- Repeating a definition without connecting it to real code.
- Treating an optimization or abstraction as a default rather than a trade-off.
- Omitting lifecycle, error, cleanup, accessibility, or testing considerations when they apply.

## Follow-up prompts

- What failure mode would you expect if this were implemented incorrectly?
- How would you test this behaviour?
- What changes when the feature must scale to a larger application or team?

## Interview tip

For this hard-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
