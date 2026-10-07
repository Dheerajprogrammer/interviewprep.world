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
readingMinutes: 1
answerExcerpt: "Tree shaking removes unused exports from statically analyzable ES modules during bundling. It works best with side-effect-free modules and direct imports; dynamic access or CommonJS patterns can prevent unused code removal."
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

Tree shaking removes unused exports from statically analyzable ES modules during bundling. It works best with side-effect-free modules and direct imports; dynamic access or CommonJS patterns can prevent unused code removal.

## Example

```js
function debounce(fn, delay) {
  let id
  return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), delay) }
}
const search = debounce(query => fetch(`/api/search?q=${query}`), 250)
```

Debouncing waits for input to settle and avoids a request for every keystroke.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
