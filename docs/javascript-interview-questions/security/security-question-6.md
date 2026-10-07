---
layout: doc
question: true
title: "Why is `eval` dangerous?"
questionTitle: "Why is `eval` dangerous?"
description: "Learn Why is `eval` dangerous? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "security"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`eval` executes a string as code in the current scope, enabling code injection when the string is influenced by untrusted data and making optimization and auditing harder. Use data parsers and explicit logic instead."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/security/security-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Security"
    link: /javascript-interview-questions/security/
  - label: "Why is `eval` dangerous?"
prev:
  text: "How can you avoid unnecessary reflows and repaints?"
  link: "/javascript-interview-questions/performance/performance-question-6"
next:
  text: "What is the strategy pattern?"
  link: "/javascript-interview-questions/patterns/patterns-question-6"
---
# Why is `eval` dangerous?

## Answer

`eval` executes a string as code in the current scope, enabling code injection when the string is influenced by untrusted data and making optimization and auditing harder. Use data parsers and explicit logic instead.

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
