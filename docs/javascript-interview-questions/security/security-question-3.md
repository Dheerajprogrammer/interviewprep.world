---
layout: doc
question: true
title: "What is cross-site scripting (XSS)?"
questionTitle: "What is cross-site scripting (XSS)?"
description: "Learn What is cross-site scripting (XSS)? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "What is cross-site scripting (XSS)?"
prev:
  text: "What is throttling?"
  link: "/javascript-interview-questions/performance/performance-question-3"
next:
  text: "What is the pub/sub pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-3"
---
# What is cross-site scripting (XSS)?

## Answer

XSS happens when untrusted data is interpreted as executable HTML or script in another user’s browser. Prevent it by using safe DOM APIs and framework escaping, sanitizing required HTML, and enforcing a Content Security Policy.

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
