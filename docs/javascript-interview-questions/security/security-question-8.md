---
layout: doc
question: true
title: "What are secure cookie attributes?"
questionTitle: "What are secure cookie attributes?"
description: "Learn What are secure cookie attributes? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`Secure` sends cookies only over HTTPS, `HttpOnly` blocks JavaScript access, and `SameSite` limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "What are secure cookie attributes?"
prev:
  text: "What is tree shaking?"
  link: "/javascript-interview-questions/performance/performance-question-8"
next:
  text: "What is dependency injection in JavaScript?"
  link: "/javascript-interview-questions/patterns/patterns-question-8"
---
# What are secure cookie attributes?

## Answer

`Secure` sends cookies only over HTTPS, `HttpOnly` blocks JavaScript access, and `SameSite` limits cross-site sending. Set a narrow domain and path, an appropriate expiration, and use server-side session invalidation for high-risk credentials.

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
