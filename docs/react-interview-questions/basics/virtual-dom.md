---
layout: doc
question: true
title: "What is the Virtual DOM?"
questionTitle: "What is the Virtual DOM?"
description: "Learn what the Virtual DOM is, how React uses it, and common interview follow-ups with examples."
difficulty: easy
experienceLevel: junior
tags: ["react", "rendering", "reconciliation"]
updated: 2026-10-06
readingMinutes: 2
answerExcerpt: "The Virtual DOM is an in-memory tree of UI descriptions. React diffs it against the previous tree and applies minimal updates to the real DOM."
outline: deep
canonical: "https://interviewprep.world/react-interview-questions/basics/virtual-dom"
breadcrumbs:
  - label: Home
    link: /
  - label: "React"
    link: /react-interview-questions/
  - label: "React Basics"
    link: /react-interview-questions/basics/
  - label: "What is the Virtual DOM?"
next:
  text: "Explain the useEffect Hook"
  link: "/react-interview-questions/hooks/use-effect"
---
# What is the Virtual DOM?

## Answer

The **Virtual DOM** is a lightweight, in-memory representation of the UI. Libraries like React describe what the UI should look like as elements (a tree), compare the new tree with the previous one (**reconciliation**), and compute the smallest set of changes to apply to the real DOM.

This indirection helps batch updates, keep rendering predictable, and avoid unnecessary direct DOM manipulation.

## Code Examples

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}
// When `name` changes, React diffs the new element tree and updates the text node.
```

```jsx
// Keys help React identify list items across renders
{items.map(item => (
  <li key={item.id}>{item.label}</li>
))}
```

## Common Mistakes

- Claiming the Virtual DOM is *always* faster than manual DOM updates.
- Confusing Virtual DOM with Shadow DOM.
- Forgetting that diffing has a cost—large lists need keys, memoization, or virtualization.

## Follow-up Questions

- What is reconciliation and what role do keys play?
- Explain React Fiber at a high level.
- When might you bypass declarative rendering (refs, canvas, third-party widgets)?

## Real Interview Scenarios

You may be asked to trace what happens when state updates in a parent with several children, or to explain why improper list keys cause bugs in forms and inputs.
