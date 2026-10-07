---
layout: doc
question: true
title: "What are template literals?"
questionTitle: "What are template literals?"
description: "Learn What are template literals? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Template literals use backticks to support interpolation with `${...}`, multiline strings, and tagged processing functions. Use them for readable string construction, not to build unescaped HTML from untrusted values."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What are template literals?"
prev:
  text: "How does `new` work?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-3"
next:
  text: "What do `preventDefault` and `stopPropagation` do?"
  link: "/javascript-interview-questions/dom/dom-question-3"
---
# What are template literals?

## Answer

Template literals use backticks to support interpolation with `${...}`, multiline strings, and tagged processing functions. Use them for readable string construction, not to build unescaped HTML from untrusted values.

## Example

```js
const user = { name: "Ada", settings: { theme: "dark" } }
const { name, settings: { theme } } = user
const label = `${name}: ${theme}`
```

Destructuring reads values without changing the original object.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
