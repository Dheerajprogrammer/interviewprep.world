---
layout: doc
question: true
title: "What is Content Security Policy?"
questionTitle: "What is Content Security Policy?"
description: "Learn What is Content Security Policy? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Content Security Policy is a response header that limits where scripts, styles, images, and other resources may load from. A nonce- or hash-based policy can greatly reduce the impact of injected markup by blocking unauthorized script execution."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "What is Content Security Policy?"
prev:
  text: "How do you profile a slow web page?"
  link: "/javascript-interview-questions/performance/performance-question-9"
next:
  text: "What is immutability and why does it matter?"
  link: "/javascript-interview-questions/patterns/patterns-question-9"
---
# What is Content Security Policy?

## Answer

Content Security Policy is a response header that limits where scripts, styles, images, and other resources may load from. A nonce- or hash-based policy can greatly reduce the impact of injected markup by blocking unauthorized script execution.

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
