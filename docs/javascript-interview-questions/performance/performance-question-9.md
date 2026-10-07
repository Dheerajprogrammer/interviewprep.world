---
layout: doc
question: true
title: "How do you profile a slow web page?"
questionTitle: "How do you profile a slow web page?"
description: "Learn How do you profile a slow web page? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: hard
experienceLevel: senior
tags: ["javascript", "performance"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "How do you profile a slow web page? is a practical JavaScript performance interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/performance/performance-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Performance"
    link: /javascript-interview-questions/performance/
  - label: "How do you profile a slow web page?"
prev:
  text: "What is the browser rendering pipeline?"
  link: "/javascript-interview-questions/dom/dom-question-9"
next:
  text: "What is Content Security Policy?"
  link: "/javascript-interview-questions/security/security-question-9"
---
# How do you profile a slow web page?

## Answer

Performance work begins with a measurement: profile the slow interaction, identify the hottest work, and remove or defer it. Avoid optimizing from intuition, especially when it increases complexity or memory use.

For **How do you profile a slow web page?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

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

For this hard-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
