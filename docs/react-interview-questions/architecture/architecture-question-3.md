---
layout: doc
question: true
title: "How do you design reusable components?"
questionTitle: "How do you design reusable components?"
description: "Learn How do you design reusable components? with answers, examples, and real interview scenarios for React interviews."
difficulty: medium
experienceLevel: mid
tags: ["react", "architecture"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Define a small semantic API, accessible defaults, and clear controlled or uncontrolled behavior. Compose slots or children for variation and avoid props that encode every possible layout or business rule."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/architecture/architecture-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Architecture"
    link: /react-interview-questions/architecture/
  - label: "How do you design reusable components?"
prev:
  text: "What is a render prop?"
  link: "/react-interview-questions/advanced/advanced-question-3"
next:
  text: "Build a reusable modal component."
  link: "/react-interview-questions/coding-challenges/coding-challenges-question-3"
---
# How do you design reusable components?

## Answer

Define a small semantic API, accessible defaults, and clear controlled or uncontrolled behavior. Compose slots or children for variation and avoid props that encode every possible layout or business rule.

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
