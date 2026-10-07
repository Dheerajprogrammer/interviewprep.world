---
layout: doc
question: true
title: "What is the difference between event bubbling and capturing?"
questionTitle: "What is the difference between event bubbling and capturing?"
description: "Learn What is the difference between event bubbling and capturing? with answers, examples, and real interview scenarios for JavaScript interviews."
difficulty: easy
experienceLevel: junior
tags: ["javascript", "dom"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "What is the difference between event bubbling and capturing? is a practical the DOM interview topic. A strong answer defines the concept, shows where it applies, and explains the trade-offs."
outline: deep
canonical: "https://interviewprep.world/javascript-interview-questions/dom/dom-question-2"
breadcrumbs:
  - label: Home
    link: /
  - label: "JavaScript"
    link: /javascript-interview-questions/
  - label: "DOM & Browser APIs"
    link: /javascript-interview-questions/dom/
  - label: "What is the difference between event bubbling and capturing?"
prev:
  text: "What is the difference between default and named exports?"
  link: "/javascript-interview-questions/es6/es6-question-2"
next:
  text: "What is debouncing?"
  link: "/javascript-interview-questions/performance/performance-question-2"
---
# What is the difference between event bubbling and capturing?

## Answer

The DOM is a live tree managed by the browser. Event propagation, safe text insertion, and batching visual updates are the core ideas behind predictable browser-side code.

For **What is the difference between event bubbling and capturing?**, start with the rule or behaviour, then anchor it in a small realistic example. Distinguish the default approach from the exceptions and name the observable outcome: correctness, maintainability, accessibility, performance, or security.

## Example

```js
document.querySelector("#list").addEventListener("click", event => {
  const button = event.target.closest("button[data-id]")
  if (button) removeItem(button.dataset.id)
})
```

One delegated listener can handle buttons added later because clicks bubble to the list.

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

For this easy-level question, narrate your assumptions before coding. Interviewers can assess reasoning from a clear, bounded example much better than from a list of APIs.
