---
layout: doc
question: true
title: "What is the same-origin policy?"
questionTitle: "What is the same-origin policy?"
description: "Learn What is the same-origin policy? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "The same-origin policy restricts a document from reading resources from a different scheme, host, or port unless that other origin explicitly permits it. It is a browser isolation boundary, not an authorization system for a server API."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/security/security-question-1"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Web Security"
    link: /frontend-interview-questions/security/
  - label: "What is the same-origin policy?"
prev:
  text: "What are Core Web Vitals?"
  link: "/frontend-interview-questions/performance/performance-question-1"
next:
  text: "What does web accessibility mean?"
  link: "/frontend-interview-questions/accessibility/accessibility-question-1"
---
# What is the same-origin policy?

## Answer

The same-origin policy restricts a document from reading resources from a different scheme, host, or port unless that other origin explicitly permits it. It is a browser isolation boundary, not an authorization system for a server API.

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
