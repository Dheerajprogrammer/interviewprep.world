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
readingMinutes: 2
answerExcerpt: "How do you validate and sanitize user input? is a practical web security interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
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

Client-side security is layered: keep untrusted data from becoming executable markup, enforce server-side authorization, and use browser protections such as CSP, secure cookies, and same-origin boundaries.

For **How do you validate and sanitize user input?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
const message = document.createElement("p")
message.textContent = untrustedComment // never assign untrusted HTML
document.body.append(message)
```

`textContent` treats the value as text, preventing it from becoming executable markup.

## How to structure your answer

1. Define the concept in one or two sentences.
2. Explain when you would use it and when you would choose an alternative.
3. Walk through a small example, including an edge case.
4. Close with how you would test or measure the result.

## Common mistakes

- Repeating a definition without connecting it to real code.
- Treating an optimization or abstraction as a default rather than a trade-off.
- Omitting lifecycle, error, cleanup, accessibility, or testing considerations when they apply.

## Follow-up prompts

- What failure mode would you expect if this were implemented incorrectly?
- How would you test this behaviour?
- What changes when the feature must scale to a larger application or team?

## Interview tip

For this medium-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
