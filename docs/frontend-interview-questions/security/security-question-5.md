---
layout: doc
question: true
title: "What is CSRF and how can it be mitigated?"
questionTitle: "What is CSRF and how can it be mitigated?"
description: "Learn What is CSRF and how can it be mitigated? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: hard
experienceLevel: senior
tags: ["frontend", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "CSRF tricks a browser into sending an authenticated cross-site request using ambient credentials such as cookies. Mitigate it with SameSite cookies, anti-CSRF tokens for state-changing requests, origin checks, and avoiding credentialed cross-origin endpoints."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/security/security-question-5"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Security"
    link: /frontend-interview-questions/security/
  - label: "What is CSRF and how can it be mitigated?"
prev:
  text: "What is the critical rendering path?"
  link: "/frontend-interview-questions/performance/performance-question-5"
next:
  text: "How do you manage focus in a modal dialog?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-5"
---
# What is CSRF and how can it be mitigated?

## Answer

CSRF tricks a browser into sending an authenticated cross-site request using ambient credentials such as cookies. Mitigate it with SameSite cookies, anti-CSRF tokens for state-changing requests, origin checks, and avoiding credentialed cross-origin endpoints.

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
