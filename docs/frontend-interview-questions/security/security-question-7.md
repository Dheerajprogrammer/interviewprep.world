---
layout: doc
question: true
title: "How should sensitive tokens be stored in a browser?"
questionTitle: "How should sensitive tokens be stored in a browser?"
description: "Learn How should sensitive tokens be stored in a browser? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/security/security-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Security"
    link: /frontend-interview-questions/security/
  - label: "How should sensitive tokens be stored in a browser?"
prev:
  text: "How do you measure web performance?"
  link: "/frontend-interview-questions/performance/performance-question-7"
next:
  text: "How do you test a page with a screen reader?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-7"
---
# How should sensitive tokens be stored in a browser?

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
