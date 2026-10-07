---
layout: doc
question: true
title: "When would you use `Promise.race` or `Promise.any`?"
questionTitle: "When would you use `Promise.race` or `Promise.any`?"
description: "Learn When would you use `Promise.race` or `Promise.any`? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: medium
experienceLevel: mid
tags: ["javascript", "async"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "`Promise.race` settles with the first input to settle, whether fulfilled or rejected, which is useful for timeouts. `Promise.any` fulfills with the first successful input and rejects only when every input rejects, which suits redundant sources."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/async/async-question-6"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "Async JavaScript"
    link: /javascript-interview-questions/async/
  - label: "When would you use `Promise.race` or `Promise.any`?"
prev:
  text: "What is function composition?"
  link: "/javascript-interview-questions/functions/functions-question-6"
next:
  text: "How do you create an object without a prototype?"
  link: "/javascript-interview-questions/prototypes/prototypes-question-6"
---
# When would you use `Promise.race` or `Promise.any`?

## Answer

`Promise.race` settles with the first input to settle, whether fulfilled or rejected, which is useful for timeouts. `Promise.any` fulfills with the first successful input and rejects only when every input rejects, which suits redundant sources.

## Example

```js
console.log("start")
Promise.resolve().then(() => console.log("microtask"))
setTimeout(() => console.log("task"), 0)
console.log("end")
// start, end, microtask, task
```

Promise handlers use the microtask queue, which runs before the next timer task.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this medium-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
