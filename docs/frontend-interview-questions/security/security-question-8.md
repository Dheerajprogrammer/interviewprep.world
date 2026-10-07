---
layout: doc
question: true
title: "What cookie attributes improve security?"
questionTitle: "What cookie attributes improve security?"
description: "Learn What cookie attributes improve security? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/security/security-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Security"
    link: /frontend-interview-questions/security/
  - label: "What cookie attributes improve security?"
prev:
  text: "What causes long tasks on the main thread?"
  link: "/frontend-interview-questions/performance/performance-question-8"
next:
  text: "How do you meet color contrast requirements?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-8"
---
# What cookie attributes improve security?

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

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
