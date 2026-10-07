---
layout: doc
question: true
title: "How do you validate and sanitize user input?"
questionTitle: "How do you validate and sanitize user input?"
description: "Learn How do you validate and sanitize user input? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Validate input against the expected type, length, format, and authorization rules at the server boundary; normalize only when semantics require it; and sanitize only for the output context, such as HTML or a URL. Validation and sanitization solve different problems."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-10"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "How do you validate and sanitize user input?"
prev:
  text: "When should you use `requestAnimationFrame`?"
  link: "/javascript-interview-questions/performance/performance-question-10"
next:
  text: "How do you design a reusable API client?"
  link: "/javascript-interview-questions/patterns/patterns-question-10"
---
# How do you validate and sanitize user input?

## Answer

Validate input against the expected type, length, format, and authorization rules at the server boundary; normalize only when semantics require it; and sanitize only for the output context, such as HTML or a URL. Validation and sanitization solve different problems.

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
