---
layout: doc
question: true
title: "What are generators and iterators?"
questionTitle: "What are generators and iterators?"
description: "Learn What are generators and iterators? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "es6"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "An iterator exposes a `next()` method that yields a sequence; a generator function creates an iterator and can pause with `yield`. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/es6/es6-question-9"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "ES6+ Features"
    link: /javascript-interview-questions/es6/
  - label: "What are generators and iterators?"
prev:
  text: "What are getters and setters?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-9"
next:
  text: "What is the browser rendering pipeline?"
  link: "/javascript-interview-questions/dom/dom-question-9"
---
# What are generators and iterators?

## Answer

An iterator exposes a `next()` method that yields a sequence; a generator function creates an iterator and can pause with `yield`. They are useful for lazy sequences and custom iteration, though async iterators are often clearer for asynchronous streams.

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
