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
readingMinutes: 2
answerExcerpt: "What is client-side routing? is a practical React Router interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
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

A router maps location to nested UI. Good routing keeps URL state shareable, loads data at route boundaries, handles missing and unauthorized routes, and delays feature code until it is needed.

For **What is client-side routing?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this medium-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
