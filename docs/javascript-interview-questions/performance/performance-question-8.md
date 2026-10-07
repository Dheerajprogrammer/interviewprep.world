---
layout: doc
question: true
title: "What is tree shaking?"
questionTitle: "What is tree shaking?"
description: "Learn What is tree shaking? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is tree shaking? is a practical JavaScript performance interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-8"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "What is tree shaking?"
prev:
  text: "How do you use `data-*` attributes?"
  link: "/javascript-interview-questions/dom/dom-question-8"
next:
  text: "What are secure cookie attributes?"
  link: "/javascript-interview-questions/security/security-question-8"
---
# What is tree shaking?

## Answer

Performance work begins with a measurement: profile the slow interaction, identify the hottest work, and remove or defer it. Avoid optimizing from intuition, especially when it increases complexity or memory use.

For **What is tree shaking?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
function debounce(fn, delay) {
  let id
  return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), delay) }
}
const search = debounce(query => fetch(`/api/search?q=${query}`), 250)
```

Debouncing waits for input to settle and avoids a request for every keystroke.

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
