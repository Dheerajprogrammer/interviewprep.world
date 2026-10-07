---
layout: doc
question: true
title: "How do you prevent XSS in a web application?"
questionTitle: "How do you prevent XSS in a web application?"
description: "Learn How do you prevent XSS in a web application? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Keep untrusted data as text, use framework escaping or `textContent`, sanitize any intentionally supported HTML with a trusted library, validate URLs, and use a restrictive CSP. Never rely on client-side validation alone."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-4"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "How do you prevent XSS in a web application?"
prev:
  text: "What is memoization?"
  link: "/javascript-interview-questions/performance/performance-question-4"
next:
  text: "What is the factory pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-4"
---
# How do you prevent XSS in a web application?

## Answer

Keep untrusted data as text, use framework escaping or `textContent`, sanitize any intentionally supported HTML with a trusted library, validate URLs, and use a restrictive CSP. Never rely on client-side validation alone.

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
