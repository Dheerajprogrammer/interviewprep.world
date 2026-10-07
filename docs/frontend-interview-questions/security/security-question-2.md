---
layout: doc
question: true
title: "What is CORS?"
questionTitle: "What is CORS?"
description: "Learn What is CORS? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Cross-Origin Resource Sharing is an HTTP mechanism through which a server tells browsers which origins, methods, headers, or credentials may access a resource. Configure it narrowly on the server; client-side headers cannot bypass it."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/security/security-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Security"
    link: /frontend-interview-questions/security/
  - label: "What is CORS?"
prev:
  text: "How do you reduce Largest Contentful Paint?"
  link: "/frontend-interview-questions/performance/performance-question-2"
next:
  text: "How do you use semantic HTML for accessibility?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-2"
---
# What is CORS?

## Answer

Cross-Origin Resource Sharing is an HTTP mechanism through which a server tells browsers which origins, methods, headers, or credentials may access a resource. Configure it narrowly on the server; client-side headers cannot bypass it.

## Example

```js
const message = document.createElement("p")
message.textContent = untrustedComment // never assign untrusted HTML
document.body.append(message)
```

`textContent` treats the value as text, preventing it from becoming executable markup.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
