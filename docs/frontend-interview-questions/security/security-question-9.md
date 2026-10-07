---
layout: doc
question: true
title: "How do you safely render untrusted content?"
questionTitle: "How do you safely render untrusted content?"
description: "Learn How do you safely render untrusted content? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: medium
experienceLevel: mid
tags: ["frontend", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/security/security-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Security"
    link: /frontend-interview-questions/security/
  - label: "How do you safely render untrusted content?"
prev:
  text: "How do you use a performance budget?"
  link: "/frontend-interview-questions/performance/performance-question-9"
next:
  text: "How do you support reduced motion preferences?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-9"
---
# How do you safely render untrusted content?

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

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
