---
layout: doc
question: true
title: "What are React Server Components in Next.js?"
questionTitle: "What are React Server Components in Next.js?"
description: "Learn What are React Server Components in Next.js? with answers, examples, and real interview scenarios for Frontend interviews."
difficulty: easy
experienceLevel: junior
tags: ["frontend", "next-js"]
updated: 2026-10-06
readingMinutes: 1
answerExcerpt: "Server Components render on the server and send a serialized UI result rather than their JavaScript to the browser. They can read server-only resources directly, but cannot use browser APIs, event handlers, or client Hooks."
outline: deep
canonical: "https://interviewprep.world/frontend-interview-questions/next-js/next-js-question-3"
breadcrumbs:
  - label: Home
    link: /
  - label: "Frontend"
    link: /frontend-interview-questions/
  - label: "Next.js"
    link: /frontend-interview-questions/next-js/
  - label: "What are React Server Components in Next.js?"
prev:
  text: "When should you use Flexbox versus Grid?"
  link: "/frontend-interview-questions/css/css-question-3"
next:
  text: "Why must Redux reducers be pure?"
  link: "/frontend-interview-questions/redux/redux-question-3"
---
# What are React Server Components in Next.js?

## Answer

Server Components render on the server and send a serialized UI result rather than their JavaScript to the browser. They can read server-only resources directly, but cannot use browser APIs, event handlers, or client Hooks.

## Example

```tsx
// app/products/[id]/page.tsx
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  return <h1>{product.name}</h1>
}
```

A Server Component can fetch data close to the route without shipping that data-access code to the browser.


## Practical considerations

1. Choose the approach from the requirement and constraints, not from habit.
2. Include validation, error handling, and cleanup where the boundary requires them.
3. Verify the observable result with focused tests or measurement.

## In practice

For this easy-level topic, make assumptions explicit, choose the smallest safe implementation, and verify the behavior at the relevant boundary.
