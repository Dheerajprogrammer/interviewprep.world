---
layout: doc
question: true
title: "What is the difference between CommonJS and ES modules?"
questionTitle: "What is the difference between CommonJS and ES modules?"
description: "Learn What is the difference between CommonJS and ES modules? with answers, examples, and real interview scenarios for Backend interviews."
difficulty: hard
experienceLevel: senior
tags: ["backend", "node-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "CommonJS uses `require` and `module.exports` and historically resolves synchronously; ES modules use static `import` and `export`, support tree shaking, and can use top-level await. Choose one module system consistently at a package boundary."
outline: deep
canonical: "https://interviewprep.world/backend-interview-questions/node-js/node-js-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Backend"
    link: /backend-interview-questions/
  - label: "Node.js"
    link: /backend-interview-questions/node-js/
  - label: "What is the difference between CommonJS and ES modules?"
prev:
  text: "How does GraphQL differ from REST?"
  link: "/backend-interview-questions/graphql/graphql-question-2"
next:
  text: "How do you structure an Express application?"
  link: "/backend-interview-questions/express/express-question-3"
---
# What is the difference between CommonJS and ES modules?

## Answer

CommonJS uses `require` and `module.exports` and historically resolves synchronously; ES modules use static `import` and `export`, support tree shaking, and can use top-level await. Choose one module system consistently at a package boundary.

## Example

Consider a production Node.js change: define the expected behavior and failure modes first, implement the smallest observable change, then verify it with a focused test or measurement. The right implementation depends on the system boundary and its constraints.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this hard-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
