---
layout: doc
question: true
title: "How do you separate presentational and container concerns?"
questionTitle: "How do you separate presentational and container concerns?"
description: "Learn How do you separate presentational and container concerns? with answers, examples, and real interview scenarios for React interviews."
difficulty: easy
experienceLevel: junior
tags: ["react", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keep data fetching, state coordination, and side effects at a boundary, while presentational components receive explicit props and emit events. Apply the split where it improves reuse and testing, not as a rigid component taxonomy."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/architecture/architecture-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Architecture"
    link: /react-interview-questions/architecture/
  - label: "How do you separate presentational and container concerns?"
prev:
  text: "What are portals?"
  link: "/react-interview-questions/advanced/advanced-question-2"
next:
  text: "Build a debounced search input."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-2"
---
# How do you separate presentational and container concerns?

## Answer

Keep data fetching, state coordination, and side effects at a boundary, while presentational components receive explicit props and emit events. Apply the split where it improves reuse and testing, not as a rigid component taxonomy.

## Example

```jsx
function UserPage({ userId, api }) {
  const user = useUser(userId, api)
  return <UserProfile user={user} />
}
```

Keep data access in a hook or boundary and make the display component easy to reuse and test.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
