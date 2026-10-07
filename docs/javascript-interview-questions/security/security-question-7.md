---
layout: doc
question: true
title: "How should sensitive data be stored in the browser?"
questionTitle: "How should sensitive data be stored in the browser?"
description: "Learn How should sensitive data be stored in the browser? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Avoid storing sensitive long-lived secrets in browser-accessible storage. Prefer short-lived, HttpOnly, Secure, SameSite cookies for session credentials, minimize what reaches the client, and assume any JavaScript-readable token can be stolen by XSS."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-7"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "How should sensitive data be stored in the browser?"
prev:
  text: "What is code splitting?"
  link: "/javascript-interview-questions/performance/performance-question-7"
next:
  text: "What is the adapter pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-7"
---
# How should sensitive data be stored in the browser?

## Answer

Avoid storing sensitive long-lived secrets in browser-accessible storage. Prefer short-lived, HttpOnly, Secure, SameSite cookies for session credentials, minimize what reaches the client, and assume any JavaScript-readable token can be stolen by XSS.

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
