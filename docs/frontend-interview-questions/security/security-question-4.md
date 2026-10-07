---
layout: doc
question: true
title: "How do you prevent XSS?"
questionTitle: "How do you prevent XSS?"
description: "Learn How do you prevent XSS? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/security/security-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Security"
    link: /frontend-interview-questions/security/
  - label: "How do you prevent XSS?"
prev:
  text: "How do you improve Interaction to Next Paint?"
  link: "/frontend-interview-questions/performance/performance-question-4"
next:
  text: "How do you make a custom control keyboard accessible?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-4"
---
# How do you prevent XSS?

## Answer

Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries.

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

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
